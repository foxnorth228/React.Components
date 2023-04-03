import { routes } from '../../../../main';
import jest from 'jest-mock';
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
  const formItem = screen.getByText('Form');
  expect(formItem).toBeInTheDocument();

  await user.click(formItem);
  await waitFor(async () => {
    expect(screen.getByRole('heading', { name: 'FormPage' }));

    window.confirm = jest.fn().mockImplementation(() => true);
    const submitButton = screen.getByText('Send Request');
    expect(submitButton).toBeInTheDocument();
    await userEvent.click(submitButton);

    const inputName = screen.getByPlaceholderText('Name of project...');
    expect(inputName).toBeInTheDocument();
    fireEvent.change(inputName, { target: { value: 'React' } });

    const inputCost = screen.getByPlaceholderText('How much money you offer...');
    expect(inputCost).toBeInTheDocument();
    fireEvent.change(inputCost, { target: { value: '2' } });

    const inputMail = screen.getByPlaceholderText('Your contact email...');
    expect(inputMail).toBeInTheDocument();
    fireEvent.change(inputMail, { target: { value: 'khitrii03@gmail.com' } });

    let file = new File(['example'], 'example.png', { type: 'image/png' });
    const inputFile = screen.getByLabelText('Choose sample image');
    expect(inputFile).toBeInTheDocument();

    await user.upload(inputFile, file);
    expect(inputFile.files.length).toBe(1);

    await userEvent.click(submitButton);
  });
});
