import { OrixaSection } from '../OrixaSection';
import Yansa1 from '../../assets/yansa-pictures/1.jpg';
import Yansa2 from '../../assets/yansa-pictures/2.jpg';
import Yansa3 from '../../assets/yansa-pictures/3.jpg';
import Yansa4 from '../../assets/yansa-pictures/4.jpg';
import Yansa5 from '../../assets/yansa-pictures/5.jpg';
import Yansa6 from '../../assets/yansa-pictures/6.jpg';
import Yansa7 from '../../assets/yansa-pictures/7.jpg';
import Yansa8 from '../../assets/yansa-pictures/8.jpg';
import Yansa9 from '../../assets/yansa-pictures/9.jpg';
import './Yansa.css';

interface YansaProps {
  isDesktop: boolean;
}

function Yansa({ isDesktop }: YansaProps) {
  const YansaPictures = [
    { name: Yansa2, description: 'Yansa first carrousel image' },
    { name: Yansa3, description: 'Yansa second carrousel image' },
    { name: Yansa4, description: 'Yansa third carrousel image' },
    { name: Yansa5, description: 'Yansa fourth carrousel image' },
    { name: Yansa6, description: 'Yansa fifth carrousel image' },
    { name: Yansa7, description: 'Yansa sixth carrousel image' },
    { name: Yansa8, description: 'Yansa seventh carrousel image' },
  ];

  return (
    <OrixaSection
      isDesktop={isDesktop}
      firstImage={{ name: Yansa1, description: 'Yansa first image' }}
      carrouselImages={YansaPictures}
      orixaName="Yansã"
      firstSectionText={
        <>
          A eparrei ela é Oyá, ela é Oyá<br></br>A eparrei é Iansã, é Iansã<br></br>A eparrei
          <br></br>Quando Iansã vai pra batalha<br></br>Todos os cavaleiros param<br></br>Só pra ver
          ela passar<br></br>A eparrei ela é Oyá, ela é Oyá<br></br>A eparrei é Iansã, é Iansã
          <br></br>A eparrei Quando Iansã<br></br>vai pra batalha<br></br>Todos os cavaleiros param
        </>
      }
      modelName={
        <>
          JADE ZIMBA<br></br> JADE MARIA
        </>
      }
      modelStatement="“YANSÃ NA MINHA VIDA ELA TEM UMA IMPORTÂNCIA DE ME MOVIMENTAR O TEMPO TODO. INCLUSIVE ME
            FAZ ENTENDER OS MOMENTOS DE PAUSA COMO MOVIMENTO TAMBÉM. eLA É QUEM SOPRA OS VENTOS DA
            TRANSFORMAÇÃO, ELA É QUEM AS VEZES AGE DE UMA FORMA MAIS SEVERA PARA QUE NA GENTE
            PERCEBA AS COISAS QUE A GENTE PRECISA MUDAR. ELA É UMA MÃE QUE CUIDA, QUE NÃO É O
            ESTERIÓTIPO DA MATERNIDADE, MAS É UMA MATERNIDADE, UM CUIDADO QUE INFLUENCIA A GENTE A
            TER CORAGEM, FORÇA QUANDO NECESSÁRIO E LEVEZA QUANDO É PRECISO. pORQUE ELA TAMBÉM É
            LEVEZA, ELA TAMBÉM É TRANQUILIDADE, ELA TAMBÉM É BRISA.”"
      grid={
        <>
          <div className="yansa-grid-wrapper">
            <div className="yansa-grid-item-1">
              <img className="yansa-grid-img" alt="Yansa first grid image" src={Yansa8} />
            </div>
            <div className="yansa-grid-item-2">
              <img className="yansa-grid-img" alt="Yansa second grid image" src={Yansa5} />
            </div>
            <div className="yansa-grid-item-3">
              <img className="yansa-grid-img" alt="Yansa third grid image" src={Yansa9} />
            </div>
          </div>
        </>
      }
      minWidth
    />
  );
}

export default Yansa;
