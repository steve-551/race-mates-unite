
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import GradientButton from '@/components/ui/GradientButton';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    
    if (!agreeTerms) {
      toast.error('Please agree to the terms and conditions');
      return;
    }
    
    // For now, we'll just simulate the signup process
    // This will be replaced with Supabase auth later
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      if (email && password && username) {
        toast.success('Account created successfully!');
        navigate('/dashboard');
      } else {
        toast.error('Please fill in all required fields');
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-racing-dark">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <h1 className="text-3xl font-bold">
              <span className="text-racing-red">Race</span>
              <span className="text-racing-purple-light">Mates</span>
            </h1>
          </Link>
          <p className="text-muted-foreground mt-2">Create your account</p>
        </div>
        
        <div className="racing-card">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="racingfan123"
                className="racing-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="racing-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="racing-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                className="racing-input"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="terms" 
                checked={agreeTerms} 
                onCheckedChange={(checked) => setAgreeTerms(checked as boolean)} 
                required
              />
              <Label htmlFor="terms" className="text-sm font-normal cursor-pointer">
                I agree to the{' '}
                <Link to="/terms" className="text-racing-purple-light hover:underline">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link to="/privacy" className="text-racing-purple-light hover:underline">
                  Privacy Policy
                </Link>
              </Label>
            </div>
            
            <GradientButton type="submit" fullWidth disabled={isLoading}>
              {isLoading ? 'Creating account...' : 'Create Account'}
            </GradientButton>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-muted-foreground">
              Already have an account?{' '}
              <Link to="/sign-in" className="text-racing-purple-light hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
