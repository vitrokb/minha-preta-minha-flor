import { Typography } from '@mui/material';
import { Carousel, CarouselItem } from 'react-bootstrap';
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
    { name: Oxum2 },
    { name: Oxum3 },
    { name: Oxum4 },
    { name: Oxum5 },
    { name: Oxum6 },
  ];

  return (
    <>
      <div className="oxum-first-section-wrapper">
        <div className="oxum-first-picture-wrapper">
          <div className="oxum-first-picture">
            <img src={Oxum1} />
          </div>
        </div>
        <div className="oxum-text">
          <Typography variant="h3">Oxum</Typography>
          <Typography variant="body2" paragraph sx={{ textAlign: 'left' }}>
            Eu vi Mamãe Oxum nas cachoeiras <br></br> Sentada na beira do rio <br></br> Colhendo
            lírios (lírio e) <br></br> Colhendo lírios (lírios a) <br></br> Colhendo lírios pra
            enfeitar nosso congá
          </Typography>
        </div>
      </div>

      <div className="oxum-carrousel-wrapper">
        <div className="oxum-carrousel">
          <Carousel fade controls={isDesktop} interval={5000}>
            {OxumPictures.map((picture, key) => (
              <CarouselItem>
                <img className="oxum-carrousel-img" key={key} src={picture.name} />
              </CarouselItem>
            ))}
          </Carousel>
        </div>
      </div>

      <div className="oxum-second-section-wrapper">
        <div className="oxum-second-section-text">
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
              THAIS PIO <br></br> THAIS
            </Typography>
          </div>
          <Typography variant="body2" paragraph sx={{ textAlign: 'center' }}>
            “RECENTEMENTE EU PARTICIPEI DE UM PROCESSO DE UM BATIZADO DE COROAÇÃO NO TERREIRO, FOI
            UM PROCESSO MUITO INTERESSANTE PORQUE NO DIA, FOI COMO SE FOSSE UMA GRANDE FESTA, E
            DEPOIS QUE EU PASSEI POR ESSE PROCESSO, EU SENTI MUITO A FORÇA DE MÃE OXUM, ME
            RELEMBRANDO DA MINHA FORÇA, ME RELEMBRANDO DA BELEZA, ME LEMBRANDO A TER SABERIA. SE
            APROXIMANDO DE MIM EM UM SENTIDO MUITO SIMBÓLICO DE QUE A MINHA BELEZA ELA NÃO PRECISA
            ESTAR EM TRAÇOS FÍSICOS, MAS ME LEMBRANDO QUE A MINHA BELEZA . PODE ESTAR NA FORÇA QUE
            ELA TEM PRA ME DEIXAR MAIS SEGURA, MAIS CONFIANTE E QUE MINHA BELEZA NA IDEIA DE QUE EU
            POSSO CONSEGUIR ALCANÇAR OS MEUS SONHOS QUE EU ACHAVA QUE ERA MAIS IMPOSSÍVEIS. A FORÇA
            DE OXUM TEM APARECIDO NA MINHA VIDA COMO AXÉ MESMO. COMO FORÇA VITAL.“
          </Typography>
        </div>

        <div className="oxum-grid-wrapper">
          <div className="oxum-grid-item-1">
            <img className="oxum-grid-img" src={Oxum7} />
          </div>
          <div className="oxum-grid-item-2">
            <img className="oxum-grid-img" src={Oxum8} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Oxum;
