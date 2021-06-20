/*
  global
  describe,
  beforeEach,
  test,
  expect,
*/
import {
  fireEvent, render, screen,
} from '@testing-library/react';
import { config } from 'react-transition-group';
import AppHeader from '../AppHeader';

// disable transitions timers
config.disabled = true;

const screenWidths = {
  mobile: 375,
  desktop: 1440,
};

const page = {
  features: /features/i,
  login: /login/i,
  signup: /signup/i,
  menu: 'menu',
  navLinks: 'nav-links',
  backdrop: 'backdrop',
  button: {
    hamburger: 'hamburger',
  },
};

describe('Mobile', () => {
  beforeEach(() => {
    window.innerWidth = screenWidths.mobile;
  });

  test('Navigation links menu visible | when hamburger button is clicked', async () => {
    render(<AppHeader />);

    fireEvent.click(screen.getByTestId(page.button.hamburger));

    expect(screen.queryByTestId(page.navLinks)).toBeInTheDocument();
  });

  test('Navigation links menu hidden | when close button is clicked', async () => {
    render(<AppHeader />);

    fireEvent.click(screen.getByTestId(page.button.hamburger));
    fireEvent.click(screen.getByTestId(page.button.hamburger));

    expect(screen.queryByTestId(page.menu)).not.toBeInTheDocument();
  });

  test('Navigation links menu hidden | when backdrop is clicked', async () => {
    render(<AppHeader />);

    fireEvent.click(screen.getByTestId(page.button.hamburger));
    fireEvent.click(screen.getByTestId(page.backdrop));

    expect(screen.queryByTestId(page.menu)).not.toBeInTheDocument();
  });
});

describe('Desktop', () => {
  beforeEach(() => {
    window.innerWidth = screenWidths.desktop;
  });

  test('Navigation links visible | when component renders', async () => {
    render(<AppHeader />);

    expect(screen.queryByText(page.features)).toBeInTheDocument();
    expect(screen.queryByText(page.login)).toBeInTheDocument();
    expect(screen.queryByText(page.signup)).toBeInTheDocument();
  });
});
