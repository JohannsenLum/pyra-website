import { ArrowRight, Shield, TrendingUp, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useInView } from '@/hooks/useInView';

interface HeroProps {
  onOpenWaitlist: () => void;
}

export function Hero({ onOpenWaitlist }: HeroProps) {
  const [heroRef] = useInView();

  return (
    <section 
      ref={heroRef}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-deep"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-accent-gradient opacity-10" />
      
      {/* Triangle Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="triangle-particle absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-pyra-ink mb-6">
            Pyra — The Credit Club of{' '}
            <span className="text-gradient">Southeast Asia</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-pyra-muted mb-8 max-w-3xl mx-auto leading-relaxed">
            Pay every card in one place, avoid hidden charges, and earn your way from Spark to Black 
            with habits that build your future.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={onOpenWaitlist}
              size="lg"
              className="bg-accent-gradient btn-sheen font-semibold px-8 py-3 text-lg"
            >
              Join the Waitlist
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-white/20 text-pyra-ink hover:bg-white/10 px-8 py-3 text-lg"
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See the Product
            </Button>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              { icon: TrendingUp, text: 'Pre-Seed' },
              { icon: Shield, text: 'BLOCK71 Incubator Applicant' },
              { icon: Users, text: 'Fintech • SEA' },
              { icon: Shield, text: 'Privacy-First' },
            ].map((badge, i) => (
              <div
                key={i}
                className="bg-glass rounded-full px-4 py-2 flex items-center space-x-2"
              >
                <badge.icon size={16} className="text-pyra-cyan" />
                <span className="text-sm text-pyra-muted">{badge.text}</span>
              </div>
            ))}
          </div>

          {/* Proof Bar */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-pyra-muted">
              <span className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-pyra-cyan rounded-full" />
                <span>Never pay a late fee again</span>
              </span>
              <span className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-pyra-cyan rounded-full" />
                <span>Transparent charges</span>
              </span>
              <span className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-pyra-cyan rounded-full" />
                <span>Status you earn</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}