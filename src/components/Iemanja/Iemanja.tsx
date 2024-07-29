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
    { name: Iemanja2 },
    { name: Iemanja4 },
    { name: Iemanja6 },
    { name: Iemanja7 },
    { name: Iemanja8 },
    { name: Iemanja9 },
  ];

  return (
    <OrixaSection
      isDesktop={isDesktop}
      firstImage={Iemanja1}
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
            <img className="iemanja-grid-img" src={Iemanja11} />
          </div>
          <div className="iemanja-grid-item-2">
            <img className="iemanja-grid-img" src={Iemanja12} />
          </div>
          <div className="iemanja-grid-item-3">
            <img className="iemanja-grid-img" src={Iemanja5} />
          </div>
        </div>
      }
    />
  );
}

export default Iemanja;
