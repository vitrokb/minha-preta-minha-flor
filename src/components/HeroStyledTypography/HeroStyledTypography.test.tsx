import { render } from '@testing-library/react';
import HeroStyledTypography from './HeroStyledTypography';

describe('HeroStyledTypography component', () => {
  it('should render correctly', () => {
    const { getByText } = render(<HeroStyledTypography>Test Text</HeroStyledTypography>);
    const typographyElement = getByText('Test Text');
    expect(typographyElement).toBeInTheDocument();
  });
});
