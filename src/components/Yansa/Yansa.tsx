import { Typography } from '@mui/material';
import { Carousel, CarouselItem } from 'react-bootstrap';
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
    { name: Yansa2 },
    { name: Yansa3 },
    { name: Yansa4 },
    { name: Yansa5 },
    { name: Yansa6 },
    { name: Yansa7 },
    { name: Yansa8 },
  ];

  return (
    <>
      <div className="yansa-first-section-wrapper">
        <div className="yansa-text">
          <Typography variant="h3" sx={{ marginBottom: '1rem' }}>
            Yansã
          </Typography>
          <Typography variant="body2" paragraph sx={{ minWidth: 'max-content' }}>
            A eparrei ela é Oyá, ela é Oyá<br></br>A eparrei é Iansã, é Iansã<br></br>A eparrei
            <br></br>Quando Iansã vai pra batalha<br></br>Todos os cavaleiros param<br></br>Só pra
            ver ela passar<br></br>A eparrei ela é Oyá, ela é Oyá<br></br>A eparrei é Iansã, é Iansã
            <br></br>A eparrei Quando Iansã<br></br>vai pra batalha<br></br>Todos os cavaleiros
            param
          </Typography>
        </div>
        <div className="yansa-first-picture-wrapper">
          <div className="yansa-first-picture">
            <img src={Yansa1} />
          </div>
        </div>
      </div>

      <div className="yansa-carrousel-wrapper">
        <div className="yansa-carrousel">
          <Carousel fade controls={isDesktop} interval={5000}>
            {YansaPictures.map((picture, key) => (
              <CarouselItem key={key}>
                <img className="yansa-carrousel-img" src={picture.name} />
              </CarouselItem>
            ))}
          </Carousel>
        </div>
      </div>

      <div className="yansa-second-section-wrapper">
        <div className="yansa-second-section-text">
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
              JADE ZIMBA<br></br> JADE MARIA
            </Typography>
          </div>
          <Typography variant="body2" paragraph sx={{ textAlign: 'center' }}>
            “YANSÃ NA MINHA VIDA ELA TEM UMA IMPORTÂNCIA DE ME MOVIMENTAR O TEMPO TODO. INCLUSIVE ME
            FAZ ENTENDER OS MOMENTOS DE PAUSA COMO MOVIMENTO TAMBÉM. eLA É QUEM SOPRA OS VENTOS DA
            TRANSFORMAÇÃO, ELA É QUEM AS VEZES AGE DE UMA FORMA MAIS SEVERA PARA QUE NA GENTE
            PERCEBA AS COISAS QUE A GENTE PRECISA MUDAR. ELA É UMA MÃE QUE CUIDA, QUE NÃO É O
            ESTERIÓTIPO DA MATERNIDADE, MAS É UMA MATERNIDADE, UM CUIDADO QUE INFLUENCIA A GENTE A
            TER CORAGEM, FORÇA QUANDO NECESSÁRIO E LEVEZA QUANDO É PRECISO. pORQUE ELA TAMBÉM É
            LEVEZA, ELA TAMBÉM É TRANQUILIDADE, ELA TAMBÉM É BRISA .”
          </Typography>
        </div>

        <div className="yansa-grid-wrapper">
          <div className="yansa-grid-item-1">
            <img className="yansa-grid-img" src={Yansa8} />
          </div>
          <div className="yansa-grid-item-2">
            <img className="yansa-grid-img" src={Yansa5} />
          </div>
          <div className="yansa-grid-item-3">
            <img className="yansa-grid-img" src={Yansa9} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Yansa;
