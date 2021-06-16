/*
  global
  test,
  expect,
*/

import React from 'react';
import {
  fireEvent, render, screen,
} from '@testing-library/react';
import { config } from 'react-transition-group';
import AppHeader from '../AppHeader';

config.disabled = true;

const page = {
  menu: 'menu',
  navLinks: 'nav-links',
  button: {
    hamburger: 'hamburger',
  },
};

test('Navigation links visible | when hamburger button clicked', () => {
  render(<AppHeader />);

  fireEvent.click(screen.getByTestId(page.button.hamburger));

  expect(screen.queryByTestId(page.navLinks)).toBeInTheDocument();
});

test('Navigation links hidden | when close button clicked', async () => {
  render(<AppHeader />);

  fireEvent.click(screen.getByTestId(page.button.hamburger));
  fireEvent.click(screen.getByTestId(page.button.hamburger));

  expect(screen.queryByTestId(page.menu)).not.toBeInTheDocument();
});
