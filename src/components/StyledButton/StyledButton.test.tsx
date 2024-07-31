import { render, screen } from '@testing-library/react';
import StyledButton from './StyledButton';

describe('StyledButton Component', () => {
  it('should render the button with children', () => {
    render(<StyledButton>Click Me</StyledButton>);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('Click Me');
  });

  it('should apply the active class when active prop is provided', () => {
    render(<StyledButton active="active-class">Click Me</StyledButton>);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveClass('active-class');
  });

  it('should not apply any active class when active prop is not provided', () => {
    render(<StyledButton>Click Me</StyledButton>);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).not.toHaveClass('active-class');
  });

  it('should apply default classes to the button', () => {
    render(<StyledButton>Click Me</StyledButton>);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveClass('btn custom-btn');
  });
});
