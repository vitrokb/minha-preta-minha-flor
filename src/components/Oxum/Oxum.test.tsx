import { render, screen } from '@testing-library/react';
import Oxum from './Oxum';

describe('Iemanja component', () => {
  it('should render with correct elements', () => {
    render(<Oxum isDesktop={true} />);

    expect(screen.getByText('Oxum')).toBeVisible();
    expect(screen.getByText('Eu vi Mamãe Oxum nas cachoeiras', { exact: false })).toBeVisible();

    expect(screen.getByText('THAIS PIO', { exact: false })).toBeVisible();

    expect(
      screen.getByText(
        '“RECENTEMENTE EU PARTICIPEI DE UM PROCESSO DE UM BATIZADO DE COROAÇÃO NO TERREIRO, FOI UM PROCESSO MUITO INTERESSANTE PORQUE NO DIA, FOI COMO SE FOSSE UMA GRANDE FESTA, E DEPOIS QUE EU PASSEI POR ESSE PROCESSO, EU SENTI MUITO A FORÇA DE MÃE OXUM, ME RELEMBRANDO DA MINHA FORÇA, ME RELEMBRANDO DA BELEZA, ME LEMBRANDO A TER SABERIA. SE APROXIMANDO DE MIM EM UM SENTIDO MUITO SIMBÓLICO DE QUE A MINHA BELEZA ELA NÃO PRECISA ESTAR EM TRAÇOS FÍSICOS, MAS ME LEMBRANDO QUE A MINHA BELEZA. PODE ESTAR NA FORÇA QUE ELA TEM PRA ME DEIXAR MAIS SEGURA, MAIS CONFIANTE E QUE MINHA BELEZA NA IDEIA DE QUE EU POSSO CONSEGUIR ALCANÇAR OS MEUS SONHOS QUE EU ACHAVA QUE ERA MAIS IMPOSSÍVEIS. A FORÇA DE OXUM TEM APARECIDO NA MINHA VIDA COMO AXÉ MESMO COMO FORÇA VITAL.“'
      )
    ).toBeVisible();

    expect(screen.getByAltText('Oxum first image')).toBeVisible();

    expect(screen.getByAltText('Oxum first carrousel image')).toBeInTheDocument();
    expect(screen.getByAltText('Oxum second carrousel image')).toBeInTheDocument();
    expect(screen.getByAltText('Oxum third carrousel image')).toBeInTheDocument();
    expect(screen.getByAltText('Oxum fourth carrousel image')).toBeInTheDocument();
    expect(screen.getByAltText('Oxum fifth carrousel image')).toBeInTheDocument();

    expect(screen.getByAltText('Oxum first grid image')).toBeVisible();
    expect(screen.getByAltText('Oxum second grid image')).toBeVisible();
  });
});
