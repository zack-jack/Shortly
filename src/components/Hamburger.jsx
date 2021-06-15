import { useState } from 'react';

const Hamburger = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      type="button"
      className={`${isActive ? 'hamburger hamburger--active' : 'hamburger'}`}
      onClick={() => setIsActive(() => !isActive)}
    >
      <div className="hamburger__box">
        <div className="hamburger__inner" />
      </div>
    </button>
  );
};

export default Hamburger;
