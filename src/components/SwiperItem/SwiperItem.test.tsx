import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import SwiperItem, { SwiperItemProps } from './SwiperItem';

// Mocking the Button component
jest.mock('../Button/Button', () => ({
  Button: ({ title }: { title: string }) => <button>{title}</button>,
}));

describe('SwiperItem Component', () => {
  const defaultProps: SwiperItemProps = {
    ImageUrl: 'https://example.com/image.jpg',
    SubTitle: 'Sample Subtitle',
    Title: 'Sample Title',
  };

  it('renders the component with the correct title and subtitle', () => {
    render(
      <Router>
        <SwiperItem {...defaultProps} />
      </Router>
    );

    const titleElement = screen.getByText(defaultProps.Title);
    const subtitleElement = screen.getByText(defaultProps.SubTitle);

    expect(titleElement).toBeInTheDocument();
    expect(subtitleElement).toBeInTheDocument();
  });

  it('applies the correct background image style', () => {
    render(
      <Router>
        <SwiperItem {...defaultProps} />
      </Router>
    );

    const swiperItemElement = screen.getByRole('swiper-item', { name: '' }); // The top-level `div`
    expect(swiperItemElement).toHaveStyle({
      backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0)), url(${defaultProps.ImageUrl})`,
    });
  });

  it('uses the fallback image when no ImageUrl is provided', () => {
    const fallbackProps: SwiperItemProps = {
      ImageUrl: '',
      SubTitle: 'Fallback Subtitle',
      Title: 'Fallback Title',
    };

    render(
      <Router>
        <SwiperItem {...fallbackProps} />
      </Router>
    );

    const swiperItemElement = screen.getByRole('swiper-item-element', { name: '' });
    expect(swiperItemElement).toHaveStyle({
      backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0)), url("../../../../assets/images/shutterstock_407632243.jpg")`,
    });
  });

  it('renders the "Contact Us" button', () => {
    render(
      <Router>
        <SwiperItem {...defaultProps} />
      </Router>
    );

    const buttonElement = screen.getByRole('button', { name: 'Contact Us' });
    expect(buttonElement).toBeInTheDocument();
  });

  it('renders the "Contact Us" button as a link', () => {
    render(
      <Router>
        <SwiperItem {...defaultProps} />
      </Router>
    );

    const linkElement = screen.getByRole('link', { name: '' });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/contact');
  });
});
