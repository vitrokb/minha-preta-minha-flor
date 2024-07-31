import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import Project from './Project';

vi.mock('../../components/Logo', () => ({
  Logo: () => <div data-testid="logo" />,
}));

vi.mock('../../components/Navbar', () => ({
  Navbar: () => <div data-testid="navbar" />,
}));

describe('Project component', () => {
  it('should render Logo correctly', () => {
    render(<Project />);

    expect(screen.getByTestId('logo')).toBeInTheDocument();
  });

  it('should render Navbar correctly', () => {
    render(<Project />);

    expect(screen.getByTestId('navbar')).toBeInTheDocument();
  });

  it('should render the project description correctly', () => {
    render(<Project />);

    expect(
      screen.getByText(
        'O PROJETO MINHA PRETA MINHA FLOR - OLHAR SOB NOSSAS RAINHAS YABÁS, CONSISTE NA PRODUÇÃO E REALIZAÇÃO DE ENSAIOS FOTOGRÁFICOS QUE CULMINARAM NA MONTAGEM DESSA EXPOSIÇÃO, FÍSICA E VIRTUAL QUE VALORIZE E ENALTEÇA A BELEZA DE MULHERES NEGRAS SOBRE O OLHAR DE EQUIPE FORMADA POR MULHERES PRETAS SOB OS CENÁRIOS DA CIDADE DE NITERÓI COM A REFERÊNCIA ARTÍSTICA ANCESTRAL E MATRIARCAL DAS YABÁS, RAINHAS E DEUSAS DA MITOLOGIA YORÙBÁ E DE EXALTAÇÃO DAS CULTURAS DE MATRIZ AFRICANA. ESTA EXPOSIÇÃO FOI UM PROJETO CONTEMPLADO PELA CHAMADA PÚBLICA 02/2023 SECRETARIA MUNICIPAL - LEI PAULO GUSTAVO'
      )
    ).toBeVisible();
  });
});
