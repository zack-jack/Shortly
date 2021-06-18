/* eslint-disable max-len */
import { createRef } from 'react';
import { ReactComponent as IllustrationSVG } from '../assets/images/_illustration-working.svg';
import BoostCta from '../components/BoostCta';
import ShortenWidget from '../components/ShortenWidget';

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
        <h1 className="text-xl font-bold text-indigo-100 leading-tight mt-8">
          More than just shorter links
        </h1>
        <p className="text-gray-200 mt-3">
          Build your brand&apos;s recognition and get detailed insights on how your links are performing.
        </p>
        <button
          type="button"
          className="button mt-5"
          onClick={scrollToWidget}
        >
          Get Started
        </button>
      </section>
      <section
        ref={widget}
        className="flex justify-center my-xl px-4"
      >
        <ShortenWidget />
      </section>
      <section>
        <BoostCta handleScroll={scrollToWidget} />
      </section>
    </div>
  );
};

export default Home;
