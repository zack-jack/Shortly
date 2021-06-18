import { PropTypes } from 'prop-types';

const ValuePropCard = ({
  className, title, blurb, children,
}) => (
  <div className={`value-prop-card ${className}`}>
    <div className="value-prop-card__icon-wrapper">
      {children}
    </div>
    <div>
      <h3 className="text-lg font-bold text-indigo-100">
        {title}
      </h3>
      <p className="text-gray-300 mt-3">
        {blurb}
      </p>
    </div>
  </div>
);

ValuePropCard.defaultProps = {
  className: '',
};

ValuePropCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  blurb: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ValuePropCard;
