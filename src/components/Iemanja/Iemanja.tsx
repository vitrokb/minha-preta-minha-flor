import { Typography } from '@mui/material';
import { Carousel, CarouselItem } from 'react-bootstrap';
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
    <>
      <div className="iemanja-first-section-wrapper">
        <div className="iemanja-text">
          <Typography variant="h3" sx={{ marginBottom: '1rem' }}>
            Yemanjá
          </Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: 'center' }}>
            Como é lindo o canto de Yemanjá<br></br>Faz até o pescador chorar<br></br>Quem não
            escuta a mãe d'água cantar<br></br>Vai com ela pro fundo do mar.
          </Typography>
        </div>
        <div className="iemanja-first-picture-wrapper">
          <div className="iemanja-first-picture">
            <img src={Iemanja1} />
          </div>
        </div>
      </div>

      <div className="iemanja-carrousel-wrapper">
        <div className="iemanja-carrousel">
          <Carousel fade controls={isDesktop} interval={5000}>
            {IemanjaPictures.map((picture, key) => (
              <CarouselItem key={key}>
                <img className="iemanja-carrousel-img" src={picture.name} />
              </CarouselItem>
            ))}
          </Carousel>
        </div>
      </div>

      <div className="iemanja-second-section-wrapper">
        <div className="iemanja-second-section-text">
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
              THAIS BERNARDES <br></br> THAY BRAIDS
            </Typography>
          </div>
          <Typography variant="body2" paragraph sx={{ textAlign: 'center' }}>
            "YEMANJÁ PARA MIM É TUDO. ABAIXO DE DEUS FOI ELA QUEM ME TIROU DA DEPRESSÃO. FOI ELA QUE
            ME LIVROU DE MUITAS COISAS. DEPOIS DE DESCOBRIR QUE ELA ERA MINHA MÃE. QUANDO DESCOBRI
            QUE YEMANJÁ ERA MINHA MÃE. FOI A COISA MAIS LINDA DA MINHA VIDA. ELA MUDOU TOTALMENTE A
            MINHA VIDA.“
          </Typography>
        </div>

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
      </div>
    </>
  );
}

export default Iemanja;
