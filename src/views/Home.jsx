/* eslint-disable max-len */
import { ReactComponent as IllustrationSVG } from '../assets/images/_illustration-working.svg';
import BoostCta from '../components/BoostCta';
import ShortenWidget from '../components/ShortenWidget';

const Home = () => (
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
      <a
        href="/"
        className="button mt-5"
      >
        Get Started
      </a>
    </section>
    <section className="flex justify-center my-xl px-4">
      <ShortenWidget />
    </section>
    <section>
      <BoostCta />
    </section>
  </div>
);

export default Home;
