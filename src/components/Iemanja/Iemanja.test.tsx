import { render, screen } from '@testing-library/react';
import Iemanja from './Iemanja';

describe('Iemanja component', () => {
  it('should render with correct elements', () => {
    render(<Iemanja isDesktop={false} />);

    expect(screen.getByText('Yemanjá')).toBeVisible();
    expect(screen.getByText('Como é lindo o canto de Yemanjá', { exact: false })).toBeVisible();

    expect(screen.getByText('THAIS BERNARDES', { exact: false })).toBeVisible();

    expect(
      screen.getByText(
        '"YEMANJÁ PARA MIM É TUDO. ABAIXO DE DEUS FOI ELA QUEM ME TIROU DA DEPRESSÃO. FOI ELA QUE ME LIVROU DE MUITAS COISAS. DEPOIS DE DESCOBRIR QUE ELA ERA MINHA MÃE. QUANDO DESCOBRI QUE YEMANJÁ ERA MINHA MÃE. FOI A COISA MAIS LINDA DA MINHA VIDA. ELA MUDOU TOTALMENTE A MINHA VIDA.“'
      )
    ).toBeVisible();

    expect(screen.getByAltText('Iemanja first image')).toBeVisible();

    expect(screen.getByAltText('Iemanja first carrousel image')).toBeInTheDocument();
    expect(screen.getByAltText('Iemanja second carrousel image')).toBeInTheDocument();
    expect(screen.getByAltText('Iemanja third carrousel image')).toBeInTheDocument();
    expect(screen.getByAltText('Iemanja fourth carrousel image')).toBeInTheDocument();
    expect(screen.getByAltText('Iemanja fifth carrousel image')).toBeInTheDocument();
    expect(screen.getByAltText('Iemanja sixth carrousel image')).toBeInTheDocument();

    expect(screen.getByAltText('Iemanja first grid image')).toBeVisible();
    expect(screen.getByAltText('Iemanja second grid image')).toBeVisible();
    expect(screen.getByAltText('Iemanja third grid image')).toBeVisible();
  });
});
