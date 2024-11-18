import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Loader from './Loader';

describe('Loader Component', () => {
  it('renders the primary loader with the correct size', () => {
    render(<Loader variant="primary" size={50} />);

    const loaderElement = screen.getByRole('loader-primary', { name: '' });
    expect(loaderElement).toBeInTheDocument();

    const primaryLoader = loaderElement.querySelector('.loader-primary');
    expect(primaryLoader).toHaveStyle({ width: '50px', height: '50px' });
    expect(primaryLoader).toHaveClass('loader-primary');
  });

  it('renders the secondary loader with the correct size', () => {
    render(<Loader variant="secondary" size={100} />);

    const loaderElement = screen.getByRole('loader-secondary', { name: '' });
    expect(loaderElement).toBeInTheDocument();

    const secondaryLoader = loaderElement.querySelector('.loader-secondary');
    expect(secondaryLoader).toHaveStyle({ width: '100px', height: '100px' });
    expect(secondaryLoader).toHaveClass('loader-secondary');
  });

  it('renders children inside the loader', () => {
    render(
      <Loader variant="primary" size={50}>
        <span data-testid="loader-child">Child Content</span>
      </Loader>
    );

    const childElement = screen.getByTestId('loader-child');
    expect(childElement).toBeInTheDocument();
    expect(childElement).toHaveTextContent('Child Content');
  });

  it('renders loaderText when provided', () => {
    render(<Loader variant="primary" size={50} loaderText="Loading..." />);

    const loaderText = screen.getByText(/loading/i);
    expect(loaderText).toBeInTheDocument();
    expect(loaderText).toHaveClass('loader-text');
  });

  it('does not render loaderText when not provided', () => {
    render(<Loader variant="primary" size={50} />);

    const loaderText = screen.queryByText(/loading/i);
    expect(loaderText).not.toBeInTheDocument();
  });
});
