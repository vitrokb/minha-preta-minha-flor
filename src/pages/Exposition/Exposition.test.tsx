import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import Exposition from './Exposition';
import { useMediaQuery } from '@mui/material';

vi.mock('../../components/Logo', () => ({
  Logo: () => <div data-testid="logo" />,
}));

vi.mock('../../components/Navbar', () => ({
  Navbar: () => <div data-testid="navbar" />,
}));

vi.mock('../../components/Iemanja', () => ({
  Iemanja: ({ isDesktop }: { isDesktop: boolean }) => (
    <div data-testid="iemanja">{isDesktop ? 'Desktop' : 'Mobile'}</div>
  ),
}));

vi.mock('../../components/Oxum', () => ({
  Oxum: ({ isDesktop }: { isDesktop: boolean }) => (
    <div data-testid="oxum">{isDesktop ? 'Desktop' : 'Mobile'}</div>
  ),
}));

vi.mock('../../components/Yansa', () => ({
  Yansa: ({ isDesktop }: { isDesktop: boolean }) => (
    <div data-testid="yansa">{isDesktop ? 'Desktop' : 'Mobile'}</div>
  ),
}));

vi.mock('../../components/Nana', () => ({
  Nana: ({ isDesktop }: { isDesktop: boolean }) => (
    <div data-testid="nana">{isDesktop ? 'Desktop' : 'Mobile'}</div>
  ),
}));

vi.mock('../../components/Oba', () => ({
  Oba: ({ isDesktop }: { isDesktop: boolean }) => (
    <div data-testid="oba">{isDesktop ? 'Desktop' : 'Mobile'}</div>
  ),
}));

vi.mock('../../components/Footer', () => ({
  Footer: () => <div data-testid="footer" />,
}));

vi.mock('@mui/material', async () => {
  const actual = await vi.importActual('@mui/material');
  return {
    ...actual,
    useMediaQuery: vi.fn(),
  };
});

const mockedUseMediaQuery = useMediaQuery as vi.Mock;

describe('Exposition Component', () => {
  it('should render all components correctly in desktop view', () => {
    mockedUseMediaQuery.mockReturnValue(true);

    render(<Exposition />);

    expect(screen.getByTestId('logo')).toBeInTheDocument();
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
    expect(screen.getByTestId('iemanja')).toHaveTextContent('Desktop');
    expect(screen.getByTestId('oxum')).toHaveTextContent('Desktop');
    expect(screen.getByTestId('yansa')).toHaveTextContent('Desktop');
    expect(screen.getByTestId('nana')).toHaveTextContent('Desktop');
    expect(screen.getByTestId('oba')).toHaveTextContent('Desktop');
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('should render all components correctly in mobile view', () => {
    mockedUseMediaQuery.mockReturnValue(false);

    render(<Exposition />);

    expect(screen.getByTestId('logo')).toBeInTheDocument();
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
    expect(screen.getByTestId('iemanja')).toHaveTextContent('Mobile');
    expect(screen.getByTestId('oxum')).toHaveTextContent('Mobile');
    expect(screen.getByTestId('yansa')).toHaveTextContent('Mobile');
    expect(screen.getByTestId('nana')).toHaveTextContent('Mobile');
    expect(screen.getByTestId('oba')).toHaveTextContent('Mobile');
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
