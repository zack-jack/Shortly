/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

const useDeviceType = (breakpoints = { desktop: 1024, tablet: 768 }) => {
  const { desktop, tablet } = breakpoints;
  const getDeviceEnum = () => {
    if (window.innerWidth >= desktop) return 'desktop';
    if (window.innerWidth >= tablet) return 'tablet';
    return 'mobile';
  };

  const [deviceType, setDeviceType] = useState(getDeviceEnum());

  useEffect(() => {
    const handleWindowResize = () => {
      setDeviceType(getDeviceEnum());
    };
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return {
    deviceType,
    isDesktop: deviceType === 'desktop',
    isTablet: deviceType === 'tablet',
    isMobile: deviceType === 'mobile',
  };
};

export default useDeviceType;
