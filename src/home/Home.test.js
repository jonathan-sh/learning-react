import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';


test('renders learning react text', () => {
  const { getByText } = render(<Home />);
  const element = getByText(/learning react/i);
  expect(element).toBeInTheDocument();
});

test('have logo', ()=>{
  const  { getByTestId } = render(<Home />);

  const element = getByTestId('logo');
  expect(element).toBeInTheDocument();
  expect(element).toHaveClass('App-logo');
});