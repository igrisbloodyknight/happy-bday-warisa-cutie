
import React, { useState, useEffect } from 'react';
import AnimatedLetter from '@/components/AnimatedLetter';
import PhotoCard from '@/components/PhotoCard';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Heart, Cake, Gift, PartyPopper, Music, Star } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const SAMPLE_PHOTOS = [
  {
    imageUrl: "https://images.unsplash.com/photo-1531956531700-dc0ee0f1f9a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    note: "Remember our adventure in the mountains? Best day ever!"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    note: "Happy birthday to the most amazing person! May your day be filled with joy!"
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1562595410-2340828c83e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    note: "Wishing you all the happiness in the world on your special day!"
  }
];

const Index = () => {
  const [photos] = useState(SAMPLE_PHOTOS);
  const [step, setStep] = useState(0);
  const birthdayText = "Happy Birthday!";
  const personalMessage = "I could send a simple message, but I wanted to make something special... because you are special.";
  const letter = "Dear wonderful you,\n\nAs you celebrate another year of being the amazing person that you are, I wanted to take a moment to tell you how much you mean to me. Your kindness, your laughter, and your beautiful spirit brighten every day. Thank you for being you!\n\nWith all my love,\nYour Friend";
  const finalMessage = "Sending you the biggest birthday hugs and wishes for a magical year ahead!";

  useEffect(() => {
    // Automatic progression through steps with delays
    const timers = [
      setTimeout(() => setStep(1), 3000), // Move to personal message after 3s
      setTimeout(() => setStep(2), 7000), // Move to letter after 7s
      setTimeout(() => setStep(3), 13000), // Move to photos after 13s
    ];
    
    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  const moveToNextStep = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const moveToPrevStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const renderIcon = (index: number) => {
    const icons = [
      <Heart key="heart" className="text-pink animate-bounce-slight" />,
      <Cake key="cake" className="text-pink animate-float" />,
      <Gift key="gift" className="text-pink animate-wiggle" />,
      <PartyPopper key="party-popper" className="text-pink animate-bounce-slight" />,
      <Music key="music" className="text-pink animate-float" />,
      <Star key="star" className="text-pink animate-spin-slow" />
    ];
    return icons[index % icons.length];
  };

  const renderStep = () => {
    switch(step) {
      case 0:
        return (
          <div className="animate-fade-in">
            <div className="mb-4 flex justify-center space-x-3">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-8 h-8 flex items-center justify-center">
                  {renderIcon(i)}
                </div>
              ))}
            </div>
            
            <h1 className="text-5xl sm:text-7xl font-bold text-pink-dark font-dancing mb-4">
              {birthdayText.split('').map((letter, index) => (
                <AnimatedLetter 
                  key={index} 
                  letter={letter} 
                  delay={index * 100}
                />
              ))}
            </h1>
          </div>
        );
      
      case 1:
        return (
          <div className="animate-scale-in max-w-xl mx-auto">
            <p className="text-2xl text-foreground/90 font-dancing">
              {personalMessage.split('').map((letter, index) => (
                <AnimatedLetter 
                  key={index} 
                  letter={letter} 
                  className="text-pink-dark"
                  delay={index * 50}
                />
              ))}
            </p>
          </div>
        );
      
      case 2:
        return (
          <div className="animate-fade-in max-w-2xl mx-auto bg-white/80 p-8 rounded-lg shadow-lg border-2 border-pink-light">
            <div className="bg-pink-light/30 p-6 rounded-lg">
              <p className="text-lg text-foreground/90 whitespace-pre-line font-dancing">
                {letter}
              </p>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="animate-scale-in">
            <h2 className="text-3xl font-dancing text-pink-dark text-center mb-8">
              Our Special Memories
            </h2>
            
            <Carousel className="max-w-xl mx-auto">
              <CarouselContent>
                {photos.map((photo, index) => (
                  <CarouselItem key={index}>
                    <PhotoCard
                      imageUrl={photo.imageUrl}
                      note={photo.note}
                      className="mx-auto"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-4">
                <CarouselPrevious className="relative static mx-2" />
                <CarouselNext className="relative static mx-2" />
              </div>
            </Carousel>
          </div>
        );
      
      case 4:
        return (
          <div className="animate-fade-in text-center max-w-xl mx-auto">
            <div className="bg-gradient-to-r from-pink-light via-pink to-pink-dark p-1 rounded-lg">
              <div className="bg-white p-8 rounded-lg">
                <h2 className="text-3xl font-dancing text-pink-dark mb-4">From My Heart To Yours</h2>
                <p className="text-xl text-foreground/90 font-dancing">
                  {finalMessage}
                </p>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto text-center mb-8 min-h-[60vh] flex flex-col items-center justify-center">
        {renderStep()}
      </div>
      
      <div className="flex space-x-4 mt-8">
        {step > 0 && (
          <Button 
            onClick={moveToPrevStep}
            className="bg-pink hover:bg-pink-dark text-white font-medium"
            variant="outline"
          >
            Previous
          </Button>
        )}
        
        {step < 4 && (
          <Button 
            onClick={moveToNextStep}
            className="bg-pink hover:bg-pink-dark text-white font-medium"
          >
            Next
          </Button>
        )}
      </div>
      
      <footer className="text-center text-sm text-foreground/60 mt-16">
        <p>Made with ❤️ for your special day</p>
      </footer>
    </div>
  );
};

export default Index;
