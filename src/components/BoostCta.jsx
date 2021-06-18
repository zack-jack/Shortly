import { PropTypes } from 'prop-types';

const BoostCta = ({ headingText, buttonText, handleScroll }) => (
  <div className="boost-cta">
    <div
      aria-hidden
      className="boost-cta__bg-img"
    />
    <div className="boost-cta__content">
      <span className="boost-cta__heading">{headingText}</span>
      <button
        type="button"
        className="button mt-3"
        onClick={handleScroll}
      >
        {buttonText}
      </button>
    </div>
  </div>
);

BoostCta.defaultProps = {
  headingText: 'Boost your links today',
  buttonText: 'Get Started',
};

BoostCta.propTypes = {
  headingText: PropTypes.string,
  buttonText: PropTypes.string,
  handleScroll: PropTypes.func.isRequired,
};

export default BoostCta;
