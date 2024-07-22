import { Link } from 'react-router-dom';
import { Navbar } from '../../components/Navbar';
import { HeroStyledTypography } from '../../components/HeroStyledTypography';
import { StyledButton } from '../../components/StyledButton';
import { Footer } from '../../components/Footer';
import HeroLogo from '../../assets/Logo.svg';
import './Home.css';

function Home() {
  return (
    <div className="hero-wrapper">
      <Navbar />
      <div className="hero">
        <img src={HeroLogo} alt="Hero image with the project logo" />
        <div className="hero-text">
          <HeroStyledTypography variant="h3">o olhar sob</HeroStyledTypography>
          <HeroStyledTypography variant="h3">nossas rainhas</HeroStyledTypography>
          <HeroStyledTypography variant="h3">Yabás</HeroStyledTypography>
        </div>
      </div>
      <div className="hero-content">
        <Link to="/exposicao">
          <StyledButton>Confira aqui a exposição</StyledButton>
        </Link>

        <Footer />
      </div>
    </div>
  );
}

export default Home;
