import Menu from './Menu';
import useToggle from '../hooks/useToggle';

const AppHeader = () => {
  const [isOpen, toggleIsOpen] = useToggle(false);

  return (
    <header className="relative flex items-center justify-between py-6 px-4">
      <a
        href="/"
        className="text-lg font-bold text-indigo-100 leading-none"
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
