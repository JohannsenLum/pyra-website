import { useState } from 'react';
import { ClubBadge } from '@/components/ClubBadge';
import { TrendingUp, ArrowUp, RotateCcw } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

export default function Clubs() {
  const [activeClub, setActiveClub] = useState<'spark' | 'elevate' | 'black'>('elevate');
  const [clubsRef] = useInView();
  const [progressRef] = useInView();

  const clubs = [
    {
      tier: 'spark' as const,
      title: 'Spark Club',
      threshold: 'DI < 60 or thin credit file',
      features: [
        'Unified bill pay across all cards',
        'Basic savings insights and trends',
        'Payment streak tracking',
        'Late-fee prevention alerts',
        'Foundation financial education'
      ]
    },
    {
      tier: 'elevate' as const,
      title: 'Elevate Club',
      threshold: 'DI 60-84 (consistent habits)',
      features: [
        'Everything in Spark, plus:',
        'Earned wage access for bill payments',
        'Automated micro-savings & round-ups',
        'Subscription financing options',
        'Priority customer support',
        'Advanced spending analytics'
      ]
    },
    {
      tier: 'black' as const,
      title: 'Black Club',
      threshold: 'DI ≥ 85 for 3+ consecutive months',
      features: [
        'Everything in Elevate, plus:',
        'Premium credit lines (partner capital)',
        'Curated luxury marketplace access',
        'Priority insurance & wealth products',
        'Concierge financial services',
        'Exclusive member events'
      ]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 bg-gradient-deep">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl font-bold text-pyra-ink mb-6">
            Status You <span className="text-gradient">Earn</span>
          </h1>
          <p className="text-xl text-pyra-muted max-w-3xl mx-auto">
            Rise through the clubs based on your financial discipline. 
            No arbitrary spending requirements—just good habits, rewarded.
          </p>
        </div>
      </section>

      {/* Clubs Grid */}
      <section ref={clubsRef} className="py-24 bg-pyra-bg">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clubs.map((club) => (
              <div 
                key={club.tier}
                className="cursor-pointer"
                onClick={() => setActiveClub(club.tier)}
              >
                <ClubBadge
                  tier={club.tier}
                  title={club.title}
                  threshold={club.threshold}
                  features={club.features}
                  isActive={activeClub === club.tier}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Progress Demo */}
      <section ref={progressRef} className="py-24 bg-navy-700">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-pyra-ink mb-4">
              Level Up Your Status
            </h2>
            <p className="text-xl text-pyra-muted max-w-2xl mx-auto">
              See how good habits translate to club advancement
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-glass rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="font-heading text-2xl font-semibold text-pyra-ink mb-2">
                Recent DI Improvements
              </h3>
              <p className="text-pyra-muted">Your discipline in action</p>
            </div>

            <div className="space-y-4">
              {[
                { change: '+3 points', reason: '3 consecutive on-time payments', icon: TrendingUp },
                { change: '+2 points', reason: 'Utilization maintained under 30%', icon: ArrowUp },
                { change: '+1 point', reason: 'Autopay setup for new card', icon: RotateCcw },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-pyra-bg rounded-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-accent-gradient rounded-lg flex items-center justify-center">
                      <item.icon className="text-white" size={16} />
                    </div>
                    <span className="text-pyra-ink">{item.reason}</span>
                  </div>
                  <span className="text-pyra-cyan font-semibold">{item.change}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 text-center">
              <p className="text-sm text-pyra-muted mb-2">
                Current DI Score: <span className="text-pyra-cyan font-semibold">78</span>
              </p>
              <p className="text-xs text-pyra-muted">
                7 points away from Black Club
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Non-Punitive Messaging */}
      <section className="py-16 bg-pyra-bg">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-glass rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="font-heading text-xl font-semibold text-pyra-ink mb-4">
              No Penalties, Only Progress
            </h3>
            <p className="text-pyra-muted">
              Club status can only move up or stay stable. Temporary dips in DI don't 
              immediately affect your club—we understand life happens. Focus on building 
              good habits, and your status will follow.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}