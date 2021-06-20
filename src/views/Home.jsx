/* eslint-disable max-len */
import { createRef } from 'react';
import { ReactComponent as IllustrationSVG } from '../assets/images/_illustration-working.svg';
import { ReactComponent as BrandRecognitionSVG } from '../assets/images/_icon-brand-recognition.svg';
import { ReactComponent as DetailedRecordsSVG } from '../assets/images/_icon-detailed-records.svg';
import { ReactComponent as FullyCustomizableSVG } from '../assets/images/_icon-fully-customizable.svg';
import ShortenWidget from '../components/ShortenWidget';
import ValuePropCard from '../components/ValuePropCard';
import BoostCta from '../components/BoostCta';
import useDeviceType from '../hooks/useDeviceType';

const valueProps = [
  {
    title: 'Brand Recognition',
    blurb: 'Boost your brand recognition with each click. Generic links don\'t mean a thing. Branded links help instil confidence in your content.',
    icon: <BrandRecognitionSVG />,
  },
  {
    title: 'Detailed Records',
    blurb: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
    icon: <DetailedRecordsSVG />,
  },
  {
    title: 'Fully Customizable',
    blurb: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
    icon: <FullyCustomizableSVG />,
  },
];

const Home = () => {
  const { isDesktop, isTablet } = useDeviceType();
  const widget = createRef();

  const scrollToWidget = () => {
    const yOffset = 81 + 10; // header height + padding
    const y = widget.current.getBoundingClientRect().top + window.pageYOffset - yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  const getIllustrationHeight = () => {
    if (isDesktop) return 450;
    if (isTablet) return 350;
    return 280;
  };

  return (
    <div className="home">
      <section className="px-4 sm:flex sm:items-center sm:pr-0 md:pr-0 md:pl-8 md:pt-4 lg:pl-10 lg:pt-0 max:pl-xl">
        <div className="home__illus-wrapper">
          <IllustrationSVG
            height={getIllustrationHeight()}
            className="home__illus"
          />
        </div>
        <div className="text-center sm:text-left sm:w-6/12 md:w-5/12">
          <h1 className="text-2xl lg:text-3xl font-bold text-indigo-100 leading-tight mt-8 sm:mt-0">
            More than just shorter links
          </h1>
          <p className="text-gray-300 lg:text-md mt-3">
            Build your brand&apos;s recognition and get detailed insights on how your links are performing.
          </p>
          <button
            type="button"
            className="btn mt-5"
            onClick={scrollToWidget}
          >
            Get Started
          </button>
        </div>
      </section>
      <section
        ref={widget}
        className="flex justify-center mt-xl px-4 md:px-8 lg:px-10 max:px-xl"
      >
        <ShortenWidget />
      </section>
      <section className="mt-xl px-4 text-center lg:px-10 max:px-xl">
        <div className="flex flex-col items-center px-2">
          <h2 className="text-xl font-bold text-indigo-100">Advanced Statistics</h2>
          <p className="text-gray-300 lg:w-4/12 lg:text-md mt-3">Track how your links are performing across the web with our advanced statistics dashboard.</p>
        </div>
        <div className="home__bg-line mt-xl lg:flex lg:items-center">
          {
            valueProps.map(({ title, blurb, icon }, i) => (
              <ValuePropCard
                key={title}
                title={title}
                blurb={blurb}
                className={i > 0 ? 'mt-xl lg:ml-8 max:ml-10' : ''}
              >
                { icon }
              </ValuePropCard>
            ))
          }
        </div>
      </section>
      <section className="mt-xl">
        <BoostCta handleScroll={scrollToWidget} />
      </section>
    </div>
  );
};

export default Home;
