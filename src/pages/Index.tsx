
import React, { useState, useEffect } from 'react';
import AnimatedLetter from '@/components/AnimatedLetter';
import PhotoCard from '@/components/PhotoCard';
import AddPhotoForm from '@/components/AddPhotoForm';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Heart, Cake, Gift, PartyPopper, Music } from 'lucide-react';

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
  const [photos, setPhotos] = useState(SAMPLE_PHOTOS);
  const [showForm, setShowForm] = useState(false);
  const birthdayText = "Happy Birthday!";

  const handleAddPhoto = (photo: { imageUrl: string; note: string }) => {
    setPhotos([...photos, photo]);
    setShowForm(false);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const renderIcon = (index: number) => {
    const icons = [
      <Heart key="heart" className="text-pink animate-bounce-slight" />,
      <Cake key="cake" className="text-pink animate-float" />,
      <Gift key="gift" className="text-pink animate-wiggle" />,
      <PartyPopper key="party-popper" className="text-pink animate-bounce-slight" />,
      <Music key="music" className="text-pink animate-float" />
    ];
    return icons[index % icons.length];
  };

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6">
      <header className="max-w-4xl mx-auto text-center mb-12">
        <div className="mb-4 flex justify-center space-x-3">
          {[0, 1, 2, 3, 4].map((i) => (
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
        
        <p className="text-lg text-foreground/80 max-w-lg mx-auto">
          A special place to celebrate your birthday with memories and wishes from everyone who loves you!
        </p>
      </header>

      <Separator className="max-w-2xl mx-auto my-8 bg-pink/20" />
      
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-dancing text-pink-dark text-center mb-8">
          Birthday Memories
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <PhotoCard
              key={index}
              imageUrl={photo.imageUrl}
              note={photo.note}
            />
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          <Button 
            onClick={toggleForm}
            className="bg-pink hover:bg-pink-dark text-white font-medium"
          >
            {showForm ? "Hide Form" : "Add a Memory"}
          </Button>
        </div>
        
        {showForm && (
          <div className="mt-8">
            <AddPhotoForm onAddPhoto={handleAddPhoto} />
          </div>
        )}
      </section>
      
      <footer className="text-center text-sm text-foreground/60 mt-16">
        <p>Made with ❤️ for your special day</p>
      </footer>
    </div>
  );
};

export default Index;
