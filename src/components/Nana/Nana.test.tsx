import { render, screen } from '@testing-library/react';
import Nana from './Nana';

describe('Iemanja component', () => {
  it('should render with correct elements', () => {
    render(<Nana isDesktop={true} />);

    expect(screen.getByText('Nanã')).toBeVisible();
    expect(screen.getByText('Quando olhei para o céu', { exact: false })).toBeVisible();

    expect(screen.getByText('VIVIAN ALMEIDA', { exact: false })).toBeVisible();

    expect(
      screen.getByText(
        '“NANÃ É MINHA MÃE. DESDE SEMPRE. FAZEM TRÊS ANOS QUE SOU FEITA NO CANDOMBLÉ. QUANDO EU SOU E VIVO ESSE MOMENTO DE RENASCIMENTO, NANÃ VEM E ME PEGA NO COLO, COM SEU MOLDE DE VIDA E TRANSFORMA MINHA VIDA DA ÁGUA PRO BARRO E O BARRO SE RENASCENDO E ENDURECENDO E TOMANDO FORMA. É O CARINHO DE NANÃ VINDO COM TODA SUA SABEDORIA DE UMA MAIS VELHA QUE VEM COM SEU CUIDADO, VEM COM SEU OLHAR, VEM COM SEU CARINHO, CRIA, ENSINA E VAI LEVANDO A VIDA COM TODA BELEZA DA TERRA, DO BARRO E DA PALHA.”'
      )
    ).toBeVisible();

    expect(screen.getByAltText('Nana first image')).toBeVisible();

    expect(screen.getByAltText('Nana first carrousel image')).toBeInTheDocument();
    expect(screen.getByAltText('Nana second carrousel image')).toBeInTheDocument();
    expect(screen.getByAltText('Nana third carrousel image')).toBeInTheDocument();
    expect(screen.getByAltText('Nana fourth carrousel image')).toBeInTheDocument();
    expect(screen.getByAltText('Nana fifth carrousel image')).toBeInTheDocument();

    expect(screen.getByAltText('Nana first grid image')).toBeVisible();
    expect(screen.getByAltText('Nana second grid image')).toBeVisible();
  });
});
