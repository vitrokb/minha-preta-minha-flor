import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { StyledButton } from '../StyledButton';
import { useMediaQuery } from '@mui/material';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const matchesMediaQuery = useMediaQuery('(max-width: 735px)');

  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`navbar ${isOpen && matchesMediaQuery ? 'changeDirection' : ''} ${
        matchesMediaQuery ? 'responsive' : ''
      }`}
    >
      <div className={`burger ${!matchesMediaQuery ? 'notShowsBurger' : ''}`} onClick={toggleMenu}>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
      </div>
      <ul
        className={`nav-links ${isOpen && matchesMediaQuery ? 'open' : ''} ${
          matchesMediaQuery ? '' : 'desktopLinks'
        }`}
      >
        <li>
          <Link to="/">
            <StyledButton variant="outlined" active={location?.pathname == '/' ? 1 : 0}>
              INICIO
            </StyledButton>
          </Link>
        </li>
        <li>
          <Link to="/exposicao">
            <StyledButton variant="outlined" active={location?.pathname == '/exposicao' ? 1 : 0}>
              EXPOSIÇÃO
            </StyledButton>
          </Link>
        </li>
        <li>
          <Link to="/projeto">
            <StyledButton variant="outlined" active={location?.pathname == '/projeto' ? 1 : 0}>
              PROJETO
            </StyledButton>
          </Link>
        </li>
        <li>
          <Link to="/bastidores">
            <StyledButton variant="outlined" active={location?.pathname == '/bastidores' ? 1 : 0}>
              BASTIDORES
            </StyledButton>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
