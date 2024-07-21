import { Typography as MuiTypography, styled, TypographyProps } from '@mui/material';

const StyledTypography = styled(MuiTypography)<TypographyProps>(() => ({
  fontWeight: 500,
  fontSize: '2rem',
  '@media (min-width: 856px)': {
    fontSize: '3rem',
  },
}));

export default StyledTypography;
