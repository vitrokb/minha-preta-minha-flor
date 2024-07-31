import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

vi.mock('./pages/BehindTheScenes', () => ({
  BehindTheScenes: () => <div>Behind The Scenes Page</div>,
}));

vi.mock('./pages/Exposition', () => ({
  Exposition: () => <div>Exposition Page</div>,
}));

vi.mock('./pages/Home', () => ({
  Home: () => <div>Home Page</div>,
}));

vi.mock('./pages/Project', () => ({
  Project: () => <div>Project Page</div>,
}));

describe('App component', () => {
  it('renders Home page on default route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('Home Page')).toBeVisible();
  });

  it('renders Behind The Scenes page on "bastidores" route', () => {
    render(
      <MemoryRouter initialEntries={['/bastidores']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('Behind The Scenes Page')).toBeVisible();
  });

  it('renders Exposition page on "exposicao" route', () => {
    render(
      <MemoryRouter initialEntries={['/exposicao']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('Exposition Page')).toBeVisible();
  });

  it('renders Project page on "projeto" route', () => {
    render(
      <MemoryRouter initialEntries={['/projeto']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('Project Page')).toBeVisible();
  });

  it('renders Home page on non mapped route', () => {
    render(
      <MemoryRouter initialEntries={['/teste']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('Home Page')).toBeVisible();
  });
});
