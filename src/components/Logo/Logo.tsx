import LogoImage from '../../assets/Logo.svg';
import './Logo.css';

function Logo() {
  return (
    <img
      className="logo"
      src={LogoImage}
      alt="Project logo with the text 'Minha preta minha flor' and a flower"
    />
  );
}

export default Logo;
