import { CreditCard, Shield, TrendingUp, Eye, Clock, AlertTriangle } from 'lucide-react';
import { DIChart } from '@/components/DIChart';
import { useInView } from '@/hooks/useInView';

export default function Product() {
  const [diRef] = useInView();
  const [clubsRef] = useInView();

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-deep">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl font-bold text-pyra-ink mb-6">
            Built for <span className="text-gradient">Southeast Asia</span>
          </h1>
          <p className="text-xl text-pyra-muted max-w-3xl mx-auto mb-8">
            Privacy-first financial tools that turn discipline into currency. 
            Pay better, rise faster, live smarter.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: Shield, text: 'Privacy-first' },
              { icon: TrendingUp, text: 'Status you earn' },
              { icon: CreditCard, text: 'Southeast Asia focus' },
            ].map((badge, i) => (
              <div key={i} className="bg-glass rounded-full px-6 py-3 flex items-center space-x-2">
                <badge.icon size={16} className="text-pyra-cyan" />
                <span className="text-pyra-muted">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DI Section */}
      <section ref={diRef} className="py-24 bg-pyra-bg">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-pyra-ink mb-4">
              The Discipline Index (DI)
            </h2>
            <p className="text-xl text-pyra-muted max-w-3xl mx-auto">
              Your financial habits, quantified. The DI tracks your payment behavior, 
              utilization patterns, and financial discipline to unlock status and benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-heading text-2xl font-semibold text-pyra-ink mb-6">
                What builds your DI score:
              </h3>
              
              <div className="space-y-4">
                {[
                  { icon: Clock, title: 'On-time Ratio', desc: 'Recency-weighted payment timing' },
                  { icon: TrendingUp, title: 'Payment Speed', desc: 'Days from statement to payment' },
                  { icon: CreditCard, title: 'Utilization Bands', desc: 'Credit usage patterns and volatility' },
                  { icon: Shield, title: 'Autopay Adoption', desc: 'Automated payment setup' },
                  { icon: AlertTriangle, title: 'Interest Avoidance', desc: 'Avoiding fees and interest charges' },
                  { icon: Eye, title: 'Dispute Patterns', desc: 'Low chargeback frequency' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-accent-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-white" size={16} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-pyra-ink">{item.title}</h4>
                      <p className="text-pyra-muted text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <DIChart />
            </div>
          </div>
        </div>
      </section>

      {/* Clubs Preview */}
      <section ref={clubsRef} className="py-24 bg-navy-700">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl font-bold text-pyra-ink mb-16">
            The Clubs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Spark',
                subtitle: 'Foundation',
                features: ['Unified bill pay', 'Savings insights', 'First streaks'],
                gradient: 'from-orange-500 to-red-500'
              },
              {
                name: 'Elevate',
                subtitle: 'Ascent',
                features: ['Earned wage access', 'Micro-savings', 'Subscription financing'],
                gradient: 'from-blue-500 to-purple-500'
              },
              {
                name: 'Black',
                subtitle: 'Apex',
                features: ['Premium credit lines', 'Luxury marketplace', 'Priority wealth access'],
                gradient: 'from-gray-700 to-black'
              }
            ].map((club, index) => (
              <div key={club.name} className="bg-glass rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${club.gradient} flex items-center justify-center`}>
                  <div className="w-8 h-8 bg-white/20 clip-triangle" />
                </div>
                
                <h3 className="font-heading text-2xl font-bold text-pyra-ink mb-2">
                  {club.name}
                </h3>
                <p className="text-pyra-muted mb-6">{club.subtitle}</p>
                
                <ul className="space-y-2 text-sm text-pyra-muted">
                  {club.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-pyra-cyan rounded-full" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <p className="text-pyra-muted">
              Learn more about club requirements and benefits →{' '}
              <a href="/clubs" className="text-pyra-cyan hover:underline">
                View all clubs
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}