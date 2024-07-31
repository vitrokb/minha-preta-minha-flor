import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import BehindTheScenes from './BehindTheScenes';

vi.mock('../../components/Logo', () => ({
  Logo: () => <div data-testid="logo" />,
}));

vi.mock('../../components/Navbar', () => ({
  Navbar: () => <div data-testid="navbar" />,
}));

describe('BehindTheScenes component', () => {
  it('should render Logo correctly', () => {
    render(<BehindTheScenes />);

    expect(screen.getByTestId('logo')).toBeInTheDocument();
  });

  it('should render Navbar correctly', () => {
    render(<BehindTheScenes />);

    expect(screen.getByTestId('navbar')).toBeInTheDocument();
  });
});
