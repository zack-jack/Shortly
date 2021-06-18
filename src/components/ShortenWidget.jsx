/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { ReactComponent as BackgroundSVG } from '../assets/images/_bg-shorten-mobile.svg';
import { linkValidator } from '../validation/link';
import { post } from '../utils/http';
import ShortenWidgetResult from './ShortenWidgetResult';
import useLinkCards from '../hooks/useLinkCards';

const ShortenWidget = () => {
  const {
    formState: { errors }, register, reset, handleSubmit,
  } = useForm();
  const [linkCards, addLinkCard] = useLinkCards();
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState('');

  const submit = async ({ link }) => {
    setLoading(true);
    setApiError('');

    // Bitly API expects JSON headers and params
    // TODO: build proxy service to make this less annoying
    const {
      id,
      link: shortenedUrl,
      long_url: originalUrl,
      raw,
    } = await post('https://api-ssl.bitly.com/v4/shorten',
      JSON.stringify({ long_url: link }),
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.REACT_APP_API_ACCESS_TOKEN}`,
        },
      });

    if (!raw?.data?.status?.toString().startsWith('2') && raw?.data?.description) {
      setApiError(raw?.data?.description);
      setLoading(false);
      return;
    }

    addLinkCard({ id, shortenedUrl, originalUrl });

    reset();
    setLoading(false);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="shorten-widget__form-wrapper">
        <BackgroundSVG
          aria-hidden
          className="shorten-widget__form-bg-img"
        />
        <form
          className="shorten-widget__form"
          onSubmit={handleSubmit((data) => submit(data))}
        >
          <label
            htmlFor="link"
            className="w-full"
          >
            <input
              id="link"
              {...register('link', linkValidator)}
              name="link"
              placeholder="Shorten a link here..."
              type="text"
              className={(errors.link || apiError) ? 'input-field errors' : 'input-field'}
            />
          </label>
          <div className="input-field__error-msg">
            { errors?.link?.message || apiError }
          </div>
          {
            loading ? (
              <button
                aria-disabled
                type="submit"
                disabled
                className="btn btn--rect btn--disabled w-full"
              >
                Shortening...
              </button>
            ) : (
              <button
                type="submit"
                className="btn btn--rect w-full"
              >
                Shorten It!
              </button>
            )
          }
        </form>
      </div>
      <TransitionGroup>
        {
          linkCards.length > 0
          && linkCards
            .filter(({ shortenedUrl }) => shortenedUrl)
            .map(({ id, originalUrl, shortenedUrl }) => (
              <CSSTransition
                key={id}
                timeout={300}
                classNames="slide-in-down"
              >
                <ShortenWidgetResult
                  original={originalUrl}
                  shortened={shortenedUrl}
                  className="mt-5"
                />
              </CSSTransition>
            ))
          }
      </TransitionGroup>
    </div>
  );
};

export default ShortenWidget;
