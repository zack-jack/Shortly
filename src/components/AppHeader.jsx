import Menu from './Menu';
import useDeviceType from '../hooks/useDeviceType';
import useScrolledY from '../hooks/useScrolledY';
import useToggle from '../hooks/useToggle';

const AppHeader = () => {
  const { isDesktop } = useDeviceType();
  const { isScrolledY } = useScrolledY();
  const [isOpen, toggleIsOpen] = useToggle(false);

  return isDesktop
    ? (
      <header
        className={`fixed top-0 right-0 left-0 bg-white py-6 px-10 z-10 ${isScrolledY ? 'shadow-md' : ''}`}
      >
        <nav className="flex items-center justify-between">
          <ul className="flex items-center">
            <li>
              <a
                href="/"
                className="text-2xl font-bold text-indigo-100 leading-none"
              >
                Shortly
              </a>
            </li>
            <li className="ml-10">
              <a
                href="/"
                className="link"
              >
                Features
              </a>
            </li>
            <li className="ml-8">
              <a
                href="/"
                className="link"
              >
                Pricing
              </a>
            </li>
            <li className="ml-8">
              <a
                href="/"
                className="link"
              >
                Resources
              </a>
            </li>
          </ul>
          <ul className="flex items-center">
            <li>
              <a
                href="/"
                className="link"
              >
                Login
              </a>
            </li>
            <li>
              <a
                href="/"
                className="btn btn--sm ml-8"
              >
                Signup
              </a>
            </li>
          </ul>
        </nav>
      </header>
    )
    : (
      <header
        className={`fixed top-0 right-0 left-0 flex items-center justify-between bg-white py-6 px-4 z-10 ${isScrolledY ? 'shadow-md' : ''}`}
      >
        <a
          href="/"
          className="text-xl font-bold text-indigo-100 leading-none"
        >
          Shortly
        </a>
        <Menu
          isOpen={isOpen}
          handleClick={() => toggleIsOpen()}
        />
      </header>
    );
};

export default AppHeader;
