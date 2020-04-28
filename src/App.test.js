import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

test('renders the main component\'s header', () => {
	const { getByText } = render(<Home />);
	const headerElement = getByText(/maher brini/i);
	expect(headerElement).toBeInTheDocument();
});
