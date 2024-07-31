import { OrixaSection } from '../OrixaSection';
import Oxum1 from '../../assets/oxum-pictures/1.jpg';
import Oxum2 from '../../assets/oxum-pictures/2.jpg';
import Oxum3 from '../../assets/oxum-pictures/3.jpg';
import Oxum4 from '../../assets/oxum-pictures/4.jpg';
import Oxum5 from '../../assets/oxum-pictures/5.jpg';
import Oxum6 from '../../assets/oxum-pictures/6.jpg';
import Oxum7 from '../../assets/oxum-pictures/7.jpg';
import Oxum8 from '../../assets/oxum-pictures/8.jpg';
import './Oxum.css';

interface OxumProps {
  isDesktop: boolean;
}

function Oxum({ isDesktop }: OxumProps) {
  const OxumPictures = [
    { name: Oxum2, description: 'Oxum first carrousel image' },
    { name: Oxum3, description: 'Oxum second carrousel image' },
    { name: Oxum4, description: 'Oxum third carrousel image' },
    { name: Oxum5, description: 'Oxum fourth carrousel image' },
    { name: Oxum6, description: 'Oxum fifth carrousel image' },
  ];

  return (
    <OrixaSection
      isDesktop={isDesktop}
      firstImage={{ name: Oxum1, description: 'Oxum first image' }}
      carrouselImages={OxumPictures}
      orixaName="Oxum"
      firstSectionText={
        <>
          Eu vi Mamãe Oxum nas cachoeiras <br></br> Sentada na beira do rio <br></br> Colhendo
          lírios (lírio e) <br></br> Colhendo lírios (lírios a) <br></br> Colhendo lírios pra
          enfeitar nosso congá
        </>
      }
      modelName={
        <>
          THAIS PIO <br></br> THAIS
        </>
      }
      modelStatement="“RECENTEMENTE EU PARTICIPEI DE UM PROCESSO DE UM BATIZADO DE COROAÇÃO NO TERREIRO, FOI UM PROCESSO MUITO INTERESSANTE PORQUE NO DIA, FOI COMO SE FOSSE UMA GRANDE FESTA, E DEPOIS QUE EU PASSEI POR ESSE PROCESSO, EU SENTI MUITO A FORÇA DE MÃE OXUM, ME RELEMBRANDO DA MINHA FORÇA, ME RELEMBRANDO DA BELEZA, ME LEMBRANDO A TER SABERIA. SE APROXIMANDO DE MIM EM UM SENTIDO MUITO SIMBÓLICO DE QUE A MINHA BELEZA ELA NÃO PRECISA ESTAR EM TRAÇOS FÍSICOS, MAS ME LEMBRANDO QUE A MINHA BELEZA. PODE ESTAR NA FORÇA QUE ELA TEM PRA ME DEIXAR MAIS SEGURA, MAIS CONFIANTE E QUE MINHA BELEZA NA IDEIA DE QUE EU POSSO CONSEGUIR ALCANÇAR OS MEUS SONHOS QUE EU ACHAVA QUE ERA MAIS IMPOSSÍVEIS. A FORÇA DE OXUM TEM APARECIDO NA MINHA VIDA COMO AXÉ MESMO COMO FORÇA VITAL.“"
      firstSectionInverse
      grid={
        <div className="oxum-grid-wrapper">
          <div className="oxum-grid-item-1">
            <img className="oxum-grid-img" alt="Oxum first grid image" src={Oxum7} />
          </div>
          <div className="oxum-grid-item-2">
            <img className="oxum-grid-img" alt="Oxum second grid image" src={Oxum8} />
          </div>
        </div>
      }
    />
  );
}

export default Oxum;
