
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import PageHeader from '@/components/ui/PageHeader';
import RacingCard from '@/components/ui/RacingCard';
import GradientButton from '@/components/ui/GradientButton';
import { Button } from '@/components/ui/button';
import { Heart, X, Star } from 'lucide-react';

// Temporary dummy data for the swiping demo
const dummyProfiles = [
  {
    id: 1,
    name: 'SpeedRacer42',
    avatar: 'https://i.pravatar.cc/150?img=1',
    rating: 1850,
    safetyRating: 'A',
    platforms: ['iRacing', 'Assetto Corsa'],
    disciplines: ['Road', 'GT3'],
    style: 'Aggressive, Late Braker',
    availability: 'Weekends, Evenings (EST)',
    bio: 'Racing since 2018. Looking for endurance teammates who can maintain consistent lap times.'
  },
  {
    id: 2,
    name: 'DriftKing88',
    avatar: 'https://i.pravatar.cc/150?img=2',
    rating: 2100,
    safetyRating: 'B',
    platforms: ['Assetto Corsa', 'Gran Turismo 7'],
    disciplines: ['Drift', 'Time Attack'],
    style: 'Smooth, Technical',
    availability: 'Weekday Evenings (GMT)',
    bio: 'Drift specialist looking for practice partners. Also enjoy casual GT racing on weekends.'
  },
  {
    id: 3,
    name: 'RallyFan123',
    avatar: 'https://i.pravatar.cc/150?img=3',
    rating: 1750,
    safetyRating: 'A',
    platforms: ['DiRT Rally 2.0', 'WRC'],
    disciplines: ['Rally', 'Rallycross'],
    style: 'Consistent, All-rounder',
    availability: 'Flexible (PST)',
    bio: 'Rally enthusiast looking for co-drivers and teams for special events. 5+ years experience.'
  }
];

const MateMatch: React.FC = () => {
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right' | ''>('');

  const currentProfile = dummyProfiles[currentProfileIndex];

  const handleSwipe = (swipeDirection: 'left' | 'right') => {
    setDirection(swipeDirection);
    
    // Simulate card animation before changing profile
    setTimeout(() => {
      // If we're at the last profile, loop back to the first one for demo purposes
      if (currentProfileIndex === dummyProfiles.length - 1) {
        setCurrentProfileIndex(0);
      } else {
        setCurrentProfileIndex(currentProfileIndex + 1);
      }
      setDirection('');
    }, 300);
  };

  const getSwipeAnimation = () => {
    if (direction === 'left') return 'animate-slide-out';
    if (direction === 'right') return 'animate-slide-out';
    return '';
  };

  return (
    <MainLayout>
      <PageHeader 
        title="Mate Match" 
        description="Find your perfect racing partner by swiping through profiles."
      />
      
      <div className="max-w-xl mx-auto">
        {/* Swipe Card */}
        <div className={`relative ${getSwipeAnimation()}`}>
          <RacingCard className="overflow-hidden">
            {/* Profile Image */}
            <div className="h-48 bg-muted rounded-t-lg overflow-hidden">
              <img 
                src={currentProfile.avatar} 
                alt={currentProfile.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Profile Info */}
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold">{currentProfile.name}</h3>
                <div className="flex items-center">
                  <span className="text-sm bg-racing-red px-2 py-1 rounded mr-2">{currentProfile.rating} iR</span>
                  <span className="text-sm bg-racing-purple px-2 py-1 rounded">{currentProfile.safetyRating} SR</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-1">Platforms</p>
                  <div className="flex flex-wrap gap-2">
                    {currentProfile.platforms.map((platform, index) => (
                      <span key={index} className="text-xs bg-muted px-2 py-1 rounded">
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-1">Disciplines</p>
                  <div className="flex flex-wrap gap-2">
                    {currentProfile.disciplines.map((discipline, index) => (
                      <span key={index} className="text-xs bg-muted px-2 py-1 rounded">
                        {discipline}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-1">Racing Style</p>
                  <p>{currentProfile.style}</p>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-1">Availability</p>
                  <p>{currentProfile.availability}</p>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-1">Bio</p>
                  <p>{currentProfile.bio}</p>
                </div>
              </div>
            </div>
          </RacingCard>
        </div>
        
        {/* Swipe Buttons */}
        <div className="flex justify-center mt-6 gap-4">
          <Button 
            size="icon" 
            variant="outline" 
            className="h-14 w-14 rounded-full border-racing-red text-racing-red hover:bg-racing-red hover:text-white"
            onClick={() => handleSwipe('left')}
          >
            <X className="h-6 w-6" />
          </Button>
          
          <Button 
            size="icon" 
            variant="outline" 
            className="h-14 w-14 rounded-full border-racing-purple text-racing-purple hover:bg-racing-purple hover:text-white"
            onClick={() => handleSwipe('right')}
          >
            <Star className="h-6 w-6" />
          </Button>
          
          <Button 
            size="icon" 
            variant="outline" 
            className="h-14 w-14 rounded-full border-accent text-accent hover:bg-accent hover:text-white"
            onClick={() => handleSwipe('right')}
          >
            <Heart className="h-6 w-6" />
          </Button>
        </div>
        
        <div className="text-center mt-8 text-muted-foreground">
          <p>Showing profile {currentProfileIndex + 1} of {dummyProfiles.length}</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default MateMatch;
