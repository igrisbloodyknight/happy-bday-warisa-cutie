
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

  // Add special styles for specific characters
  const getSpecialClass = () => {
    if (letter === '!' || letter === '?' || letter === '.') {
      return 'text-pink-dark scale-125';
    }
    if (letter === ' ') {
      return 'w-2';
    }
    return '';
  };

  return (
    <span 
      className={cn(
        "letter inline-block hover:text-pink-dark transition-all duration-300",
        getSpecialClass(),
        className
      )}
      style={style}
    >
      {letter}
    </span>
  );
};

export default AnimatedLetter;
