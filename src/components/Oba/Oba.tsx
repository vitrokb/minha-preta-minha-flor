import { Typography } from '@mui/material';
import Oba1 from '../../assets/oba-pictures/1.png';
import Oba2 from '../../assets/oba-pictures/2.png';
import Oba3 from '../../assets/oba-pictures/3.png';
import Oba4 from '../../assets/oba-pictures/4.png';
import Oba5 from '../../assets/oba-pictures/5.png';
import Oba6 from '../../assets/oba-pictures/6.png';
import Oba7 from '../../assets/oba-pictures/7.png';
import Oba8 from '../../assets/oba-pictures/8.png';
import Carousel from 'react-material-ui-carousel';
import './Oba.css';

function Oba() {
  const obaPictures = [
    { name: Oba2 },
    { name: Oba3 },
    { name: Oba4 },
    { name: Oba5 },
    { name: Oba6 },
  ];

  return (
    <>
      <div className="oba-first-section-wrapper">
        <div className="oba-text">
          <Typography variant="h3" sx={{ marginBottom: '1rem' }}>
            Oba
          </Typography>
          <Typography
            variant="body2"
            paragraph
            sx={{ textAlign: 'center', minWidth: 'max-content' }}
          >
            É mãe Obá vibrando sua espada<br></br>Semeando forças, fecundando a Terra<br></br>É mãe
            Obá vibrando sua espada<br></br>Semeando forças, fecundando a Terra
          </Typography>
        </div>
        <div className="oba-first-picture-wrapper">
          <div className="oba-first-picture">
            <img src={Oba1} />
          </div>
        </div>
      </div>

      <div className="oba-carrousel-wrapper">
        <div className="oba-carrousel">
          <Carousel duration={1000} interval={7000}>
            {obaPictures.map((picture, key) => (
              <img className="oba-carrousel-img" key={key} src={picture.name} />
            ))}
          </Carousel>
        </div>
      </div>

      <div className="oba-second-section-wrapper">
        <div className="oba-second-section-text">
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
              LETÍCIA <br></br> LETÍCIA HERCULANO
            </Typography>
          </div>
          <Typography variant="body2" paragraph sx={{ textAlign: 'center' }}>
            “ESTAR NESSE PROJETO ELEVOU MINHA AUTOESTIMA. ME FEZ ME SENTIR VIVA. E OBÁ ME MOSTRA DE
            TODAS AS FORMAS, ATRAVÉS DA FOTOGRAFIA, ATRAVÉS DA ARTE OBÁ TAMBÉM ME ENSINA A
            IMPORTÂNCIA DELA NA MINHA VIDA, QUE É TAMANHA. DESDE OS MEUS OITO ANOS DE IDADE EU DIGO
            QUE OBÁ É O AR QUE EU RESPIRO, É MINHA VIDA, É MEU DIRECIONAMENTO. É A MINHA MÃE. FOI UM
            BALSAMO PRA MIM.”
          </Typography>
        </div>

        <div className="oba-grid-wrapper">
          <div className="oba-grid-item-1">
            <img className="oba-grid-img" src={Oba7} />
          </div>
          <div className="oba-grid-item-2">
            <img className="oba-grid-img" src={Oba8} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Oba;
