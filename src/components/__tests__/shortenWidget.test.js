/*
  global
  afterEach,
  jest,
  test,
  expect,
*/
import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import { config } from 'react-transition-group';
import ShortenWidget from '../ShortenWidget';
import { post } from '../../utils/http';

// disable transitions timers
config.disabled = true;

jest.mock('../../utils/http.js');

const page = {
  input: {
    link: /Shorten a link here.../i,
  },
  error: {
    validation: /Please enter a link./i,
    api: /There was an error with the request./i,
  },
  button: {
    copy: /Copy/,
    submit: /Shorten It!/i,
  },
};

afterEach(() => {
  jest.resetAllMocks();
});

test('Error message rendered | when empty input value is submitted', async () => {
  render(<ShortenWidget />);

  fireEvent.click(screen.getByText(page.button.submit));
  await waitFor(() => screen.queryByText(page.error.validation));

  expect(screen.queryByText(page.error.validation)).toBeInTheDocument();
});

test('Form is valid | when input has value', async () => {
  post.mockReturnValueOnce(Promise.resolve({}));
  render(<ShortenWidget />);

  fireEvent.change(
    screen.getByPlaceholderText(page.input.link),
    { target: { value: 'test' } },
  );
  await waitFor(() => screen.queryByText(page.error.validation));

  expect(screen.queryByText(page.error.validation)).not.toBeInTheDocument();
});

test('API error is rendered | when response returns an error', async () => {
  post.mockReturnValueOnce(Promise.resolve({
    raw: {
      data: {
        description: 'There was an error with the request.',
        status: 400,
      },
    },
  }));
  render(<ShortenWidget />);

  fireEvent.change(
    screen.getByPlaceholderText(page.input.link),
    { target: { value: 'test' } },
  );
  fireEvent.click(screen.getByText(page.button.submit));
  await waitFor(() => screen.queryByText(page.error.api));

  expect(screen.queryByText(page.error.api)).toBeInTheDocument();
});

test('API error is NOT rendered | when response is 200 series', async () => {
  post.mockReturnValueOnce(Promise.resolve({
    raw: {
      data: {
        status: 200,
      },
    },
  }));
  render(<ShortenWidget />);

  fireEvent.change(
    screen.getByPlaceholderText(page.input.link),
    { target: { value: 'test' } },
  );
  fireEvent.click(screen.getByText(page.button.submit));
  await waitFor(() => screen.queryByText(page.error.api));

  expect(screen.queryByText(page.error.api)).not.toBeInTheDocument();
});

test('Result card is rendered | when response is 200 series', async () => {
  post.mockReturnValueOnce(Promise.resolve({
    id: 'test',
    link: 'https://test.com/',
    long_url: 'https://original-url.com/',
  }));
  render(<ShortenWidget />);

  fireEvent.change(
    screen.getByPlaceholderText(page.input.link),
    { target: { value: 'https://example.com' } },
  );
  fireEvent.click(screen.getByText(page.button.submit));
  await waitFor(() => screen.queryByText(page.button.copy));

  expect(screen.queryByText('https://original-url.com/')).toBeInTheDocument();
  expect(screen.queryByText('https://test.com/')).toBeInTheDocument();
  expect(screen.queryByText(page.button.copy)).toBeInTheDocument();
});
