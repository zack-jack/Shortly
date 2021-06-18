import { ReactComponent as FacebookSVG } from '../assets/images/_icon-facebook.svg';
import { ReactComponent as TwitterSVG } from '../assets/images/_icon-twitter.svg';
import { ReactComponent as PinterestSVG } from '../assets/images/_icon-pinterest.svg';
import { ReactComponent as InstagramSVG } from '../assets/images/_icon-instagram.svg';

const AppFooter = () => (
  <footer className="flex flex-col items-center bg-indigo-200 p-10 text-center">
    <div>
      <span className="text-xl font-bold text-white leading-none">Shortly</span>
    </div>
    <nav className="mt-10">
      <span
        className="block font-medium text-white"
      >
        Features
      </span>
      <ul className="mt-4">
        <li className="mt-2">
          <a
            href="/"
            className="link link--gray"
          >
            Link Shortening
          </a>
        </li>
        <li className="mt-2">
          <a
            href="/"
            className="link link--gray"
          >
            Branded Links
          </a>
        </li>
        <li className="mt-2">
          <a
            href="/"
            className="link link--gray"
          >
            Analytics
          </a>
        </li>
      </ul>
      <span
        className="block font-medium text-white mt-8"
      >
        Resources
      </span>
      <ul className="mt-4">
        <li className="mt-2">
          <a
            href="/"
            className="link link--gray"
          >
            Blog
          </a>
        </li>
        <li className="mt-2">
          <a
            href="/"
            className="link link--gray"
          >
            Developers
          </a>
        </li>
        <li className="mt-2">
          <a
            href="/"
            className="link link--gray"
          >
            Support
          </a>
        </li>
      </ul>
      <span
        className="block font-medium text-white mt-8"
      >
        Company
      </span>
      <ul className="mt-4">
        <li className="mt-2">
          <a
            href="/"
            className="link link--gray"
          >
            About
          </a>
        </li>
        <li className="mt-2">
          <a
            href="/"
            className="link link--gray"
          >
            Our Team
          </a>
        </li>
        <li className="mt-2">
          <a
            href="/"
            className="link link--gray"
          >
            Careers
          </a>
        </li>
        <li className="mt-2">
          <a
            href="/"
            className="link link--gray"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
    <div className="flex items-center mt-10">
      <a href="/">
        <span className="sr-only">Facebook</span>
        <FacebookSVG
          aria-hidden
          className="social-icon not-sr-only"
        />
      </a>
      <a href="/" className="ml-4">
        <span className="sr-only">Twitter</span>
        <TwitterSVG className="social-icon not-sr-only" />
      </a>
      <a href="/" className="ml-4">
        <span className="sr-only">Pinterest</span>
        <PinterestSVG
          aria-hidden
          className="social-icon not-sr-only"
        />
      </a>
      <a href="/" className="ml-4">
        <span className="sr-only">Instagram</span>
        <InstagramSVG
          aria-hidden
          className="social-icon not-sr-only"
        />
      </a>
    </div>
  </footer>
);

export default AppFooter;
