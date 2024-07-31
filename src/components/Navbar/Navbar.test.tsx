import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import Navbar from './Navbar';
import { useMediaQuery } from '@mui/material';

vi.mock('@mui/material', () => ({
  useMediaQuery: vi.fn(),
}));

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useLocation: vi.fn(),
  };
});

const mockedUseMediaQuery = useMediaQuery as jest.Mock;
const mockedUseLocation = useLocation as jest.Mock;

describe('Navbar component', () => {
  it('renders the Navbar component', () => {
    mockedUseMediaQuery.mockReturnValue(false);
    mockedUseLocation.mockReturnValue({ pathname: '/' });

    render(
      <Router>
        <Navbar />
      </Router>
    );

    expect(screen.getByText('INICIO')).toBeInTheDocument();
    expect(screen.getByText('EXPOSIÇÃO')).toBeInTheDocument();
    expect(screen.getByText('PROJETO')).toBeInTheDocument();
    expect(screen.getByText('BASTIDORES')).toBeInTheDocument();
  });

  it('toggles the menu on button click', async () => {
    mockedUseMediaQuery.mockReturnValue(true);
    mockedUseLocation.mockReturnValue({ pathname: '/' });

    render(
      <Router>
        <Navbar />
      </Router>
    );

    const toggleButton = screen.getByRole('button', { name: /Toggle navigation/i });
    expect(toggleButton).toBeInTheDocument();

    fireEvent.click(toggleButton);
    expect(screen.getByRole('navigation')).toHaveClass('opened');

    fireEvent.click(toggleButton);
    expect(screen.getByRole('navigation')).not.toHaveClass('opened');
  });

  it('applies the active class based on the current path', () => {
    mockedUseMediaQuery.mockReturnValue(false);
    mockedUseLocation.mockReturnValue({ pathname: '/projeto' });

    render(
      <Router>
        <Navbar />
      </Router>
    );

    const activeButton = screen.getByText('PROJETO').closest('button');
    expect(activeButton).toHaveClass('active');

    const inactiveButton = screen.getByText('INICIO').closest('button');
    expect(inactiveButton).not.toHaveClass('active');
  });

  it('renders responsive class when media query matches', () => {
    mockedUseMediaQuery.mockReturnValue(true);
    mockedUseLocation.mockReturnValue({ pathname: '/' });

    render(
      <Router>
        <Navbar />
      </Router>
    );

    expect(screen.getByRole('navigation')).toHaveClass('responsive');
  });

  it('does not render responsive class when media query does not match', () => {
    mockedUseMediaQuery.mockReturnValue(false);
    mockedUseLocation.mockReturnValue({ pathname: '/' });

    render(
      <Router>
        <Navbar />
      </Router>
    );

    expect(screen.getByRole('navigation')).not.toHaveClass('responsive');
  });
});
