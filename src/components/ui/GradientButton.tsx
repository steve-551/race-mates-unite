
import React from 'react';
import { cn } from '@/lib/utils';

interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

const GradientButton: React.FC<GradientButtonProps> = ({ 
  children, 
  className,
  fullWidth = false,
  ...props
}) => {
  return (
    <button 
      className={cn(
        "racing-gradient-button", 
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default GradientButton;
