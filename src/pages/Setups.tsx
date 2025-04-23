
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import PageHeader from '@/components/ui/PageHeader';
import GradientButton from '@/components/ui/GradientButton';
import RacingCard from '@/components/ui/RacingCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, FileText, Download, MapPin, Search, Users } from 'lucide-react';

const Setups: React.FC = () => {
  return (
    <MainLayout>
      <PageHeader 
        title="Car Setups" 
        description="Manage and share your racing setup files"
        actions={
          <GradientButton>
            <Plus className="h-4 w-4 mr-2" />
            Upload Setup
          </GradientButton>
        }
      />
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <div className="w-full md:w-64">
          <RacingCard className="mb-4">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search setups..." 
                className="pl-8"
              />
            </div>
          </RacingCard>
          
          <RacingCard>
            <h3 className="font-bold mb-4">Folders</h3>
            <div className="space-y-2">
              <button className="w-full text-left py-2 px-3 rounded-md bg-racing-purple/20 text-racing-purple flex items-center">
                <FileText className="h-4 w-4 mr-2" />
                iRacing
              </button>
              <button className="w-full text-left py-2 px-3 rounded-md hover:bg-muted flex items-center">
                <FileText className="h-4 w-4 mr-2" />
                Assetto Corsa
              </button>
              <button className="w-full text-left py-2 px-3 rounded-md hover:bg-muted flex items-center">
                <FileText className="h-4 w-4 mr-2" />
                Gran Turismo 7
              </button>
              <button className="w-full text-left py-2 px-3 rounded-md hover:bg-muted flex items-center">
                <FileText className="h-4 w-4 mr-2" />
                ACC
              </button>
            </div>
            
            <div className="mt-4 pt-4 border-t border-border">
              <h3 className="font-bold mb-4">Filters</h3>
              <div className="space-y-2">
                <button className="w-full text-left py-2 px-3 rounded-md hover:bg-muted flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  Team Setups
                </button>
                <button className="w-full text-left py-2 px-3 rounded-md hover:bg-muted flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  My Setups
                </button>
              </div>
            </div>
          </RacingCard>
        </div>
        
        {/* Main Content */}
        <div className="flex-1">
          <RacingCard className="mb-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">iRacing Setups</h3>
              <Button variant="outline" size="sm">
                <Plus className="h-4 w-4 mr-2" />
                New Folder
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <RacingCard className="p-4 hover:bg-muted cursor-pointer">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-racing-red" />
                    <h4 className="font-bold">Ferrari 488 GT3 - Spa</h4>
                  </div>
                  <Download className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="text-xs bg-muted px-2 py-1 rounded">Dry</span>
                  <span className="text-xs bg-muted px-2 py-1 rounded">Aggressive</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  <span>Spa-Francorchamps</span>
                </div>
              </RacingCard>
              
              <RacingCard className="p-4 hover:bg-muted cursor-pointer">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-racing-purple" />
                    <h4 className="font-bold">BMW M4 GT3 - Nürburgring</h4>
                  </div>
                  <Download className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="text-xs bg-muted px-2 py-1 rounded">Wet</span>
                  <span className="text-xs bg-muted px-2 py-1 rounded">Stable</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  <span>Nürburgring GP</span>
                </div>
              </RacingCard>
              
              <RacingCard className="p-4 hover:bg-muted cursor-pointer">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-racing-red" />
                    <h4 className="font-bold">Porsche 911 GT3 R - Daytona</h4>
                  </div>
                  <Download className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="text-xs bg-muted px-2 py-1 rounded">Dry</span>
                  <span className="text-xs bg-muted px-2 py-1 rounded">Balanced</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  <span>Daytona Road Course</span>
                </div>
              </RacingCard>
              
              <RacingCard className="p-4 border-dashed flex flex-col items-center justify-center cursor-pointer">
                <Plus className="h-10 w-10 text-muted-foreground mb-2" />
                <p className="text-muted-foreground">Upload New Setup</p>
              </RacingCard>
            </div>
          </RacingCard>
          
          <RacingCard>
            <h3 className="text-xl font-bold mb-4">Recently Shared With You</h3>
            <div className="space-y-4">
              <div className="border border-border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-racing-purple" />
                    <h4 className="font-bold">Mercedes AMG GT3 - Monza</h4>
                  </div>
                  <Download className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="text-xs bg-muted px-2 py-1 rounded">Dry</span>
                  <span className="text-xs bg-muted px-2 py-1 rounded">Low Downforce</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    <span>Autodromo Nazionale Monza</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Shared by DriftKing88</p>
                </div>
              </div>
            </div>
          </RacingCard>
        </div>
      </div>
    </MainLayout>
  );
};

export default Setups;
