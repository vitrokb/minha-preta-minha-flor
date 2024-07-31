import Iemanja1 from '../../assets/iemanja-pictures/1.jpg';
import Iemanja2 from '../../assets/iemanja-pictures/2.jpg';
import Iemanja4 from '../../assets/iemanja-pictures/4.jpg';
import Iemanja5 from '../../assets/iemanja-pictures/5.jpg';
import Iemanja6 from '../../assets/iemanja-pictures/6.jpg';
import Iemanja7 from '../../assets/iemanja-pictures/7.jpg';
import Iemanja8 from '../../assets/iemanja-pictures/8.jpg';
import Iemanja9 from '../../assets/iemanja-pictures/9.jpg';
import Iemanja11 from '../../assets/iemanja-pictures/11.jpg';
import Iemanja12 from '../../assets/iemanja-pictures/12.jpg';
import { OrixaSection } from '../OrixaSection';
import './Iemanja.css';

interface IemanjaProps {
  isDesktop: boolean;
}

function Iemanja({ isDesktop }: IemanjaProps) {
  const IemanjaPictures = [
    { name: Iemanja2, description: 'Iemanja first carrousel image' },
    { name: Iemanja4, description: 'Iemanja second carrousel image' },
    { name: Iemanja6, description: 'Iemanja third carrousel image' },
    { name: Iemanja7, description: 'Iemanja fourth carrousel image' },
    { name: Iemanja8, description: 'Iemanja fifth carrousel image' },
    { name: Iemanja9, description: 'Iemanja sixth carrousel image' },
  ];

  return (
    <OrixaSection
      isDesktop={isDesktop}
      firstImage={{ name: Iemanja1, description: 'Iemanja first image' }}
      carrouselImages={IemanjaPictures}
      orixaName="Yemanjá"
      firstSectionText={
        <>
          Como é lindo o canto de Yemanjá<br></br>Faz até o pescador chorar<br></br>Quem não escuta
          a mãe d'água cantar<br></br>Vai com ela pro fundo do mar.
        </>
      }
      modelName={
        <>
          THAIS BERNARDES <br></br> THAY BRAIDS
        </>
      }
      modelStatement='"YEMANJÁ PARA MIM É TUDO. ABAIXO DE DEUS FOI ELA QUEM ME TIROU DA DEPRESSÃO. FOI ELA QUE ME LIVROU DE MUITAS COISAS. DEPOIS DE DESCOBRIR QUE ELA ERA MINHA MÃE. QUANDO DESCOBRI QUE YEMANJÁ ERA MINHA MÃE. FOI A COISA MAIS LINDA DA MINHA VIDA. ELA MUDOU TOTALMENTE A MINHA VIDA.“'
      grid={
        <div className="iemanja-grid-wrapper">
          <div className="iemanja-grid-item-1">
            <img className="iemanja-grid-img" alt="Iemanja first grid image" src={Iemanja11} />
          </div>
          <div className="iemanja-grid-item-2">
            <img className="iemanja-grid-img" alt="Iemanja second grid image" src={Iemanja12} />
          </div>
          <div className="iemanja-grid-item-3">
            <img className="iemanja-grid-img" alt="Iemanja third grid image" src={Iemanja5} />
          </div>
        </div>
      }
    />
  );
}

export default Iemanja;
