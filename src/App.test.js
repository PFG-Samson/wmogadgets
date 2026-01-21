import { render, screen } from '@testing-library/react';
import App from './App';

test('renders brand name', () => {
  render(<App />);
  const brandElement = screen.getAllByText(/WMO Gadgets/i)[0];
  expect(brandElement).toBeInTheDocument();
});
