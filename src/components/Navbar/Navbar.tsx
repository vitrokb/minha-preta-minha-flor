import { useMediaQuery } from '@mui/material';
import { BurgerMenu } from '../BurgerMenu';

function Navbar() {
  const matches = useMediaQuery('(max-width:670px)');

  console.log(matches);
  return <BurgerMenu />;
}

export default Navbar;
