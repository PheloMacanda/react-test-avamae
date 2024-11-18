import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Button } from './Button';

describe('Button Component', () => {
  it('renders the button with correct title and variant', () => {
    render(<Button title="Click Me" variant="primary" />);

    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('button-container'); // For primary variant
  });

  it('applies custom styles to the button', () => {
    const customStyles = { backgroundColor: 'red' };

    render(
      <Button
        title="Styled Button"
        variant="primary"
        styles={customStyles}
      />
    );

    const buttonElement = screen.getByRole('button', { name: /styled button/i });
    expect(buttonElement).toHaveStyle('background-color: red');
  });

  it('applies custom text styles to the button title', () => {
    const customTextStyles = { color: 'blue' };

    render(
      <Button
        title="Text Styled Button"
        variant="primary"
        buttonTextStyles={customTextStyles}
      />
    );

    const textElement = screen.getByText(/text styled button/i);
    expect(textElement).toHaveStyle('color: blue');
  });

  it('renders the secondary variant correctly', () => {
    render(<Button title="Secondary Button" variant="secondary" />);

    const buttonElement = screen.getByRole('button', { name: /secondary button/i });
    expect(buttonElement).toHaveClass('button-container-secondary'); // For secondary variant
  });

  it('calls the correct function when clicked', async () => {
    const mockOnClick = jest.fn();
    render(
      <Button
        title="Clickable Button"
        variant="primary"
        type="button"
        styles={{ cursor: 'pointer' }}
        buttonTextStyles={{ fontWeight: 'bold' }}
        onClick={mockOnClick}
      />
    );

    const buttonElement = screen.getByRole('button', { name: /clickable button/i });
    await userEvent.click(buttonElement);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});