import { Link } from 'react-router-dom';
import { Navbar } from '../../components/Navbar';
import { StyledTypography } from '../../components/StyledTypography';
import { StyledButton } from '../../components/StyledButton';
import HeroLogo from '../../assets/Logo.svg';
import Support from '../../assets/Support.png';
import './Home.css';

function Home() {
  return (
    <div className="hero-wrapper">
      <Navbar />
      <div className="hero">
        <img src={HeroLogo} alt="Hero image with the project logo" />
        <div className="hero-text">
          <StyledTypography variant="h3">o olhar sob</StyledTypography>
          <StyledTypography variant="h3">nossas rainhas</StyledTypography>
          <StyledTypography variant="h3">Yabás</StyledTypography>
        </div>
      </div>
      <div className="hero-content">
        <Link to="/exposicao">
          <StyledButton>Confira aqui a exposição</StyledButton>
        </Link>

        <img src={Support} alt="Partners and support for carrying out the project" />
      </div>
    </div>
  );
}

export default Home;
