import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './BurgerMenu.css';
import { StyledButton } from '../StyledButton';

function BurgerMenu() {
  const baseRoutes = {
    inicio: 'false',
    exposicao: 'false',
    projeto: 'false',
    bastidores: 'false',
  };

  const [isOpen, setIsOpen] = useState(true);
  const [locations, setLocations] = useState(baseRoutes);

  const location = useLocation();

  console.log(location.pathname);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setLocations({...baseRoutes, [location.pathname]: location.pathname })
  }, [])

  return (
    <nav className={`navbar ${isOpen ? 'changeDirection' : ''}`}>
      <div className="burger" onClick={toggleMenu}>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li>
          <Link to="/">
            <StyledButton variant="outlined" active={locations.['/']}>
              INICIO
            </StyledButton>
          </Link>
        </li>
        <li>
          <Link to="/exposicao">
            <StyledButton variant="outlined" active={locations.exposicao}>
              EXPOSIÇÃO
            </StyledButton>
          </Link>
        </li>
        <li>
          <Link to="/projeto">
            <StyledButton variant="outlined" active={locations.projeto}>
              PROJETO
            </StyledButton>
          </Link>
        </li>
        <li>
          <Link to="/bastidores">
            <StyledButton variant="outlined" active={locations.bastidores}>
              BASTIDORES
            </StyledButton>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default BurgerMenu;
