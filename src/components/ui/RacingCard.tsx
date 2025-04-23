
import React from 'react';
import { cn } from '@/lib/utils';

interface RacingCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const RacingCard: React.FC<RacingCardProps> = ({ 
  children, 
  className,
  onClick
}) => {
  return (
    <div 
      className={cn("racing-card", 
        onClick && "cursor-pointer hover:bg-muted", 
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default RacingCard;
