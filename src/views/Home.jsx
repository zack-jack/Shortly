/* eslint-disable max-len */
import { createRef } from 'react';
import { ReactComponent as IllustrationSVG } from '../assets/images/_illustration-working.svg';
import { ReactComponent as BrandRecognitionSVG } from '../assets/images/_icon-brand-recognition.svg';
import { ReactComponent as DetailedRecordsSVG } from '../assets/images/_icon-detailed-records.svg';
import { ReactComponent as FullyCustomizableSVG } from '../assets/images/_icon-fully-customizable.svg';
import ShortenWidget from '../components/ShortenWidget';
import ValuePropCard from '../components/ValuePropCard';
import BoostCta from '../components/BoostCta';

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
  const widget = createRef();

  const scrollToWidget = () => {
    const yOffset = 81 + 10; // header height + padding
    const y = widget.current.getBoundingClientRect().top + window.pageYOffset - yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <div className="home">
      <section className="text-center px-4">
        <div
          className="home__illus-wrapper"
        >
          <IllustrationSVG
            height={300}
            className="home__illus"
          />
        </div>
        <h1 className="text-2xl font-bold text-indigo-100 leading-tight mt-8">
          More than just shorter links
        </h1>
        <p className="text-gray-300 mt-3">
          Build your brand&apos;s recognition and get detailed insights on how your links are performing.
        </p>
        <button
          type="button"
          className="btn mt-5"
          onClick={scrollToWidget}
        >
          Get Started
        </button>
      </section>
      <section
        ref={widget}
        className="flex justify-center mt-xl px-4"
      >
        <ShortenWidget />
      </section>
      <section className="mt-xl px-4 text-center">
        <div className="px-2">
          <h2 className="text-xl font-bold text-indigo-100">Advanced Statistics</h2>
          <p className="text-gray-300 mt-3">Track how your links are performing across the web with our advanced statistics dashboard.</p>
        </div>
        <div className="home__vertical-line mt-xl">
          {
            valueProps.map(({ title, blurb, icon }, i) => (
              <ValuePropCard
                key={title}
                title={title}
                blurb={blurb}
                className={i > 0 ? 'mt-xl' : ''}
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
