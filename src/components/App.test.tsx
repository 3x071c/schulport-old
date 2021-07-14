import { render } from '@testing-library/react';
import App from './App';
import React from 'react';

describe('App', () => {
	it('should render without crashing', () => {
		const { baseElement } = render(<App />);
		expect(baseElement).toBeDefined();
	});
});
