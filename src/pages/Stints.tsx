
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import PageHeader from '@/components/ui/PageHeader';
import GradientButton from '@/components/ui/GradientButton';
import RacingCard from '@/components/ui/RacingCard';
import { Button } from '@/components/ui/button';
import { Plus, Clock, Calendar, User, Edit } from 'lucide-react';

const Stints: React.FC = () => {
  return (
    <MainLayout>
      <PageHeader 
        title="Stint Management" 
        description="Assign and manage driver stints for your racing events"
        actions={
          <GradientButton>
            <Plus className="h-4 w-4 mr-2" />
            Create Stint
          </GradientButton>
        }
      />
      
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Upcoming Stints</h2>
        
        <RacingCard className="mb-4">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-racing-red/20 flex items-center justify-center">
                <Clock className="h-6 w-6 text-racing-red" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold">Stint 1: 24 Hours of Spa</h3>
                  <span className="text-xs bg-racing-red/20 text-racing-red px-2 py-1 rounded-full">You're driving</span>
                </div>
                <div className="flex flex-wrap gap-4 mt-1">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Apr 28, 2:00 PM - 4:00 PM EDT</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Speed Demons Racing</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Edit className="h-4 w-4 mr-1" />
                Modify
              </Button>
              <Button variant="outline" size="sm" className="text-racing-red">
                Can't Drive
              </Button>
            </div>
          </div>
        </RacingCard>
        
        <RacingCard>
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-racing-purple/20 flex items-center justify-center">
                <Clock className="h-6 w-6 text-racing-purple" />
              </div>
              <div>
                <h3 className="font-bold">Stint 3: 24 Hours of Spa</h3>
                <div className="flex flex-wrap gap-4 mt-1">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Apr 28, 8:00 PM - 10:00 PM EDT</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Speed Demons Racing</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Edit className="h-4 w-4 mr-1" />
                Modify
              </Button>
              <GradientButton size="sm">
                Volunteer
              </GradientButton>
            </div>
          </div>
        </RacingCard>
      </div>
      
      <div>
        <h2 className="text-xl font-bold mb-4">Stint Calendar</h2>
        <RacingCard>
          <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
            {/* This is a simple placeholder for a calendar view */}
            <div className="text-center p-4 rounded-lg bg-muted">
              <p className="font-bold">Mon</p>
              <p className="text-lg">24</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-muted">
              <p className="font-bold">Tue</p>
              <p className="text-lg">25</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-muted">
              <p className="font-bold">Wed</p>
              <p className="text-lg">26</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-muted">
              <p className="font-bold">Thu</p>
              <p className="text-lg">27</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-racing-red/20 border border-racing-red">
              <p className="font-bold">Fri</p>
              <p className="text-lg">28</p>
              <div className="mt-2 text-xs p-1 bg-racing-red rounded text-white">2:00 PM</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-racing-red/20 border border-racing-red">
              <p className="font-bold">Sat</p>
              <p className="text-lg">29</p>
              <div className="mt-2 text-xs p-1 bg-racing-red rounded text-white">Until 2:00 PM</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-muted">
              <p className="font-bold">Sun</p>
              <p className="text-lg">30</p>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <Button variant="outline">View Full Calendar</Button>
          </div>
        </RacingCard>
      </div>
    </MainLayout>
  );
};

export default Stints;
