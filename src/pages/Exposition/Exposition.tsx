import { Navbar } from '../../components/Navbar';
import { Iemanja } from '../../components/Iemanja';
import { Oxum } from '../../components/Oxum';
import './Exposition.css';
import { Logo } from '../../components/Logo';

function Exposition() {
  return (
    <div className="exposition-content">
      <Logo />
      <Navbar />

      <Iemanja />
      <Oxum />
    </div>
  );
}

export default Exposition;
