import { OrixaSection } from '../OrixaSection';
import Oba1 from '../../assets/oba-pictures/1.jpg';
import Oba2 from '../../assets/oba-pictures/2.jpg';
import Oba3 from '../../assets/oba-pictures/3.jpg';
import Oba4 from '../../assets/oba-pictures/4.jpg';
import Oba5 from '../../assets/oba-pictures/5.jpg';
import Oba6 from '../../assets/oba-pictures/6.jpg';
import Oba7 from '../../assets/oba-pictures/7.jpg';
import Oba8 from '../../assets/oba-pictures/8.jpg';
import './Oba.css';

interface ObaProps {
  isDesktop: boolean;
}

function Oba({ isDesktop }: ObaProps) {
  const obaPictures = [
    { name: Oba2 },
    { name: Oba3 },
    { name: Oba4 },
    { name: Oba5 },
    { name: Oba6 },
  ];

  return (
    <OrixaSection
      obaSection
      isDesktop={isDesktop}
      firstImage={Oba1}
      carrouselImages={obaPictures}
      orixaName="Oba"
      firstSectionText={
        <>
          É mãe Obá vibrando sua espada<br></br>Semeando forças, fecundando a Terra<br></br>É mãe
          Obá vibrando sua espada<br></br>Semeando forças, fecundando a Terra
        </>
      }
      modelName={
        <>
          LETÍCIA <br></br> LETÍCIA HERCULANO
        </>
      }
      modelStatement="
          “ESTAR NESSE PROJETO ELEVOU MINHA AUTOESTIMA. ME FEZ ME SENTIR VIVA. E OBÁ ME MOSTRA DE
            TODAS AS FORMAS, ATRAVÉS DA FOTOGRAFIA, ATRAVÉS DA ARTE OBÁ TAMBÉM ME ENSINA A
            IMPORTÂNCIA DELA NA MINHA VIDA, QUE É TAMANHA. DESDE OS MEUS OITO ANOS DE IDADE EU DIGO
            QUE OBÁ É O AR QUE EU RESPIRO, É MINHA VIDA, É MEU DIRECIONAMENTO. É A MINHA MÃE. FOI UM
            BALSAMO PRA MIM.”"
      grid={
        <>
          <div className="oba-grid-wrapper">
            <div className="oba-grid-item-1">
              <img className="oba-grid-img" src={Oba7} />
            </div>
            <div className="oba-grid-item-2">
              <img className="oba-grid-img" src={Oba8} />
            </div>
          </div>
        </>
      }
      minWidth
    />
  );
}

export default Oba;
