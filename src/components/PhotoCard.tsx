
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface PhotoCardProps {
  imageUrl: string;
  note: string;
  className?: string;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ imageUrl, note, className }) => {
  return (
    <Card className={cn("photo-card overflow-hidden border-pink-light shadow-md", className)}>
      <CardContent className="p-3">
        <div className="relative w-full h-64 overflow-hidden rounded-md mb-2">
          <img 
            src={imageUrl} 
            alt="Birthday memory" 
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
          />
        </div>
      </CardContent>
      <CardFooter className="bg-pink-light/30 p-3 text-sm italic text-center min-h-[80px]">
        {note}
      </CardFooter>
    </Card>
  );
};

export default PhotoCard;
