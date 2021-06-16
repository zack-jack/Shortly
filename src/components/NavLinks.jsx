const NavLinks = () => (
  <nav
    data-testid="nav-links"
    className="nav-links"
  >
    <ul>
      <li>
        <a
          href="/"
          className="link"
        >
          Features
        </a>
      </li>
      <li className="mt-5">
        <a
          href="/"
          className="link"
        >
          Pricing
        </a>
      </li>
      <li className="mt-5">
        <a
          href="/"
          className="link"
        >
          Resources
        </a>
      </li>
    </ul>
    <div
      aria-hidden
      className="nav-links__hairline mt-5"
    />
    <ul className="mt-5">
      <li>
        <a
          href="/"
          className="link"
        >
          Login
        </a>
      </li>
      <li>
        <a
          href="/"
          className="button mt-5"
        >
          Signup
        </a>
      </li>
    </ul>
  </nav>
);

export default NavLinks;
