import { CSSTransition } from 'react-transition-group';
import { PropTypes } from 'prop-types';
import NavLinks from './NavLinks';

const Menu = ({ isOpen, handleClick }) => (
  <div>
    <button
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      data-testid="hamburger"
      type="button"
      className={`${isOpen ? 'hamburger hamburger--active' : 'hamburger'}`}
      onClick={handleClick}
    >
      <div className="hamburger__box">
        <div className="hamburger__inner" />
      </div>
    </button>
    <CSSTransition
      in={isOpen}
      timeout={220}
      classNames="fade"
      unmountOnExit
    >
      <div
        data-testid="menu"
        className="menu"
      >
        <div
          aria-hidden
          data-testid="backdrop"
          className="menu__backdrop"
          onClick={handleClick}
        />
        <div className="menu__content">
          <NavLinks />
        </div>
      </div>
    </CSSTransition>
  </div>
);

Menu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Menu;
