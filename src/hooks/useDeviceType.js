const useDeviceType = () => {
  const mobileMediaQuery = matchMedia('screen and (min-width: 0px) and (max-width: 1023px)');
  const deviceType = mobileMediaQuery.matches ? 'mobile' : 'desktop';

  return {
    deviceType,
    isDesktop: deviceType === 'desktop',
    isMobile: deviceType === 'mobile',
  };
};

export default useDeviceType;
