/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import { ReactComponent as BackgroundSVG } from '../assets/images/_bg-shorten-mobile.svg';
import { linkValidator } from '../validation/link';

const ShortenWidget = () => {
  const {
    formState: { errors }, register, reset, handleSubmit,
  } = useForm();

  const submit = (data) => {
    // eslint-disable-next-line no-console
    console.log('form data:', data);
    reset();
  };

  return (
    <div className="shorten-widget">
      <BackgroundSVG
        aria-hidden
        className="shorten-widget__bg-img"
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
  );
};

export default ShortenWidget;
