import { useState } from 'react';
import { Link } from 'react-router-dom';
import './BurgerMenu.css';
import { Button } from '@mui/material';

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
            <Button variant="outlined">INICIO</Button>
          </Link>
        </li>
        <li>
          <Link to="/exposicao">
            <Button variant="outlined">EXPOSIÇÃO</Button>
          </Link>
        </li>
        <li>
          <Link to="/projeto">
            <Button variant="outlined">PROJETO</Button>
          </Link>
        </li>
        <li>
          <Link to="/bastidores">
            <Button variant="outlined">BASTIDORES</Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default BurgerMenu;
