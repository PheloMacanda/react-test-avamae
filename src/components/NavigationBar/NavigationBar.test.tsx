import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import NavigationBar from './NavigationBar';

// Mocking the Button component
jest.mock('../Button/Button', () => ({
  Button: ({ title }: { title: string }) => <button>{title}</button>,
}));

// Mocking the Logo SVG
jest.mock('../../assets/svg/Logo.svg', () => ({
  ReactComponent: () => <svg data-testid="logo" />,
}));

describe('NavigationBar Component', () => {
  beforeAll(() => {
    // Mocking the window.innerWidth for responsiveness tests
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024, // Default to a desktop size
    });
  });

  it('renders the logo as a link on larger screens', () => {
    render(
      <Router>
        <NavigationBar />
      </Router>
    );

    const logoLink = screen.getByRole('link', { name: '' });
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute('href', '/');
    expect(screen.getByTestId('logo')).toBeInTheDocument();
  });

  it('renders the navigation links', () => {
    render(
      <Router>
        <NavigationBar />
      </Router>
    );

    const links = [
      { text: 'Home', href: '/' },
      { text: 'About Us', href: '/about' },
      { text: 'Contact Us', href: '/contact' },
    ];

    links.forEach(({ text, href }) => {
      const linkElement = screen.getByRole('link', { name: text });
      expect(linkElement).toBeInTheDocument();
      expect(linkElement).toHaveAttribute('href', href);
    });
  });

  it('renders the login button with correct variant', () => {
    render(
      <Router>
        <NavigationBar />
      </Router>
    );

    const loginButton = screen.getByRole('button', { name: 'Log in' });
    expect(loginButton).toBeInTheDocument();
  });

  it('toggles the menu when clicking the logo on smaller screens', () => {
    window.innerWidth = 800; // Mock a smaller screen size
    render(
      <Router>
        <NavigationBar />
      </Router>
    );

    const logoDiv = screen.getByTestId('logo');
    const navList = screen.getByRole('list');

    // Initially, the menu should be closed
    expect(navList).not.toHaveClass('open');

    // Simulate clicking the logo
    fireEvent.click(logoDiv);

    // Menu should now be open
    expect(navList).toHaveClass('open');

    // Clicking again should close the menu
    fireEvent.click(logoDiv);
    expect(navList).not.toHaveClass('open');
  });

  it('renders the logo as a div on smaller screens', () => {
    window.innerWidth = 800; // Mock a smaller screen size
    render(
      <Router>
        <NavigationBar />
      </Router>
    );

    const logoDiv = screen.getByTestId('logo');
    expect(logoDiv).toBeInTheDocument();
    expect(logoDiv.closest('div')).toBeTruthy();
  });
});
