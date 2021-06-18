import { PropTypes } from 'prop-types';
import useCopyToClipboard from '../hooks/useCopyToClipboard';

const ShortenWidgetResult = ({ className, original, shortened }) => {
  const [copied, copyToClipboard] = useCopyToClipboard(shortened);

  return (
    <div className={`w-full bg-white rounded-lg ${className}`}>
      <div className="px-6 pt-4 pb-3">
        <span className="block truncate">{original}</span>
      </div>
      <div className="hairline-dark" />
      <div className="p-6 pt-3">
        <a
          href={shortened}
          className="link"
        >
          {shortened}
        </a>
        <button
          type="button"
          className={`btn btn--rect w-full mt-3 ${copied ? 'btn--secondary' : ''}`}
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
