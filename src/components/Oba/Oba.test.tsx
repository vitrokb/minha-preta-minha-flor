import { render, screen } from '@testing-library/react';
import Oba from './Oba';

describe('Iemanja component', () => {
  it('should render with correct elements', () => {
    render(<Oba isDesktop={true} />);

    expect(screen.getByText('Obá')).toBeVisible();
    expect(screen.getByText('É mãe Obá vibrando sua espada', { exact: false })).toBeVisible();

    expect(screen.getByText('LETÍCIA HERCULANO', { exact: false })).toBeVisible();

    expect(
      screen.getByText(
        '“ESTAR NESSE PROJETO ELEVOU MINHA AUTOESTIMA. ME FEZ ME SENTIR VIVA. E OBÁ ME MOSTRA DE TODAS AS FORMAS, ATRAVÉS DA FOTOGRAFIA, ATRAVÉS DA ARTE OBÁ TAMBÉM ME ENSINA A IMPORTÂNCIA DELA NA MINHA VIDA, QUE É TAMANHA. DESDE OS MEUS OITO ANOS DE IDADE EU DIGO QUE OBÁ É O AR QUE EU RESPIRO, É MINHA VIDA, É MEU DIRECIONAMENTO. É A MINHA MÃE. FOI UM BALSAMO PRA MIM.”'
      )
    ).toBeVisible();

    expect(screen.getByAltText('Obá first image')).toBeVisible();

    expect(screen.getByAltText('Obá first carrousel image')).toBeInTheDocument();
    expect(screen.getByAltText('Obá second carrousel image')).toBeInTheDocument();
    expect(screen.getByAltText('Obá third carrousel image')).toBeInTheDocument();
    expect(screen.getByAltText('Obá fourth carrousel image')).toBeInTheDocument();
    expect(screen.getByAltText('Obá fifth carrousel image')).toBeInTheDocument();

    expect(screen.getByAltText('Obá first grid image')).toBeVisible();
    expect(screen.getByAltText('Obá second grid image')).toBeVisible();
  });
});
