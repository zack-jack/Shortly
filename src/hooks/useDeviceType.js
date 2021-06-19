/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

const useDeviceType = (breakpoint = 1023) => {
  const [deviceType, setDeviceType] = useState('');

  useEffect(() => {
    const handleWindowResize = () => {
      setDeviceType(window.innerWidth > breakpoint ? 'desktop' : 'mobile');
    };
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return {
    deviceType,
    isDesktop: deviceType === 'desktop',
    isMobile: deviceType === 'mobile',
  };
};

export default useDeviceType;
