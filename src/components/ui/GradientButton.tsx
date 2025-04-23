
import React from 'react';
import { cn } from '@/lib/utils';

interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

const GradientButton: React.FC<GradientButtonProps> = ({ 
  children, 
  className,
  fullWidth = false,
  size = 'default',
  ...props
}) => {
  return (
    <button 
      className={cn(
        "racing-gradient-button",
        size === 'sm' && "text-sm h-9 px-3 py-2",
        size === 'lg' && "text-lg h-11 px-8 py-3",
        size === 'icon' && "h-10 w-10 p-0",
        size === 'default' && "h-10 px-4 py-2",
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
