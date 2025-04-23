import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import PageHeader from '@/components/ui/PageHeader';
import RacingCard from '@/components/ui/RacingCard';
import GradientButton from '@/components/ui/GradientButton';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Bell, Shield, LogOut, Heart, Calendar, Users, MessageSquare, Clock } from 'lucide-react';

const Settings: React.FC = () => {
  return (
    <MainLayout>
      <PageHeader 
        title="Settings" 
        description="Configure your app preferences and account settings"
      />
      
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="privacy">Privacy</TabsTrigger>
        </TabsList>
        
        <TabsContent value="account">
          <RacingCard className="mb-6">
            <h3 className="text-xl font-bold mb-4">Profile Information</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input 
                    id="username"
                    placeholder="Your username"
                    defaultValue="SpeedRacer42"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="Your email"
                    defaultValue="speed.racer@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <textarea 
                  id="bio" 
                  className="w-full rounded-md bg-muted border border-border text-foreground px-4 py-2 min-h-[100px]"
                  placeholder="Tell others about yourself..."
                  defaultValue="Racing enthusiast since 2018. Prefer GT3 and LMP cars. Looking for endurance teammates who can maintain consistent lap times."
                />
              </div>
              
              <div className="pt-4">
                <GradientButton>Save Changes</GradientButton>
              </div>
            </div>
          </RacingCard>
          
          <RacingCard className="mb-6">
            <h3 className="text-xl font-bold mb-4">Password</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input 
                  id="current-password"
                  type="password"
                  placeholder="Enter your current password"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input 
                    id="new-password"
                    type="password"
                    placeholder="Enter new password"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input 
                    id="confirm-password"
                    type="password"
                    placeholder="Confirm new password"
                  />
                </div>
              </div>
              
              <div className="pt-4">
                <Button variant="outline">Update Password</Button>
              </div>
            </div>
          </RacingCard>
          
          <RacingCard>
            <h3 className="text-xl font-bold mb-4 text-racing-red">Danger Zone</h3>
            <p className="text-muted-foreground mb-4">
              The following actions are destructive and cannot be reversed. Please proceed with caution.
            </p>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 border border-border rounded-md">
                <div>
                  <h4 className="font-bold">Delete Account</h4>
                  <p className="text-sm text-muted-foreground">
                    This will permanently delete your account and all associated data.
                  </p>
                </div>
                <Button variant="destructive">Delete Account</Button>
              </div>
              
              <div className="flex justify-between items-center p-4 border border-border rounded-md">
                <div>
                  <h4 className="font-bold">Sign Out</h4>
                  <p className="text-sm text-muted-foreground">
                    Sign out from your current session.
                  </p>
                </div>
                <Button variant="outline" className="gap-2">
                  <LogOut className="h-4 w-4" />
                  Sign Out
                </Button>
              </div>
            </div>
          </RacingCard>
        </TabsContent>
        
        <TabsContent value="notifications">
          <RacingCard>
            <h3 className="text-xl font-bold mb-6">Notification Preferences</h3>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 rounded-full bg-racing-red/20 flex items-center justify-center">
                    <Heart className="h-5 w-5 text-racing-red" />
                  </div>
                  <div>
                    <h4 className="font-bold">Matches</h4>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications for new matches and match requests
                    </p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 rounded-full bg-racing-purple/20 flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-racing-purple" />
                  </div>
                  <div>
                    <h4 className="font-bold">Events</h4>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications for upcoming events and event changes
                    </p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 rounded-full bg-racing-purple-light/20 flex items-center justify-center">
                    <Users className="h-5 w-5 text-racing-purple-light" />
                  </div>
                  <div>
                    <h4 className="font-bold">Teams</h4>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications for team invites and team updates
                    </p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                    <MessageSquare className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <h4 className="font-bold">Messages</h4>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications for new messages
                    </p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <h4 className="font-bold">Stints</h4>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications for stint assignments and changes
                    </p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="pt-4 flex justify-between">
                <Button variant="outline" className="gap-2">
                  <Bell className="h-4 w-4" />
                  Disable All
                </Button>
                <GradientButton>Save Preferences</GradientButton>
              </div>
            </div>
          </RacingCard>
        </TabsContent>
        
        <TabsContent value="privacy">
          <RacingCard>
            <h3 className="text-xl font-bold mb-6">Privacy Settings</h3>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between space-x-4">
                <div>
                  <h4 className="font-bold">Profile Visibility</h4>
                  <p className="text-sm text-muted-foreground">
                    Make your profile visible to other racers in the matchmaking system
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between space-x-4">
                <div>
                  <h4 className="font-bold">Stats Visibility</h4>
                  <p className="text-sm text-muted-foreground">
                    Show your racing statistics on your public profile
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between space-x-4">
                <div>
                  <h4 className="font-bold">Online Status</h4>
                  <p className="text-sm text-muted-foreground">
                    Show when you're online to your matches and team members
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between space-x-4">
                <div>
                  <h4 className="font-bold">Match Recommendations</h4>
                  <p className="text-sm text-muted-foreground">
                    Allow us to recommend your profile to compatible racers
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="pt-4">
                <GradientButton>Save Privacy Settings</GradientButton>
              </div>
            </div>
          </RacingCard>
        </TabsContent>
      </Tabs>
    </MainLayout>
  );
};

export default Settings;
