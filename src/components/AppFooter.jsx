import { ReactComponent as FacebookSVG } from '../assets/images/_icon-facebook.svg';
import { ReactComponent as TwitterSVG } from '../assets/images/_icon-twitter.svg';
import { ReactComponent as PinterestSVG } from '../assets/images/_icon-pinterest.svg';
import { ReactComponent as InstagramSVG } from '../assets/images/_icon-instagram.svg';

const AppFooter = () => (
  <footer className="app-footer">
    <div>
      <span className="text-xl font-bold text-white leading-none">Shortly</span>
    </div>
    <nav className="app-footer__nav">
      <div className="app-footer__list-wrapper">
        <span
          className="block font-medium text-white"
        >
          Features
        </span>
        <ul className="mt-4">
          <li className="mt-2">
            <a
              href="/"
              className="link link--lighter"
            >
              Link Shortening
            </a>
          </li>
          <li className="mt-2">
            <a
              href="/"
              className="link link--lighter"
            >
              Branded Links
            </a>
          </li>
          <li className="mt-2">
            <a
              href="/"
              className="link link--lighter"
            >
              Analytics
            </a>
          </li>
        </ul>
      </div>
      <div className="app-footer__list-wrapper">
        <span
          className="block font-medium text-white"
        >
          Resources
        </span>
        <ul className="mt-4">
          <li className="mt-2">
            <a
              href="/"
              className="link link--lighter"
            >
              Blog
            </a>
          </li>
          <li className="mt-2">
            <a
              href="/"
              className="link link--lighter"
            >
              Developers
            </a>
          </li>
          <li className="mt-2">
            <a
              href="/"
              className="link link--lighter"
            >
              Support
            </a>
          </li>
        </ul>
      </div>
      <div className="app-footer__list-wrapper">
        <span
          className="block font-medium text-white"
        >
          Company
        </span>
        <ul className="mt-4">
          <li className="mt-2">
            <a
              href="/"
              className="link link--lighter"
            >
              About
            </a>
          </li>
          <li className="mt-2">
            <a
              href="/"
              className="link link--lighter"
            >
              Our Team
            </a>
          </li>
          <li className="mt-2">
            <a
              href="/"
              className="link link--lighter"
            >
              Careers
            </a>
          </li>
          <li className="mt-2">
            <a
              href="/"
              className="link link--lighter"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <div className="app-footer__social">
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
