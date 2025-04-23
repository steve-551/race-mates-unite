
import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import PageHeader from '@/components/ui/PageHeader';
import RacingCard from '@/components/ui/RacingCard';
import GradientButton from '@/components/ui/GradientButton';
import { Button } from '@/components/ui/button';
import { Heart, MessageSquare, Users, Calendar, Star } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Sample data
const recentMatches = [
  {
    id: 1,
    name: 'DriftKing88',
    avatar: 'https://i.pravatar.cc/150?img=2',
    matched: 'Just now',
    mutual: true,
  },
  {
    id: 2,
    name: 'SpeedRacer42',
    avatar: 'https://i.pravatar.cc/150?img=1',
    matched: '3 hours ago',
    mutual: false,
  },
  {
    id: 3,
    name: 'RallyFan123',
    avatar: 'https://i.pravatar.cc/150?img=3',
    matched: '2 days ago',
    mutual: true,
  }
];

const favoriteMatches = [
  {
    id: 3,
    name: 'RallyFan123',
    avatar: 'https://i.pravatar.cc/150?img=3',
    discipline: 'Rally',
    platform: 'WRC',
    favorited: '1 week ago',
  }
];

const MatchCard: React.FC<{
  match: typeof recentMatches[0];
  showActions?: boolean;
}> = ({ match, showActions = true }) => {
  return (
    <RacingCard className="flex items-start p-4">
      <div className="h-12 w-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
        <img 
          src={match.avatar} 
          alt={match.name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h3 className="font-bold">{match.name}</h3>
          {match.mutual && (
            <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full">
              Mutual Match
            </span>
          )}
        </div>
        
        <p className="text-sm text-muted-foreground">
          Matched {match.matched}
        </p>
        
        {showActions && (
          <div className="flex mt-4 gap-2">
            <Button size="sm" variant="outline" className="text-racing-purple border-racing-purple hover:bg-racing-purple hover:text-white">
              <MessageSquare className="h-4 w-4 mr-1" />
              Message
            </Button>
            <Button size="sm" variant="outline" className="text-racing-red border-racing-red hover:bg-racing-red hover:text-white">
              <Star className="h-4 w-4 mr-1" />
              Favorite
            </Button>
          </div>
        )}
      </div>
    </RacingCard>
  );
};

const FavoriteCard: React.FC<{
  match: typeof favoriteMatches[0];
}> = ({ match }) => {
  return (
    <RacingCard className="flex items-start p-4">
      <div className="h-12 w-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
        <img 
          src={match.avatar} 
          alt={match.name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex-1">
        <h3 className="font-bold">{match.name}</h3>
        <div className="flex gap-2 mt-1">
          <span className="text-xs bg-muted px-2 py-1 rounded">
            {match.discipline}
          </span>
          <span className="text-xs bg-muted px-2 py-1 rounded">
            {match.platform}
          </span>
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          Favorited {match.favorited}
        </p>
        
        <div className="flex mt-4 gap-2">
          <Button size="sm" variant="outline" className="text-racing-purple border-racing-purple hover:bg-racing-purple hover:text-white">
            <MessageSquare className="h-4 w-4 mr-1" />
            Message
          </Button>
          <Button size="sm" variant="outline" className="text-racing-red border-racing-red hover:bg-racing-red hover:text-white">
            <Calendar className="h-4 w-4 mr-1" />
            Invite
          </Button>
        </div>
      </div>
    </RacingCard>
  );
};

const MyMatches: React.FC = () => {
  return (
    <MainLayout>
      <PageHeader 
        title="My Matches" 
        description="View and manage your racing mate matches."
        actions={
          <Link to="/mate-match">
            <GradientButton>
              <Heart className="h-4 w-4 mr-2" />
              Find More Mates
            </GradientButton>
          </Link>
        }
      />
      
      <Tabs defaultValue="recent" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="recent">Recent Matches</TabsTrigger>
          <TabsTrigger value="favorites">Favorites</TabsTrigger>
          <TabsTrigger value="all">All Matches</TabsTrigger>
        </TabsList>
        
        <TabsContent value="recent" className="space-y-4">
          {recentMatches.length > 0 ? (
            recentMatches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No recent matches found</p>
              <Link to="/mate-match" className="mt-4 inline-block">
                <Button>Find Mates</Button>
              </Link>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="favorites" className="space-y-4">
          {favoriteMatches.length > 0 ? (
            favoriteMatches.map((match) => (
              <FavoriteCard key={match.id} match={match} />
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No favorite matches yet</p>
              <p className="text-sm text-muted-foreground mt-2">
                Add favorites from your matches to see them here
              </p>
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="all" className="space-y-4">
          {recentMatches.length > 0 ? (
            recentMatches.map((match) => (
              <MatchCard key={match.id} match={match} showActions={false} />
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No matches found</p>
              <Link to="/mate-match" className="mt-4 inline-block">
                <Button>Find Mates</Button>
              </Link>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </MainLayout>
  );
};

export default MyMatches;
