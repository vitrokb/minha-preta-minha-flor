import { Logo } from '../../components/Logo';
import { Navbar } from '../../components/Navbar';
import { Iemanja } from '../../components/Iemanja';
import { Oxum } from '../../components/Oxum';
import { Yansa } from '../../components/Yansa';
import { Nana } from '../../components/Nana';
import './Exposition.css';

function Exposition() {
  return (
    <div className="exposition-content">
      <Logo />
      <Navbar />

      <Iemanja />
      <Oxum />
      <Yansa />
      <Nana />
    </div>
  );
}

export default Exposition;
