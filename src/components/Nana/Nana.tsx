import { Typography } from '@mui/material';
import Nana1 from '../../assets/nana-pictures/1.png';
import Nana2 from '../../assets/nana-pictures/2.png';
import Nana3 from '../../assets/nana-pictures/3.png';
import Nana4 from '../../assets/nana-pictures/4.png';
import Nana5 from '../../assets/nana-pictures/5.png';
import Nana6 from '../../assets/nana-pictures/6.png';
import Nana7 from '../../assets/nana-pictures/7.png';
import Nana8 from '../../assets/nana-pictures/8.png';
import './Nana.css';
import Carousel from 'react-material-ui-carousel';

function Nana() {
  const nanaPictures = [
    { name: Nana2 },
    { name: Nana3 },
    { name: Nana4 },
    { name: Nana5 },
    { name: Nana6 },
  ];
  return (
    <>
      <div className="nana-first-section-wrapper">
        <div className="nana-first-picture-wrapper">
          <div className="nana-first-picture">
            <img src={Nana1} />
          </div>
        </div>
        <div className="nana-text">
          <Typography variant="h3" sx={{ marginBottom: '1rem' }}>
            Nanã
          </Typography>
          <Typography
            variant="body2"
            paragraph
            sx={{ textAlign: 'center', minWidth: 'max-content' }}
          >
            Quando olhei para o céu<br></br>Pedi para Oxalá<br></br>Que me desse as estrelas
            <br></br>Para vir me iluminar a , a , a, a<br></br>Quando avistei um anjo<br></br>Que
            veio me dizer ê, ê, ê, ê<br></br>Sou de Nanâ, euà, euà, euà
          </Typography>
        </div>
      </div>

      <div className="nana-carrousel-wrapper">
        <div className="nana-carrousel">
          <Carousel duration={1000} interval={7000}>
            {nanaPictures.map((picture, key) => (
              <img className="nana-carrousel-img" key={key} src={picture.name} />
            ))}
          </Carousel>
        </div>
      </div>

      <div className="nana-second-section-wrapper">
        <div className="nana-second-section-text">
          <div className="">
            <Typography
              variant="h6"
              sx={{
                marginBottom: '1rem',
                textAlign: 'center',
                fontWeight: 700,
                lineHeight: '1.375rem',
              }}
            >
              VIVI <br></br> VIVIAN ALMEIDA
            </Typography>
          </div>
          <Typography variant="body2" paragraph sx={{ textAlign: 'center' }}>
            “NANÃ É MINHA MÃE. DESDE SEMPRE. FAZEM TRÊS ANOS QUE SOU FEITA NO CANDOMBLÉ. QUANDO EU
            SOU E VIVO ESSE MOMENTO DE RENASCIMENTO, NANÃ VEM E ME PEGA NO COLO, COM SEU MOLDE DE
            VIDA E TRANSFORMA MINHA VIDA DA ÁGUA PRO BARRO E O BARRO SE RENASCENDO E ENDURECENDO E
            TOMANDO FORMA. É O CARINHO DE NANÃ VINDO COM TODA SUA SABEDORIA DE UMA MAIS VELHA QUE
            VEM COM SEU CUIDADO, VEM COM SEU OLHAR, VEM COM SEU CARINHO, CRIA, ENSINA E VAI LEVANDO
            A VIDA COM TODA BELEZA DA TERRA, DO BARRO E DA PALHA.”
          </Typography>
        </div>

        <div className="nana-grid-wrapper">
          <div className="nana-grid-item-1">
            <img className="nana-grid-img" src={Nana7} />
          </div>
          <div className="nana-grid-item-2">
            <img className="nana-grid-img" src={Nana8} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Nana;
