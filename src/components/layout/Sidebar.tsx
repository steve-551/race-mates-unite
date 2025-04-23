
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { 
  Home, 
  Users, 
  Calendar, 
  Settings, 
  Menu, 
  X, 
  LogOut, 
  Heart, 
  User,
  Bell,
  FileText,
  List
} from 'lucide-react';

type SidebarItem = {
  label: string;
  path: string;
  icon: React.ReactNode;
};

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const mainItems: SidebarItem[] = [
    { label: 'Dashboard', path: '/dashboard', icon: <Home size={20} /> },
    { label: 'Mate Match', path: '/mate-match', icon: <Heart size={20} /> },
    { label: 'My Matches', path: '/my-matches', icon: <Users size={20} /> },
    { label: 'Teams', path: '/teams', icon: <Users size={20} /> },
    { label: 'Events', path: '/events', icon: <Calendar size={20} /> },
    { label: 'Stints', path: '/stints', icon: <List size={20} /> },
    { label: 'Setups', path: '/setups', icon: <FileText size={20} /> },
  ];

  const accountItems: SidebarItem[] = [
    { label: 'My Profile', path: '/profile', icon: <User size={20} /> },
    { label: 'Notifications', path: '/notifications', icon: <Bell size={20} /> },
    { label: 'Settings', path: '/settings', icon: <Settings size={20} /> },
    { label: 'Logout', path: '/logout', icon: <LogOut size={20} /> },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const NavItem = ({ item }: { item: SidebarItem }) => {
    const isActive = location.pathname === item.path;
    
    return (
      <Link 
        to={item.path} 
        onClick={closeSidebar}
        className={cn(
          "flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-colors",
          isActive 
            ? "bg-accent text-white font-medium" 
            : "text-sidebar-foreground hover:bg-muted"
        )}
      >
        {item.icon}
        <span>{item.label}</span>
      </Link>
    );
  };

  return (
    <>
      {/* Mobile menu button */}
      <Button 
        variant="ghost" 
        size="icon" 
        className="fixed top-4 left-4 lg:hidden z-50" 
        onClick={toggleSidebar}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </Button>

      {/* Backdrop for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 lg:hidden z-40" 
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed top-0 left-0 h-full w-64 bg-sidebar z-50 border-r border-border flex flex-col transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        )}
      >
        <div className="p-4 border-b border-border flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-bold text-2xl text-racing-red">Race<span className="text-racing-purple-light">Mates</span></span>
          </Link>
          <Button 
            variant="ghost" 
            size="icon" 
            className="lg:hidden" 
            onClick={closeSidebar}
          >
            <X size={18} />
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <nav className="space-y-6">
            <div>
              <h3 className="text-xs uppercase text-muted-foreground font-semibold mb-3 px-4">Main</h3>
              {mainItems.map((item) => (
                <NavItem key={item.path} item={item} />
              ))}
            </div>

            <div>
              <h3 className="text-xs uppercase text-muted-foreground font-semibold mb-3 px-4">Account</h3>
              {accountItems.map((item) => (
                <NavItem key={item.path} item={item} />
              ))}
            </div>
          </nav>
        </div>

        <div className="p-4 border-t border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
              <User size={20} className="text-muted-foreground" />
            </div>
            <div>
              <p className="font-medium text-sm">Guest User</p>
              <p className="text-xs text-muted-foreground">guest@example.com</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
