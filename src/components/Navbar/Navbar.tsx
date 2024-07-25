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

  function checkPath(path: string) {
    return location?.pathname == path ? 'active' : '';
  }

  return (
    <nav
      className={`navbar ${isOpen ? 'changeDirection opened' : ''} ${
        matchesMediaQuery ? 'responsive' : ''
      }`}
    >
      {matchesMediaQuery ? (
        <button
          className={isOpen ? 'btn-close button-close' : 'navbar-toggler'}
          type="button"
          aria-label="Toggle navigation"
          onClick={() => toggleMenu()}
        >
          {isOpen ? null : <span className="navbar-toggler-icon"></span>}
        </button>
      ) : null}
      <ul
        className={`nav-links ${isOpen ? 'open' : ''} ${matchesMediaQuery ? '' : 'desktopLinks'}`}
      >
        <li>
          <Link to="/">
            <StyledButton active={checkPath('/')}>INICIO</StyledButton>
          </Link>
        </li>
        <li>
          <Link to="/exposicao">
            <StyledButton active={checkPath('/exposicao')}>EXPOSIÇÃO</StyledButton>
          </Link>
        </li>
        <li>
          <Link to="/projeto">
            <StyledButton active={checkPath('/projeto')}>PROJETO</StyledButton>
          </Link>
        </li>
        <li>
          <Link to="/bastidores">
            <StyledButton active={checkPath('/bastidores')}>BASTIDORES</StyledButton>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
