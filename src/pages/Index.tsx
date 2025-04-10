
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

const PHOTOS = [
  {
    imageUrl: "public/lovable-uploads/c272569e-3b4e-46a3-ab66-e9c9aba091ce.png",
    note: "SHE LOOKS JUST LIKE A DREAM THE PRETTIEST GIRL I HAVE EVER SEEN THESE LYRICS ARE MADE FOR YOU SWEETHEART "
  },
  {
    imageUrl: "public/lovable-uploads/550fb0bf-7ea5-453a-813f-d8fb6472cf3b.png",
    note: "THE PIC OF YOU I WILL PUT IN MY WALLET YOU ARE MOST PRECIOUS BEAUTIFUL GIRL YOU DESERVE ALL HAPPINESS DARLING "
  },
  {
    imageUrl: "public/lovable-uploads/ba98d8c3-2791-42a4-b16a-0ac8ffa4ea23.png",
    note: " AWWWWWWWWWWWW!!!!!! THE GANGSTER CUTE PRINCESS ONE OF MY FAVOURITE PHOTO THE SWEET GIRL YOU WILL BE ALWAYS IN MY EYES"
  }
];

const Index = () => {
  const [photos] = useState(PHOTOS);
  const [step, setStep] = useState(0);
  const birthdayText = "Happy Birthday! WARISA CUTIE";
  const personalMessage = "I could send a simple message, but I wanted to make something special... because you are special for me and will always be ";
  const letter = "Dear warisa cutie , its your birthday and i really hope you achieve geat happiness in your life and i want to make it special i am sorry i cannot send gifts bcz of your family but i wanted to make it special and warisa you are one of the perosn who is SWEET and KIND and i like the prettiest girl i have seen i hope you manifest what you dream and yes your dreams will come true bcz you deserve every happiness in the world and HAPPY BIRTHDAY WARISA LOTS OF WISHES FROM ME AND BE HAPPY ALWAYS PRETTY GIRL YOU DESERVE ALL HAPPINESS BEAUTIFUL GIRL ";
  const finalMessage = "Sending you the biggest birthday hugs and wishes from my side! I HOPE YOU LIKED MY LITTLE GIFT SWEETHEART FROM YOUR FAVOURITE HACKER EX ";

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
        <p>Made with LOVE for you SWEETHEART</p>
      </footer>
    </div>
  );
};

export default Index;
