import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App/>);
  const colorButton = screen.getByRole('button', {name: /change to blue/i});

  expect(colorButton).toHaveStyle({backgroundColor: 'red'});

  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({backgroundColor:'blue'});

  expect(colorButton.textContent).toBe('change to red');
});

test('button is initially enabled', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', { name: /change to blue/i  });
  const checkboxElement = screen.getByRole('checkbox');

  expect(buttonElement).toBeEnabled();
  expect(checkboxElement).not.toBeChecked();
});

test('button is toggled when checkbox is clicked', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', { name: /change to blue/i  });
  const checkboxElement = screen.getByRole('checkbox', {name: 'checkbox'});

  fireEvent.click(checkboxElement);

  expect(checkboxElement).toBeChecked();
  expect(buttonElement).toBeDisabled();
  expect(buttonElement).toHaveStyle({ backgroundColor: 'gray'});

  fireEvent.click(checkboxElement);

  expect(checkboxElement).not.toBeChecked();
  expect(buttonElement).toBeEnabled();
  expect(buttonElement).not.toHaveStyle({ backgroundColor: 'gray'});


});