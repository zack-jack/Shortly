import { PropTypes } from 'prop-types';
import useCopyToClipboard from '../hooks/useCopyToClipboard';

const ShortenWidgetResult = ({ className, original, shortened }) => {
  const [copied, copyToClipboard] = useCopyToClipboard(shortened);

  return (
    <div className={`shorten-widget-result ${className}`}>
      <div className="px-6 pt-4 pb-3 lg:p-0">
        <span className="block truncate">{original}</span>
      </div>
      <div className="hairline-dark lg:hidden" />
      <div className="p-6 pt-3 lg:flex lg:items-center lg:p-0">
        <a
          href={shortened}
          className="link link--cyan"
        >
          {shortened}
        </a>
        <button
          type="button"
          className={`btn btn--rect w-full mt-3 lg:mt-0 lg:ml-6 ${copied ? 'btn--secondary' : ''}`}
          onClick={copyToClipboard}
        >
          { copied ? 'Copied!' : 'Copy' }
        </button>
      </div>
    </div>
  );
};

ShortenWidgetResult.defaultProps = {
  className: '',
};

ShortenWidgetResult.propTypes = {
  className: PropTypes.string,
  original: PropTypes.string.isRequired,
  shortened: PropTypes.string.isRequired,
};

export default ShortenWidgetResult;
