
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedLetterProps {
  letter: string;
  className?: string;
  delay?: number;
}

const AnimatedLetter: React.FC<AnimatedLetterProps> = ({ 
  letter, 
  className,
  delay = 0 
}) => {
  const style = {
    animationDelay: `${delay}ms`,
  };

  return (
    <span 
      className={cn("letter inline-block hover:text-pink-dark", className)}
      style={style}
    >
      {letter}
    </span>
  );
};

export default AnimatedLetter;
