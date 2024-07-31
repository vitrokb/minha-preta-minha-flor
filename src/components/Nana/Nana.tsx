import { OrixaSection } from '../OrixaSection';
import Nana1 from '../../assets/nana-pictures/1.jpg';
import Nana2 from '../../assets/nana-pictures/2.jpg';
import Nana3 from '../../assets/nana-pictures/3.jpg';
import Nana4 from '../../assets/nana-pictures/4.jpg';
import Nana5 from '../../assets/nana-pictures/5.jpg';
import Nana6 from '../../assets/nana-pictures/6.jpg';
import Nana7 from '../../assets/nana-pictures/7.jpg';
import Nana8 from '../../assets/nana-pictures/8.jpg';
import './Nana.css';

interface NanaProps {
  isDesktop: boolean;
}

function Nana({ isDesktop }: NanaProps) {
  const nanaPictures = [
    { name: Nana2, description: 'Nana first carrousel image' },
    { name: Nana3, description: 'Nana second carrousel image' },
    { name: Nana4, description: 'Nana third carrousel image' },
    { name: Nana5, description: 'Nana fourth carrousel image' },
    { name: Nana6, description: 'Nana fifth carrousel image' },
  ];

  return (
    <OrixaSection
      isDesktop={isDesktop}
      firstImage={{ name: Nana1, description: 'Nana first image' }}
      carrouselImages={nanaPictures}
      orixaName="Nanã"
      firstSectionText={
        <>
          Quando olhei para o céu<br></br>Pedi para Oxalá<br></br>Que me desse as estrelas
          <br></br>Para vir me iluminar a , a , a, a<br></br>Quando avistei um anjo<br></br>Que veio
          me dizer ê, ê, ê, ê<br></br>Sou de Nanâ, euà, euà, euà
        </>
      }
      modelName={
        <>
          VIVI <br></br> VIVIAN ALMEIDA
        </>
      }
      modelStatement="“NANÃ É MINHA MÃE. DESDE SEMPRE. FAZEM TRÊS ANOS QUE SOU FEITA NO CANDOMBLÉ. QUANDO EU
            SOU E VIVO ESSE MOMENTO DE RENASCIMENTO, NANÃ VEM E ME PEGA NO COLO, COM SEU MOLDE DE
            VIDA E TRANSFORMA MINHA VIDA DA ÁGUA PRO BARRO E O BARRO SE RENASCENDO E ENDURECENDO E
            TOMANDO FORMA. É O CARINHO DE NANÃ VINDO COM TODA SUA SABEDORIA DE UMA MAIS VELHA QUE
            VEM COM SEU CUIDADO, VEM COM SEU OLHAR, VEM COM SEU CARINHO, CRIA, ENSINA E VAI LEVANDO
            A VIDA COM TODA BELEZA DA TERRA, DO BARRO E DA PALHA.”"
      grid={
        <>
          <div className="nana-grid-wrapper">
            <div className="nana-grid-item-1">
              <img className="nana-grid-img" alt="Nana first grid image" src={Nana7} />
            </div>
            <div className="nana-grid-item-2">
              <img className="nana-grid-img" alt="Nana second grid image" src={Nana8} />
            </div>
          </div>
        </>
      }
      firstSectionInverse
      minWidth
    />
  );
}

export default Nana;
