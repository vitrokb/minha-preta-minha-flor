import { Navbar } from '../../components/Navbar';
import { Iemanja } from '../../components/Iemanja';
import Logo from '../../assets/Logo.svg';
import './Exposition.css';

function Exposition() {
  return (
    <div className="exposition-content">
      <Navbar />
      <img
        className="exposition-logo"
        src={Logo}
        alt="Projecto logo with the text 'Minha preta minha flor' and a flower"
      />

      <Iemanja />
    </div>
  );
}

export default Exposition;
