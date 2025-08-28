import { CreditCard, Shield, TrendingUp, Users, ArrowRight, Download } from 'lucide-react';
import { Hero } from '@/components/Hero';
import { FeatureCard } from '@/components/FeatureCard';
import { Button } from '@/components/ui/button';
import { useInView } from '@/hooks/useInView';

interface HomeProps {
  onOpenWaitlist: () => void;
}

const features = [
  {
    icon: CreditCard,
    title: 'Unified Card Bill Pay',
    description: 'Link all your cards, pay with one click, and auto-sweep to full payment. Never juggle multiple apps again.'
  },
  {
    icon: Shield,
    title: 'Late-Fee Shield',
    description: 'Proactive reminders, predicted due dates, and grace period guidance. Never pay late fees again.'
  },
  {
    icon: TrendingUp,
    title: 'Hidden-Charge Detection',
    description: 'Get alerts for FX markups, duplicate charges, and interest projections. Stay informed, pay smart.'
  },
  {
    icon: Users,
    title: 'Clubs You Earn',
    description: 'Rise from Spark to Elevate to Black through the Discipline Index. Status based on financial habits.'
  }
];

export default function Home({ onOpenWaitlist }: HomeProps) {
  const [featuresRef] = useInView();
  const [flywheelRef] = useInView();
  const [investorRef] = useInView();

  return (
    <div>
      <Hero onOpenWaitlist={onOpenWaitlist} />
      
      {/* Features Section */}
      <section id="features" ref={featuresRef} className="py-24 bg-navy-700">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-pyra-ink mb-4">
              Financial discipline, <span className="text-gradient">rewarded</span>
            </h2>
            <p className="text-xl text-pyra-muted max-w-2xl mx-auto">
              Turn good habits into real benefits with tools designed for Southeast Asia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Behavior Flywheel */}
      <section ref={flywheelRef} className="py-24 bg-pyra-bg">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl font-bold text-pyra-ink mb-8">
            Pay → Earn → Repeat
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-gradient rounded-full flex items-center justify-center mb-4 mx-auto">
                  <CreditCard className="text-white" size={24} />
                </div>
                <p className="text-pyra-muted font-semibold">Pay Well</p>
              </div>
              
              <ArrowRight className="text-pyra-cyan" size={24} />
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-gradient rounded-full flex items-center justify-center mb-4 mx-auto">
                  <TrendingUp className="text-white" size={24} />
                </div>
                <p className="text-pyra-muted font-semibold">Earn Status</p>
              </div>
              
              <ArrowRight className="text-pyra-cyan" size={24} />
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-gradient rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Users className="text-white" size={24} />
                </div>
                <p className="text-pyra-muted font-semibold">Unlock Access</p>
              </div>
            </div>

            {/* Progress Pyramid */}
            <div className="relative">
              <div className="w-full h-4 bg-navy-700 rounded-full overflow-hidden">
                <div className="h-full bg-accent-gradient w-3/4 rounded-full animate-gradient" />
              </div>
              <p className="text-sm text-pyra-muted mt-2">
                Your discipline builds your future
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investor Section */}
      <section ref={investorRef} className="py-24 bg-navy-700">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl font-bold text-pyra-ink mb-8">
              Building the future of financial status
            </h2>
            
            <p className="text-lg text-pyra-muted mb-12 leading-relaxed">
              Pyra transforms financial responsibility into aspiration through behavior-first status tiers. 
              Our revenue model combines partner revenue sharing, premium Black subscriptions, and future 
              credit margin opportunities—creating sustainable growth while rewarding disciplined members.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline"
                className="border-white/20 text-pyra-ink hover:bg-white/10"
                asChild
              >
                <a href="/investor-one-pager.pdf" download>
                  <Download className="mr-2" size={20} />
                  Investor One-Pager (PDF)
                </a>
              </Button>
              
              <Button 
                variant="outline"
                className="border-white/20 text-pyra-ink hover:bg-white/10"
                asChild
              >
                <a href="/media-kit.zip" download>
                  <Download className="mr-2" size={20} />
                  Media Kit (ZIP)
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}