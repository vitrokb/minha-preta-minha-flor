import { Button as MuiButton, ButtonProps as MuiButtonProps, styled } from '@mui/material';

interface ButtonProps extends MuiButtonProps {
  active?: boolean | string;
}

const StyledButton = styled(MuiButton)<ButtonProps>(({ theme, active }) => ({
  backgroundColor: active ? '#0E0A0A' : '#F9F1E4',
  color: active ? theme.palette.common.white : '#0E0A0A',
  border: `1px solid #0E0A0A`,
  borderRadius: 0,
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: '#0E0A0A',
    color: theme.palette.common.white,
    boxShadow: 'none',
  },
  textDecoration: 'none',
}));

export default StyledButton;
