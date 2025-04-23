
import React from 'react';
import { Link } from 'react-router-dom';
import GradientButton from '@/components/ui/GradientButton';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-racing-dark">
      <div className="max-w-md w-full text-center">
        <h1 className="text-9xl font-bold text-racing-red">404</h1>
        <h2 className="text-3xl font-bold mt-4 mb-6">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          Oops! Looks like you've taken a detour off the racing line.
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <GradientButton className="px-8">
            Back to Pit Lane
          </GradientButton>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
