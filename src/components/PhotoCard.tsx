
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Heart } from 'lucide-react';

interface PhotoCardProps {
  imageUrl: string;
  note: string;
  className?: string;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ imageUrl, note, className }) => {
  return (
    <Card className={cn("photo-card overflow-hidden border-pink-light shadow-md", className)}>
      <CardContent className="p-3">
        <div className="relative w-full h-64 overflow-hidden rounded-md mb-2 group">
          <img 
            src={imageUrl} 
            alt="Birthday memory" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-2 right-2 bg-pink/80 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Heart size={16} className="animate-bounce-slight" />
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-gradient-to-r from-pink-light/50 to-pink/30 p-4 text-sm italic text-center min-h-[80px] rounded-b-lg">
        <p className="font-dancing text-base">{note}</p>
      </CardFooter>
    </Card>
  );
};

export default PhotoCard;
