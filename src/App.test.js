import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the main component\'s header', () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/maher brini/i);
  expect(headerElement).toBeInTheDocument();
});
