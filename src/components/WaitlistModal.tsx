import { useState } from 'react';
import { X, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      localStorage.setItem('pyra-waitlist-joined', 'true');
      localStorage.setItem('pyra-waitlist-email', email);
      
      toast({
        title: "Welcome to Pyra! 🎉",
        description: "You're on the waitlist. We'll notify you when we launch.",
      });
      
      setEmail('');
      onClose();
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative bg-navy-700 border border-white/20 rounded-2xl p-8 max-w-md w-full animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-pyra-muted hover:text-pyra-ink transition-colors"
        >
          <X size={20} />
        </button>

        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-accent-gradient rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="text-white" size={24} />
          </div>
          <h2 className="font-heading text-2xl font-bold text-pyra-ink mb-2">
            Join the Waitlist
          </h2>
          <p className="text-pyra-muted">
            Be the first to know when Pyra launches in Southeast Asia.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-pyra-bg border-white/20 text-pyra-ink placeholder:text-pyra-muted"
            required
          />
          
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-accent-gradient btn-sheen font-medium"
          >
            {isLoading ? 'Joining...' : 'Join the Waitlist'}
          </Button>
        </form>

        <p className="text-xs text-pyra-muted text-center mt-4">
          We respect your privacy. No spam, ever.
        </p>
      </div>
    </div>
  );
}