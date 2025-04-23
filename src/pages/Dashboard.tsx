
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import PageHeader from '@/components/ui/PageHeader';
import RacingCard from '@/components/ui/RacingCard';
import GradientButton from '@/components/ui/GradientButton';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Calendar, 
  User, 
  BarChart3, 
  FileText, 
  Clock, 
  Users,
  Bell
} from 'lucide-react';

const DashboardCard: React.FC<{
  title: string;
  icon: React.ReactNode;
  description: string;
  linkTo: string;
  linkText: string;
  className?: string;
}> = ({ title, icon, description, linkTo, linkText, className }) => {
  return (
    <RacingCard className={className}>
      <div className="flex flex-col h-full">
        <div className="flex items-start mb-4">
          <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center mr-3">
            {icon}
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <p className="text-muted-foreground mb-4 flex-1">{description}</p>
        <Link to={linkTo} className="mt-auto">
          <GradientButton className="w-full">{linkText}</GradientButton>
        </Link>
      </div>
    </RacingCard>
  );
};

const Dashboard: React.FC = () => {
  return (
    <MainLayout>
      <PageHeader 
        title="Dashboard" 
        description="Welcome back! Here's an overview of your racing activities."
      />
      
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <RacingCard className="flex items-center">
          <div className="h-12 w-12 rounded-full bg-racing-red/20 flex items-center justify-center mr-4">
            <Heart className="h-6 w-6 text-racing-red" />
          </div>
          <div>
            <p className="text-muted-foreground text-sm">Matches</p>
            <h3 className="text-2xl font-bold">12</h3>
          </div>
        </RacingCard>
        
        <RacingCard className="flex items-center">
          <div className="h-12 w-12 rounded-full bg-racing-purple/20 flex items-center justify-center mr-4">
            <Calendar className="h-6 w-6 text-racing-purple" />
          </div>
          <div>
            <p className="text-muted-foreground text-sm">Upcoming Events</p>
            <h3 className="text-2xl font-bold">3</h3>
          </div>
        </RacingCard>
        
        <RacingCard className="flex items-center">
          <div className="h-12 w-12 rounded-full bg-racing-purple-light/20 flex items-center justify-center mr-4">
            <Users className="h-6 w-6 text-racing-purple-light" />
          </div>
          <div>
            <p className="text-muted-foreground text-sm">Teams</p>
            <h3 className="text-2xl font-bold">2</h3>
          </div>
        </RacingCard>
      </div>
      
      {/* Main Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DashboardCard 
          title="Find Racing Partners" 
          icon={<Heart className="h-5 w-5 text-racing-red" />}
          description="Match with sim racers based on your preferences, skill level, and racing style."
          linkTo="/mate-match"
          linkText="Find Mates"
        />
        
        <DashboardCard 
          title="Racing Statistics" 
          icon={<BarChart3 className="h-5 w-5 text-racing-purple" />}
          description="View your performance metrics, safety rating, and racing history across all platforms."
          linkTo="/profile"
          linkText="View Stats"
        />
        
        <DashboardCard 
          title="Upcoming Events" 
          icon={<Calendar className="h-5 w-5 text-racing-purple-light" />}
          description="Check your scheduled races, practice sessions, and team events."
          linkTo="/events"
          linkText="View Calendar"
        />
        
        <DashboardCard 
          title="Manage Teams" 
          icon={<Users className="h-5 w-5 text-racing-red" />}
          description="Create, join, or manage racing teams. Collaborate with team members and organize events."
          linkTo="/teams"
          linkText="Manage Teams"
        />
        
        <DashboardCard 
          title="Car Setups" 
          icon={<FileText className="h-5 w-5 text-racing-purple" />}
          description="Access and share your racing setups with teammates or keep them private."
          linkTo="/setups"
          linkText="View Setups"
        />
        
        <DashboardCard 
          title="Manage Stints" 
          icon={<Clock className="h-5 w-5 text-racing-purple-light" />}
          description="Assign and manage driver stints for endurance races and team events."
          linkTo="/stints"
          linkText="Manage Stints"
        />
      </div>
      
      {/* Recent Activity */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
        <RacingCard>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="h-10 w-10 rounded-full bg-racing-red/20 flex items-center justify-center mr-3">
                <Heart className="h-5 w-5 text-racing-red" />
              </div>
              <div>
                <p className="font-medium">New Match</p>
                <p className="text-sm text-muted-foreground">You matched with DriftKing88</p>
                <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="h-10 w-10 rounded-full bg-racing-purple/20 flex items-center justify-center mr-3">
                <Calendar className="h-5 w-5 text-racing-purple" />
              </div>
              <div>
                <p className="font-medium">Event Added</p>
                <p className="text-sm text-muted-foreground">24 Hours of Spa Endurance Race</p>
                <p className="text-xs text-muted-foreground mt-1">Yesterday</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="h-10 w-10 rounded-full bg-racing-purple-light/20 flex items-center justify-center mr-3">
                <Bell className="h-5 w-5 text-racing-purple-light" />
              </div>
              <div>
                <p className="font-medium">Team Invitation</p>
                <p className="text-sm text-muted-foreground">You were invited to join "Speed Demons Racing"</p>
                <p className="text-xs text-muted-foreground mt-1">3 days ago</p>
              </div>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <Link to="/notifications" className="text-racing-purple-light hover:underline text-sm">
              View all activity
            </Link>
          </div>
        </RacingCard>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
