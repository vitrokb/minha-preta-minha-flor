import { Logo } from '../../components/Logo';
import { Navbar } from '../../components/Navbar';
import { Iemanja } from '../../components/Iemanja';
import { Oxum } from '../../components/Oxum';
import { Yansa } from '../../components/Yansa';
import { Nana } from '../../components/Nana';
import { Oba } from '../../components/Oba';
import { Footer } from '../../components/Footer';
import { useMediaQuery } from '@mui/material';
import './Exposition.css';

function Exposition() {
  const isDesktop = useMediaQuery('(min-width: 1023px)');

  return (
    <div className="exposition-content">
      <Logo />
      <Navbar />

      <Iemanja isDesktop={isDesktop} />
      <Oxum isDesktop={isDesktop} />
      <Yansa isDesktop={isDesktop} />
      <Nana isDesktop={isDesktop} />
      <Oba isDesktop={isDesktop} />

      <Footer />
    </div>
  );
}

export default Exposition;
