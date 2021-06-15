import Hamburger from './Hamburger';

const AppHeader = () => (
  <header className="flex items-center justify-between py-4 px-2">
    <a
      href="/"
      className="text-lg font-bold text-indigo-100 leading-none"
    >
      Shortly
    </a>
    <Hamburger />
  </header>
);

export default AppHeader;
