import Menu from './Menu';
import useToggle from '../hooks/useToggle';

const AppHeader = () => {
  const [isOpen, toggleIsOpen] = useToggle(false);

  return (
    <header
      className="fixed top-0 right-0 left-0 flex items-center justify-between bg-white py-6 px-4 z-10"
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
