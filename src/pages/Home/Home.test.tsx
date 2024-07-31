import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Home from './Home';

describe.only('Home component', () => {
  it('renders the Navbar component', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('renders the hero image with alt text', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(screen.getByAltText('Hero image with the project logo')).toBeInTheDocument();
  });

  it('renders hero text', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(screen.getByText('o olhar sob')).toBeInTheDocument();
    expect(screen.getByText('nossas rainhas')).toBeInTheDocument();
    expect(screen.getByText('Yabás')).toBeInTheDocument();
  });

  it('renders the StyledButton with correct text', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(screen.getByRole('link', { name: /Confira aqui a exposição/i })).toBeInTheDocument();
  });

  it('renders the Footer component', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(
      screen.getByAltText('Partners and support for carrying out the project')
    ).toBeInTheDocument();
  });
});
