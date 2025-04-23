
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import PageHeader from '@/components/ui/PageHeader';
import GradientButton from '@/components/ui/GradientButton';
import RacingCard from '@/components/ui/RacingCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, Calendar, Users, Clock, MapPin } from 'lucide-react';

const Events: React.FC = () => {
  return (
    <MainLayout>
      <PageHeader 
        title="Events" 
        description="View upcoming races and events, or create your own"
        actions={
          <GradientButton>
            <Plus className="h-4 w-4 mr-2" />
            Create Event
          </GradientButton>
        }
      />
      
      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
          <TabsTrigger value="myEvents">My Events</TabsTrigger>
        </TabsList>
        
        <TabsContent value="upcoming" className="space-y-4">
          <RacingCard>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="text-center md:text-left md:border-r border-border md:pr-6 flex-shrink-0">
                <p className="text-xl font-bold text-racing-red">APR</p>
                <p className="text-3xl font-bold">28</p>
                <p className="text-muted-foreground">Saturday</p>
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">24 Hours of Spa Endurance Race</h3>
                <div className="flex flex-col md:flex-row gap-2 md:gap-6 mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Spa-Francorchamps</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Starts 2:00 PM EDT</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Speed Demons Racing</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-muted px-2 py-1 rounded">iRacing</span>
                  <span className="text-xs bg-muted px-2 py-1 rounded">Endurance</span>
                  <span className="text-xs bg-muted px-2 py-1 rounded">GT3</span>
                </div>
                
                <div className="flex flex-col xs:flex-row gap-2">
                  <GradientButton className="flex-1">View Details</GradientButton>
                  <button className="text-sm text-muted-foreground hover:text-foreground">Can't Attend</button>
                </div>
              </div>
            </div>
          </RacingCard>
          
          <RacingCard>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="text-center md:text-left md:border-r border-border md:pr-6 flex-shrink-0">
                <p className="text-xl font-bold text-racing-red">MAY</p>
                <p className="text-3xl font-bold">05</p>
                <p className="text-muted-foreground">Sunday</p>
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Nürburgring 4 Hour Endurance</h3>
                <div className="flex flex-col md:flex-row gap-2 md:gap-6 mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Nürburgring GP</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Starts 10:00 AM EDT</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Midnight Racers</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-muted px-2 py-1 rounded">Assetto Corsa</span>
                  <span className="text-xs bg-muted px-2 py-1 rounded">Endurance</span>
                  <span className="text-xs bg-muted px-2 py-1 rounded">GT3</span>
                </div>
                
                <div className="flex flex-col xs:flex-row gap-2">
                  <GradientButton className="flex-1">View Details</GradientButton>
                  <button className="text-sm text-muted-foreground hover:text-foreground">Can't Attend</button>
                </div>
              </div>
            </div>
          </RacingCard>
        </TabsContent>
        
        <TabsContent value="past">
          <div className="space-y-4">
            <RacingCard>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="text-center md:text-left md:border-r border-border md:pr-6 flex-shrink-0">
                  <p className="text-xl font-bold text-muted-foreground">APR</p>
                  <p className="text-3xl font-bold text-muted-foreground">15</p>
                  <p className="text-muted-foreground">Sunday</p>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Daytona 500</h3>
                  <div className="flex flex-col md:flex-row gap-2 md:gap-6 mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Daytona International Speedway</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Speed Demons Racing</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-muted px-2 py-1 rounded">iRacing</span>
                    <span className="text-xs bg-muted px-2 py-1 rounded">Oval</span>
                    <span className="text-xs bg-muted px-2 py-1 rounded">NASCAR</span>
                  </div>
                  
                  <div className="bg-racing-purple/10 border border-racing-purple/20 rounded-md p-3 inline-block">
                    <span className="text-racing-purple-light font-medium">Result: 3rd Place</span>
                  </div>
                </div>
              </div>
            </RacingCard>
          </div>
        </TabsContent>
        
        <TabsContent value="myEvents">
          <RacingCard className="border-dashed flex flex-col items-center justify-center py-12">
            <div className="h-12 w-12 rounded-full border-2 border-dashed border-muted-foreground flex items-center justify-center mb-4">
              <Calendar className="h-6 w-6 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-medium mb-2">Create Your First Event</h3>
            <p className="text-center text-muted-foreground mb-4 max-w-md">
              Plan races, practice sessions, or team meetings. Invite your teammates and manage driver stints.
            </p>
            <GradientButton>
              <Plus className="h-4 w-4 mr-2" />
              Create Event
            </GradientButton>
          </RacingCard>
        </TabsContent>
      </Tabs>
    </MainLayout>
  );
};

export default Events;
