/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import ShortenWidgetResult from './ShortenWidgetResult';
import { ReactComponent as BackgroundSVG } from '../assets/images/_bg-shorten-mobile.svg';
import { linkValidator } from '../validation/link';

const ShortenWidget = () => {
  const {
    formState: { errors }, register, reset, handleSubmit,
  } = useForm();
  const [links] = useState([{ original: 'example', shortened: 'https://example.com/' }]);

  const submit = (data) => {
    // eslint-disable-next-line no-console
    console.log('form data:', data);
    reset();
  };

  return (
    <div
      id="shorten-widget"
      className="flex flex-col w-full"
    >
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
              className={errors.link ? 'input-field errors' : 'input-field'}
            />
          </label>
          <div className="input-field__error-msg">
            {errors.link && errors.link.message}
          </div>
          <button
            type="submit"
            className="button button--rect w-full"
          >
            Shorten It!
          </button>
        </form>
      </div>
      {
        links.length
        && links
          .filter(({ shortened }) => shortened)
          .map(({ original, shortened }) => (
            <ShortenWidgetResult
              key={shortened}
              original={original}
              shortened={shortened}
              className="mt-5"
            />
          ))
      }
    </div>
  );
};

export default ShortenWidget;
