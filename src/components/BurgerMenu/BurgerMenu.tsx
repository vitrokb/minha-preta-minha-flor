import { useState } from 'react';
import { Link } from 'react-router-dom';
import './BurgerMenu.css';
import { StyledButton } from '../StyledButton';

function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="burger" onClick={toggleMenu}>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li>
          <Link to="/">
            <StyledButton variant="outlined" active>
              INICIO
            </StyledButton>
          </Link>
        </li>
        <li>
          <Link to="/exposicao">
            <StyledButton variant="outlined">EXPOSIÇÃO</StyledButton>
          </Link>
        </li>
        <li>
          <Link to="/projeto">
            <StyledButton variant="outlined">PROJETO</StyledButton>
          </Link>
        </li>
        <li>
          <Link to="/bastidores">
            <StyledButton variant="outlined">BASTIDORES</StyledButton>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default BurgerMenu;
