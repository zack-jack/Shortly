import { PropTypes } from 'prop-types';

const BoostCta = ({ headingText, buttonText }) => (
  <div className="boost-cta">
    <div className="boost-cta__bg-img not-sr-only" />
    <div className="boost-cta__content">
      <span className="boost-cta__heading">{headingText}</span>
      <a
        href="/"
        className="button mt-3"
      >
        {buttonText}
      </a>
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
};

export default BoostCta;
