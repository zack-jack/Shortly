const NavLinksDrawer = () => (
  <nav
    data-testid="nav-links"
    className="flex flex-col items-center"
  >
    <ul>
      <li>
        <a
          href="/"
          className="link link--white"
        >
          Features
        </a>
      </li>
      <li className="mt-5">
        <a
          href="/"
          className="link link--white"
        >
          Pricing
        </a>
      </li>
      <li className="mt-5">
        <a
          href="/"
          className="link link--white"
        >
          Resources
        </a>
      </li>
    </ul>
    <div
      aria-hidden
      className="hairline-light mt-5"
    />
    <ul className="mt-5">
      <li>
        <a
          href="/"
          className="link link--white"
        >
          Login
        </a>
      </li>
      <li>
        <a
          href="/"
          className="btn mt-5"
        >
          Signup
        </a>
      </li>
    </ul>
  </nav>
);

export default NavLinksDrawer;
