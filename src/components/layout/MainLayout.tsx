
import React from 'react';
import Sidebar from './Sidebar';
import { cn } from '@/lib/utils';

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, className }) => {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className={cn(
        "flex-1 ml-0 lg:ml-64 min-h-screen p-4 md:p-6 lg:p-8",
        className
      )}>
        <div className="max-w-7xl mx-auto w-full">
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
