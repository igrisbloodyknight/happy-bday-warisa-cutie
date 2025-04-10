
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

interface AddPhotoFormProps {
  onAddPhoto: (photo: { imageUrl: string; note: string }) => void;
}

const AddPhotoForm: React.FC<AddPhotoFormProps> = ({ onAddPhoto }) => {
  const [imageUrl, setImageUrl] = useState('');
  const [note, setNote] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!imageUrl) {
      toast({
        title: "Missing image URL",
        description: "Please provide an image URL",
        variant: "destructive"
      });
      return;
    }

    onAddPhoto({ imageUrl, note });
    toast({
      title: "Photo added!",
      description: "Your memory has been added to the birthday gallery",
    });
    setImageUrl('');
    setNote('');
  };

  return (
    <Card className="border-pink w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-center text-pink-dark font-dancing">Add a Memory</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="imageUrl" className="text-sm font-medium">
              Image URL
            </label>
            <Input
              id="imageUrl"
              placeholder="https://example.com/image.jpg"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="border-pink-light focus:border-pink-dark"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="note" className="text-sm font-medium">
              Your Note
            </label>
            <Textarea
              id="note"
              placeholder="Write your birthday wish or a special memory..."
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="min-h-[100px] border-pink-light focus:border-pink-dark"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            type="submit" 
            className="w-full bg-pink hover:bg-pink-dark text-white"
          >
            Add to Gallery
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default AddPhotoForm;
