import { render, screen } from '@testing-library/react';
import Logo from './Logo';

describe('Logo component', () => {
  it('should render a logo image', () => {
    render(<Logo />);

    expect(
      screen.getByAltText("Project logo with the text 'Minha preta minha flor' and a flower")
    ).toBeInTheDocument();
  });
});
