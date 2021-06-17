/*
  global
  test,
  expect,
*/
import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import ShortenWidget from '../ShortenWidget';

const page = {
  input: {
    link: 'Shorten a link here...',
  },
  errorMessage: 'Please enter a link.',
  button: {
    submit: 'Shorten It!',
  },
};

test('Error message rendered | when empty input value is submitted', async () => {
  render(<ShortenWidget />);

  fireEvent.click(screen.getByText(page.button.submit));
  await waitFor(() => screen.queryByText(page.errorMessage));

  expect(screen.queryByText(page.errorMessage)).toBeInTheDocument();
});

test('Form is valid | when input is entered', async () => {
  render(<ShortenWidget />);

  fireEvent.change(
    screen.getByPlaceholderText(page.input.link),
    { target: { value: 'test' } },
  );
  await waitFor(() => screen.queryByText(page.errorMessage));

  expect(screen.queryByText(page.errorMessage)).not.toBeInTheDocument();
});
