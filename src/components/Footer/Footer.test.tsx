import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

test('renders footer with correct content', () => {
  render(<Footer />);

  // Check if the footer text is rendered correctly
  expect(screen.getByText(/Website Development by/i)).toBeInTheDocument();
  expect(screen.getByText(/AVAMAE/i)).toBeInTheDocument();

  // Check if the link has the correct href attribute
  const linkElement = screen.getByRole('link', { name: /AVAMAE/i });
  expect(linkElement).toHaveAttribute('href', 'https://avamae.co.uk');
  expect(linkElement).toHaveAttribute('target', '_blank');
  expect(linkElement).toHaveAttribute('rel', 'noreferrer');
});
