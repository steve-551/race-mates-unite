
import React from 'react';
import { Link } from 'react-router-dom';
import GradientButton from '@/components/ui/GradientButton';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="w-full py-4 px-6 flex items-center justify-between border-b border-border">
        <div className="font-bold text-2xl">
          <span className="text-racing-red">Race</span>
          <span className="text-racing-purple-light">Mates</span>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/sign-in">
            <Button variant="ghost">Sign In</Button>
          </Link>
          <Link to="/sign-up">
            <GradientButton>Sign Up</GradientButton>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1626055195880-8daf7c858054?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-racing-dark/80 to-racing-dark"></div>
        
        <div className="max-w-3xl mx-auto text-center relative z-10 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Find Your Perfect <span className="text-racing-red">Racing</span> Partner
          </h1>
          <p className="text-xl mb-8 text-muted-foreground">
            Connect with sim racers who match your skill level, racing style, and schedule. 
            Build teams, manage events, and coordinate stints for optimal race performance.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/sign-up">
              <GradientButton className="text-lg px-8 py-3">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </GradientButton>
            </Link>
            <Link to="/sign-in">
              <Button variant="outline" size="lg">
                I Already Have an Account
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-racing-gray-dark">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Race Together. Win Together.</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="racing-card">
              <div className="h-12 w-12 rounded-full bg-racing-red/20 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-racing-red" />
              </div>
              <h3 className="text-xl font-bold mb-2">Match With Racers</h3>
              <p className="text-muted-foreground">Find the perfect racing partner based on skill, platform, and racing style with our intelligent matching system.</p>
            </div>
            
            <div className="racing-card">
              <div className="h-12 w-12 rounded-full bg-racing-purple/20 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-racing-purple" />
              </div>
              <h3 className="text-xl font-bold mb-2">Manage Teams</h3>
              <p className="text-muted-foreground">Create and manage racing teams, assign roles, and coordinate with team members for upcoming events.</p>
            </div>
            
            <div className="racing-card">
              <div className="h-12 w-12 rounded-full bg-racing-purple-light/20 flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-racing-purple-light" />
              </div>
              <h3 className="text-xl font-bold mb-2">Schedule Events</h3>
              <p className="text-muted-foreground">Plan and organize racing events, assign stints to teammates, and keep track of your racing calendar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">&copy; 2025 RaceMates. All rights reserved.</p>
          </div>
          <div className="flex gap-6">
            <Link to="/help" className="text-sm text-muted-foreground hover:text-foreground">Help</Link>
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground">Privacy</Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
