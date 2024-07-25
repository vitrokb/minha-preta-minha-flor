import React from 'react';
import './StyledButton.css';
interface StyledButtonProps {
  active?: string;
  children: React.ReactNode;
}

function StyledButton({ active = '', children }: StyledButtonProps) {
  return (
    <button type="button" className={`btn custom-btn ${active}`}>
      {children}
    </button>
  );
}

export default StyledButton;
