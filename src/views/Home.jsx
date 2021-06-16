/* eslint-disable max-len */
import { ReactComponent as IllustrationSVG } from '../assets/images/_illustration-working.svg';

const Home = () => (
  <section className="home text-center">
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
);

export default Home;
