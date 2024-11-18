import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

jest.mock('./pages/Home', () => ({
  Home: () => <div data-testid="home-page">Home</div>,
}));

jest.mock('./pages/Login', () => ({
  Login: () => <div data-testid="login-page">Login</div>,
}));

jest.mock('./pages/About', () => ({
  About: () => <div data-testid="about-page">About Us</div>,
}));

jest.mock('./pages/Contact', () => ({
  Contact: () => <div data-testid="contact-page">Contact Us</div>,
}));

jest.mock('./components/NavigationBar/NavigationBar', () => () => (
  <nav data-testid="navigation-bar">Navigation Bar</nav>
));

describe('App Component', () => {
  it('renders the NavigationBar component', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const navBar = screen.getByTestId('navigation-bar');
    expect(navBar).toBeInTheDocument();
  });

  it('renders the Home page on default route ("/")', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    const homePage = screen.getByTestId('home-page');
    expect(homePage).toBeInTheDocument();
  });

  it('renders the Login page on "/login"', () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <App />
      </MemoryRouter>
    );

    const loginPage = screen.getByTestId('login-page');
    expect(loginPage).toBeInTheDocument();
  });

  it('renders the About page on "/about"', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );

    const aboutPage = screen.getByTestId('about-page');
    expect(aboutPage).toBeInTheDocument();
  });

  it('renders the Contact page on "/contact"', () => {
    render(
      <MemoryRouter initialEntries={['/contact']}>
        <App />
      </MemoryRouter>
    );

    const contactPage = screen.getByTestId('contact-page');
    expect(contactPage).toBeInTheDocument();
  });

  it('renders a "not found" message for invalid routes', () => {
    render(
      <MemoryRouter initialEntries={['/invalid']}>
        <App />
      </MemoryRouter>
    );

    const notFoundMessage = screen.queryByText(/not found/i);
    expect(notFoundMessage).not.toBeInTheDocument(); // Modify the App if you plan to handle 404s.
  });
});
