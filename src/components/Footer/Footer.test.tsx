import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './Footer';
import Support from '../../assets/Support.png';

describe('Footer component', () => {
  it('should render the footer wrapper', () => {
    const { container } = render(<Footer />);
    expect(container.getElementsByClassName('footer-wrapper').length).toBe(1);
  });

  it('should render the footer content', () => {
    const { container } = render(<Footer />);
    expect(container.getElementsByClassName('footer-content').length).toBe(1);
  });

  it('should render the image with correct src and alt', () => {
    const { getByAltText } = render(<Footer />);
    const img = getByAltText('Partners and support for carrying out the project');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', Support);
  });
});
