import { useEffect, useState } from 'react';

const useScrolledY = () => {
  const [isScrolledY, setIsScrolledY] = useState(window.scrollY !== 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolledY(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { isScrolledY };
};

export default useScrolledY;
