import { routes } from './main';
import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Routes } from 'react-router';
import { createMemoryHistory } from 'history';

test('test 1', async () => {
  const history = createMemoryHistory();

  render(
    <MemoryRouter history={history} location={history.location} navigator={history}>
      <Routes>{routes}</Routes>
    </MemoryRouter>
  );

  const user = userEvent.setup();

  fireEvent.change(screen.getByPlaceholderText('Search...'), {
    target: { value: 'React' },
  });
  const aboutItem = screen.getByText('About');
  expect(aboutItem).toBeInTheDocument();

  await user.click(aboutItem);
  await waitFor(() => {
    expect(screen.getByRole('heading', { name: 'AboutPage' }));
    expect(localStorage.getItem('search-bar-key')).toMatch(/React/);
  });
  await user.click(screen.getByText('404'));
  await waitFor(() => {
    expect(screen.getByRole('heading', { name: 'ErrorPage' }));
  });
});
