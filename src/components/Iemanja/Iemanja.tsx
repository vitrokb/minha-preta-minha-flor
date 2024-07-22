import { Typography } from '@mui/material';
import Iemanja1 from '../../assets/iemanja-pictures/1.png';
import './Iemanja.css';

function Iemanja() {
  return (
    <div className="iemanja-first-section-wrapper">
      <div className="iemanja-text">
        <Typography variant="h3" sx={{ marginBottom: '1rem' }}>
          Iemanjá
        </Typography>
        <Typography variant="body2" paragraph sx={{ textAlign: 'center' }}>
          Como é lindo o canto de Iemanjá, faz até o pescador chorar, quem não escuta a mãe d'água
          cantar, vai com ela pro fundo do mar.
        </Typography>
      </div>
      <div className="iemanja-first-picture-wrapper">
        <div className="iemanja-first-picture">
          <img src={Iemanja1} />
        </div>
      </div>
    </div>
  );
}

export default Iemanja;
