import { routes } from '../main';
import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Routes } from 'react-router';
import { createMemoryHistory } from 'history';
import { server } from '../mocks/server';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('test 1', async () => {
  const history = createMemoryHistory();

  render(
    <MemoryRouter history={history} location={history.location} navigator={history}>
      <Routes>{routes}</Routes>
    </MemoryRouter>
  );

  const user = userEvent.setup();

  await waitFor(async () => {
    const nameItem = screen.getByText(/name1/i);
    expect(nameItem).toBeInTheDocument();
    const input = screen.getByPlaceholderText('Search...');
    fireEvent.change(input, {
      target: { value: 'gan' },
    });
    fireEvent.keyDown(input, { key: 'Enter', code: 13, charCode: 13 });
    await waitFor(async () => {
      const nameItem = screen.getByText(/name1/i);
      expect(nameItem).toBeInTheDocument();
      await user.click(nameItem);
    });
  });
  const aboutItem = screen.getByText('About');
  expect(aboutItem).toBeInTheDocument();

  await user.click(aboutItem);
  await waitFor(() => {
    expect(screen.getByRole('heading', { name: 'AboutPage' }));
  });
  await user.click(screen.getByText('404'));
  await waitFor(() => {
    expect(screen.getByRole('heading', { name: 'ErrorPage' }));
  });
});
