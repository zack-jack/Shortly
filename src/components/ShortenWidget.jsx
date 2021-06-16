import { ReactComponent as BackgroundSVG } from '../assets/images/_bg-shorten-mobile.svg';

const ShortenWidget = () => (
  <div className="shorten-widget">
    <BackgroundSVG
      aria-hidden
      className="shorten-widget__bg-img"
    />
    <form className="shorten-widget__form">
      <input
        placeholder="Shorten a link here..."
        type="text"
        className="input-field"
      />
      <button
        type="submit"
        className="button button--rect w-full mt-5"
      >
        Shorten It!
      </button>
    </form>
  </div>
);

export default ShortenWidget;
