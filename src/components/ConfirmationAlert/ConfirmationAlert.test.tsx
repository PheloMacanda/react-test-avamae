import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ConfirmationAlertBox from './ConfirmationAlertBox';

// Mocking the SVG component
jest.mock('../../assets/svg/Icon_Valid.svg', () => ({
  ReactComponent: () => <svg data-testid="valid-icon" />,
}));

describe('ConfirmationAlertBox Component', () => {
  it('renders the component with the provided title and subtitle', () => {
    render(<ConfirmationAlertBox title="Success" subTitle="Your submission was successful!" />);

    const titleElement = screen.getByText('Success');
    const subTitleElement = screen.getByText('Your submission was successful!');

    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveClass('alert-title');
    expect(subTitleElement).toBeInTheDocument();
    expect(subTitleElement).toHaveClass('alert-subTitle');
  });

  it('renders the ValidIcon SVG', () => {
    render(<ConfirmationAlertBox title="Success" subTitle="Your submission was successful!" />);

    const iconElement = screen.getByTestId('valid-icon');
    expect(iconElement).toBeInTheDocument();
  });

  it('has the correct container structure and styles', () => {
    render(<ConfirmationAlertBox title="Success" subTitle="Your submission was successful!" />);

    const container = screen.getByRole('confirmation-alert', { name: '' }); // <div> does not have a role; we target generically
    expect(container).toHaveClass('alert-container');

    const iconContainer = container.querySelector('.alert-icon');
    const contentContainer = container.querySelector('.alert-content');

    expect(iconContainer).toBeInTheDocument();
    expect(contentContainer).toBeInTheDocument();
  });
});
