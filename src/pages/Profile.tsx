
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import PageHeader from '@/components/ui/PageHeader';
import RacingCard from '@/components/ui/RacingCard';
import GradientButton from '@/components/ui/GradientButton';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Edit, User, BarChart3, Calendar, Clock, Users } from 'lucide-react';

const Profile: React.FC = () => {
  return (
    <MainLayout>
      <PageHeader 
        title="My Profile" 
        description="View and manage your racing profile"
        actions={
          <Button variant="outline" className="gap-2">
            <Edit className="h-4 w-4" />
            Edit Profile
          </Button>
        }
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <RacingCard className="lg:col-span-1">
          <div className="flex flex-col items-center">
            <div className="h-24 w-24 rounded-full bg-muted flex items-center justify-center mb-4 overflow-hidden">
              <User className="h-12 w-12 text-muted-foreground" />
            </div>
            
            <h2 className="text-2xl font-bold">SpeedRacer42</h2>
            <p className="text-muted-foreground mb-4">Joined April 2023</p>
            
            <GradientButton className="w-full mb-4">
              <Edit className="h-4 w-4 mr-2" />
              Edit Profile
            </GradientButton>
            
            <div className="w-full border-t border-border pt-4 mt-2">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-xl font-bold">12</p>
                  <p className="text-sm text-muted-foreground">Matches</p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-bold">2</p>
                  <p className="text-sm text-muted-foreground">Teams</p>
                </div>
              </div>
            </div>
          </div>
        </RacingCard>
        
        {/* Tabs Content */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="mb-6 grid grid-cols-3 h-auto">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="stats">Racing Stats</TabsTrigger>
              <TabsTrigger value="platforms">Platforms</TabsTrigger>
            </TabsList>
            
            <TabsContent value="general">
              <RacingCard>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold mb-2">About Me</h3>
                    <p className="text-muted-foreground">
                      Racing enthusiast since 2018. Prefer GT3 and LMP cars. Looking for endurance teammates who can maintain consistent lap times.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold mb-2">Racing Style</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-sm bg-muted px-3 py-1 rounded-full">Aggressive</span>
                      <span className="text-sm bg-muted px-3 py-1 rounded-full">Late Braker</span>
                      <span className="text-sm bg-muted px-3 py-1 rounded-full">Consistent</span>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold mb-2">Disciplines</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-sm bg-muted px-3 py-1 rounded-full">Road</span>
                      <span className="text-sm bg-muted px-3 py-1 rounded-full">GT3</span>
                      <span className="text-sm bg-muted px-3 py-1 rounded-full">Endurance</span>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold mb-2">Availability</h3>
                    <p className="text-muted-foreground">
                      Weekends and Weekday Evenings (EST)
                    </p>
                  </div>
                </div>
              </RacingCard>
            </TabsContent>
            
            <TabsContent value="stats">
              <RacingCard>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold mb-4">iRacing Statistics</h3>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="bg-muted rounded-lg p-4 text-center">
                        <p className="text-2xl font-bold">1850</p>
                        <p className="text-sm text-muted-foreground">iRating</p>
                      </div>
                      
                      <div className="bg-muted rounded-lg p-4 text-center">
                        <p className="text-2xl font-bold">A 4.52</p>
                        <p className="text-sm text-muted-foreground">Safety Rating</p>
                      </div>
                      
                      <div className="bg-muted rounded-lg p-4 text-center">
                        <p className="text-2xl font-bold">156</p>
                        <p className="text-sm text-muted-foreground">Races</p>
                      </div>
                      
                      <div className="bg-muted rounded-lg p-4 text-center">
                        <p className="text-2xl font-bold">12</p>
                        <p className="text-sm text-muted-foreground">Wins</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold mb-4">License Classes</h3>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div className="border border-border rounded-lg p-4">
                        <p className="font-bold">Road</p>
                        <p className="text-xl font-bold text-racing-purple-light">A</p>
                      </div>
                      
                      <div className="border border-border rounded-lg p-4">
                        <p className="font-bold">Oval</p>
                        <p className="text-xl font-bold text-racing-purple-light">B</p>
                      </div>
                      
                      <div className="border border-border rounded-lg p-4">
                        <p className="font-bold">Dirt Road</p>
                        <p className="text-xl font-bold text-racing-purple-light">C</p>
                      </div>
                      
                      <div className="border border-border rounded-lg p-4">
                        <p className="font-bold">Dirt Oval</p>
                        <p className="text-xl font-bold text-racing-purple-light">D</p>
                      </div>
                      
                      <div className="border border-border rounded-lg p-4">
                        <p className="font-bold">Formula</p>
                        <p className="text-xl font-bold text-racing-purple-light">A</p>
                      </div>
                    </div>
                  </div>
                </div>
              </RacingCard>
            </TabsContent>
            
            <TabsContent value="platforms">
              <RacingCard>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold mb-4">Racing Platforms</h3>
                    
                    <div className="space-y-4">
                      <div className="border border-border rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-bold">iRacing</h4>
                            <p className="text-sm text-muted-foreground">Primary Platform</p>
                          </div>
                          <div className="bg-racing-red/20 text-racing-red px-2 py-1 rounded text-sm">
                            Active
                          </div>
                        </div>
                        <div className="mt-4">
                          <p className="text-sm font-medium">Username</p>
                          <p className="text-muted-foreground">SpeedRacer42</p>
                        </div>
                      </div>
                      
                      <div className="border border-border rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-bold">Assetto Corsa Competizione</h4>
                            <p className="text-sm text-muted-foreground">Secondary Platform</p>
                          </div>
                          <div className="bg-racing-red/20 text-racing-red px-2 py-1 rounded text-sm">
                            Active
                          </div>
                        </div>
                        <div className="mt-4">
                          <p className="text-sm font-medium">Username</p>
                          <p className="text-muted-foreground">SpeedRacer</p>
                        </div>
                      </div>
                      
                      <div className="border border-border rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-bold">Gran Turismo 7</h4>
                            <p className="text-sm text-muted-foreground">Casual Platform</p>
                          </div>
                          <div className="bg-muted text-muted-foreground px-2 py-1 rounded text-sm">
                            Inactive
                          </div>
                        </div>
                        <div className="mt-4">
                          <p className="text-sm font-medium">Username</p>
                          <p className="text-muted-foreground">Speed_Racer_GT</p>
                        </div>
                      </div>
                      
                      <Button variant="outline" className="w-full">
                        <span className="text-racing-purple-light">+</span> Add Platform
                      </Button>
                    </div>
                  </div>
                </div>
              </RacingCard>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      {/* Recent Activity */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
        <RacingCard>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="h-10 w-10 rounded-full bg-racing-red/20 flex items-center justify-center mr-3">
                <Calendar className="h-5 w-5 text-racing-red" />
              </div>
              <div>
                <p className="font-medium">Participated in Event</p>
                <p className="text-sm text-muted-foreground">Nürburgring 4 Hour Endurance</p>
                <p className="text-xs text-muted-foreground mt-1">2 days ago</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="h-10 w-10 rounded-full bg-racing-purple/20 flex items-center justify-center mr-3">
                <Users className="h-5 w-5 text-racing-purple" />
              </div>
              <div>
                <p className="font-medium">Joined Team</p>
                <p className="text-sm text-muted-foreground">Speed Demons Racing</p>
                <p className="text-xs text-muted-foreground mt-1">1 week ago</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="h-10 w-10 rounded-full bg-racing-purple-light/20 flex items-center justify-center mr-3">
                <BarChart3 className="h-5 w-5 text-racing-purple-light" />
              </div>
              <div>
                <p className="font-medium">Updated Racing Stats</p>
                <p className="text-sm text-muted-foreground">iRating increased to 1850</p>
                <p className="text-xs text-muted-foreground mt-1">2 weeks ago</p>
              </div>
            </div>
          </div>
        </RacingCard>
      </div>
    </MainLayout>
  );
};

export default Profile;
