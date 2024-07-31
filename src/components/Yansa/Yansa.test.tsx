import { render, screen } from '@testing-library/react';
import Yansa from './Yansa';

describe('Iemanja component', () => {
  it('should render with correct elements', () => {
    render(<Yansa isDesktop={true} />);

    expect(screen.getByText('Yansã')).toBeVisible();
    expect(screen.getByText('A eparrei ela é Oyá, ela é Oyá', { exact: false })).toBeVisible();

    expect(screen.getByText('JADE MARIA', { exact: false })).toBeVisible();

    expect(
      screen.getByText(
        '“YANSÃ NA MINHA VIDA ELA TEM UMA IMPORTÂNCIA DE ME MOVIMENTAR O TEMPO TODO. INCLUSIVE ME FAZ ENTENDER OS MOMENTOS DE PAUSA COMO MOVIMENTO TAMBÉM. eLA É QUEM SOPRA OS VENTOS DA TRANSFORMAÇÃO, ELA É QUEM AS VEZES AGE DE UMA FORMA MAIS SEVERA PARA QUE NA GENTE PERCEBA AS COISAS QUE A GENTE PRECISA MUDAR. ELA É UMA MÃE QUE CUIDA, QUE NÃO É O ESTERIÓTIPO DA MATERNIDADE, MAS É UMA MATERNIDADE, UM CUIDADO QUE INFLUENCIA A GENTE A TER CORAGEM, FORÇA QUANDO NECESSÁRIO E LEVEZA QUANDO É PRECISO. pORQUE ELA TAMBÉM É LEVEZA, ELA TAMBÉM É TRANQUILIDADE, ELA TAMBÉM É BRISA.”'
      )
    ).toBeVisible();

    expect(screen.getByAltText('Yansa first image')).toBeVisible();

    expect(screen.getByAltText('Yansa first carrousel image')).toBeInTheDocument();
    expect(screen.getByAltText('Yansa second carrousel image')).toBeInTheDocument();
    expect(screen.getByAltText('Yansa third carrousel image')).toBeInTheDocument();
    expect(screen.getByAltText('Yansa fourth carrousel image')).toBeInTheDocument();
    expect(screen.getByAltText('Yansa fifth carrousel image')).toBeInTheDocument();
    expect(screen.getByAltText('Yansa sixth carrousel image')).toBeInTheDocument();
    expect(screen.getByAltText('Yansa seventh carrousel image')).toBeInTheDocument();

    expect(screen.getByAltText('Yansa first grid image')).toBeVisible();
    expect(screen.getByAltText('Yansa second grid image')).toBeVisible();
    expect(screen.getByAltText('Yansa third grid image')).toBeVisible();
  });
});
