
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import PageHeader from '@/components/ui/PageHeader';
import GradientButton from '@/components/ui/GradientButton';
import RacingCard from '@/components/ui/RacingCard';
import { Plus, Users, User, Calendar } from 'lucide-react';

const Teams: React.FC = () => {
  return (
    <MainLayout>
      <PageHeader 
        title="Teams" 
        description="Create, join and manage your racing teams"
        actions={
          <GradientButton>
            <Plus className="h-4 w-4 mr-2" />
            Create Team
          </GradientButton>
        }
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <RacingCard>
          <h3 className="text-xl font-bold mb-4">Speed Demons Racing</h3>
          <div className="flex items-center gap-2 mb-4">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">5 members</span>
          </div>
          <p className="text-muted-foreground mb-4">
            Competitive endurance racing team focusing on GT3 and LMP classes. Active in iRacing special events.
          </p>
          <div className="mt-6 flex justify-between items-center">
            <div className="flex -space-x-2">
              <div className="h-8 w-8 rounded-full bg-racing-red flex items-center justify-center text-xs text-white">TD</div>
              <div className="h-8 w-8 rounded-full bg-racing-purple flex items-center justify-center text-xs text-white">JR</div>
              <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center text-xs text-white">KL</div>
              <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-xs">+2</div>
            </div>
            <span className="text-xs text-muted-foreground">You are Captain</span>
          </div>
        </RacingCard>
        
        <RacingCard>
          <h3 className="text-xl font-bold mb-4">Midnight Racers</h3>
          <div className="flex items-center gap-2 mb-4">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">3 members</span>
          </div>
          <p className="text-muted-foreground mb-4">
            Casual racing group that specializes in night races. All skill levels welcome.
          </p>
          <div className="mt-6 flex justify-between items-center">
            <div className="flex -space-x-2">
              <div className="h-8 w-8 rounded-full bg-racing-red flex items-center justify-center text-xs text-white">MK</div>
              <div className="h-8 w-8 rounded-full bg-racing-purple flex items-center justify-center text-xs text-white">RS</div>
              <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center text-xs text-white">YT</div>
            </div>
            <span className="text-xs text-muted-foreground">You are Member</span>
          </div>
        </RacingCard>
        
        <RacingCard className="border-dashed flex flex-col items-center justify-center py-12">
          <div className="h-12 w-12 rounded-full border-2 border-dashed border-muted-foreground flex items-center justify-center mb-4">
            <Plus className="h-6 w-6 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-medium mb-2">Create New Team</h3>
          <p className="text-center text-muted-foreground mb-4">
            Start your own racing team and invite other drivers
          </p>
          <GradientButton>Create Team</GradientButton>
        </RacingCard>
      </div>
      
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Team Invitations</h2>
        <RacingCard>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-racing-purple-light flex items-center justify-center">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold">Apex Predators</h3>
                <p className="text-sm text-muted-foreground">Invited by RallyFan123</p>
              </div>
            </div>
            <div className="flex gap-2">
              <GradientButton>Accept</GradientButton>
              <button className="text-sm text-muted-foreground hover:text-foreground">Decline</button>
            </div>
          </div>
        </RacingCard>
      </div>
    </MainLayout>
  );
};

export default Teams;
