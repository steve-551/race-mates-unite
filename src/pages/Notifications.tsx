
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import PageHeader from '@/components/ui/PageHeader';
import RacingCard from '@/components/ui/RacingCard';
import { Button } from '@/components/ui/button';
import { Heart, Calendar, Users, MessageSquare, Bell, Settings } from 'lucide-react';

const NotificationItem: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  time: string;
  read: boolean;
  actions?: React.ReactNode;
}> = ({ icon, title, description, time, read, actions }) => {
  return (
    <div className={`p-4 border-b border-border ${read ? 'opacity-70' : ''}`}>
      <div className="flex items-start gap-4">
        <div className={`h-10 w-10 rounded-full flex items-center justify-center ${read ? 'bg-muted' : 'bg-racing-red/20'}`}>
          {icon}
        </div>
        
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold">{title}</h3>
              <p className="text-muted-foreground">{description}</p>
            </div>
            
            {!read && (
              <div className="h-2 w-2 rounded-full bg-racing-red" />
            )}
          </div>
          
          <div className="flex justify-between items-center mt-2">
            <p className="text-xs text-muted-foreground">{time}</p>
            {actions && (
              <div className="flex gap-2">
                {actions}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Notifications: React.FC = () => {
  return (
    <MainLayout>
      <PageHeader 
        title="Notifications" 
        description="Stay updated with your racing activity"
        actions={
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Notification Settings
          </Button>
        }
      />
      
      <RacingCard className="p-0">
        <div className="p-4 border-b border-border flex justify-between items-center">
          <h3 className="font-bold">Recent Notifications</h3>
          <Button variant="ghost" size="sm">
            Mark All as Read
          </Button>
        </div>
        
        <NotificationItem 
          icon={<Heart className="h-5 w-5 text-racing-red" />}
          title="New Match"
          description="You matched with DriftKing88"
          time="2 hours ago"
          read={false}
          actions={
            <>
              <Button size="sm" variant="outline">View Profile</Button>
              <Button size="sm" variant="ghost">Dismiss</Button>
            </>
          }
        />
        
        <NotificationItem 
          icon={<Calendar className="h-5 w-5 text-racing-purple" />}
          title="Event Reminder"
          description="24 Hours of Spa Endurance Race starts in 2 days"
          time="5 hours ago"
          read={false}
          actions={
            <Button size="sm" variant="outline">View Event</Button>
          }
        />
        
        <NotificationItem 
          icon={<Users className="h-5 w-5 text-racing-purple-light" />}
          title="Team Invitation"
          description="You were invited to join 'Speed Demons Racing'"
          time="1 day ago"
          read={false}
          actions={
            <>
              <Button size="sm" variant="outline">Accept</Button>
              <Button size="sm" variant="ghost">Decline</Button>
            </>
          }
        />
        
        <NotificationItem 
          icon={<MessageSquare className="h-5 w-5 text-muted-foreground" />}
          title="New Message"
          description="RallyFan123 sent you a message"
          time="3 days ago"
          read={true}
          actions={
            <Button size="sm" variant="outline">Reply</Button>
          }
        />
        
        <NotificationItem 
          icon={<Bell className="h-5 w-5 text-muted-foreground" />}
          title="Stint Assignment"
          description="You've been assigned to Stint 1 for 24 Hours of Spa"
          time="5 days ago"
          read={true}
          actions={
            <Button size="sm" variant="outline">View Details</Button>
          }
        />
        
        <div className="p-4 text-center">
          <Button variant="link" size="sm">
            Load More
          </Button>
        </div>
      </RacingCard>
    </MainLayout>
  );
};

export default Notifications;
