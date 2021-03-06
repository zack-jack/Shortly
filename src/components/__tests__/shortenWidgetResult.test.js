/*
  global
  test,
  expect,
  jest,
*/
import {
  act, fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import ShortenWidgetResult from '../ShortenWidgetResult';

const page = {
  button: {
    copy: /Copy/i,
    copied: /Copied!/i,
  },
};

test('Copy to clipboard success is indicated | when copy button clicked', async () => {
  render(<ShortenWidgetResult original="testing" shortened="test" />);

  fireEvent.click(screen.getByText(page.button.copy));
  await waitFor(() => screen.queryByText(page.button.copied));

  expect(screen.queryByText(page.button.copied)).toBeInTheDocument();
  expect(screen.queryByText(page.button.copy)).not.toBeInTheDocument();
});

test('Copy button text reverts to default | after timer expires', async () => {
  jest.useFakeTimers();
  render(<ShortenWidgetResult original="testing" shortened="test" />);

  fireEvent.click(screen.getByText(page.button.copy));

  await act(async () => {
    jest.runAllTimers();
    expect(screen.queryByText(page.button.copied)).not.toBeInTheDocument();
    expect(screen.queryByText(page.button.copy)).toBeInTheDocument();
  });
});
