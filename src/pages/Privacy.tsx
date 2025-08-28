import { Shield, Eye, Lock, Database } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

export default function Privacy() {
  const [heroRef] = useInView<HTMLElement>();
  const [contentRef] = useInView<HTMLElement>();

  return (
    <div className="pt-16">
      {/* Hero */}
      <section ref={heroRef} className="py-24 bg-gradient-deep">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl font-bold text-pyra-ink mb-6">
            Privacy <span className="text-gradient">Policy</span>
          </h1>
          <p className="text-xl text-pyra-muted max-w-3xl mx-auto">
            Your financial data deserves the highest level of protection. 
            Here's how we keep your information secure and private.
          </p>
        </div>
      </section>

      {/* Content */}
      <section ref={contentRef} className="py-24 bg-pyra-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Privacy Principles */}
          <div className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-pyra-ink mb-8 text-center">
              Our Privacy Principles
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {[
                {
                  icon: Shield,
                  title: 'Privacy by Default',
                  description: 'Your data is protected from the ground up with zero-knowledge architecture'
                },
                {
                  icon: Eye,
                  title: 'Transparent Processing',
                  description: 'Clear explanations of how and why we use your financial information'
                },
                {
                  icon: Lock,
                  title: 'Secure Storage',
                  description: 'Bank-grade encryption and security measures for all data handling'
                },
                {
                  icon: Database,
                  title: 'Minimal Collection',
                  description: 'We only collect data necessary for Discipline Index calculation and services'
                }
              ].map((principle, index) => (
                <div key={index} className="bg-glass rounded-2xl p-6">
                  <div className="w-12 h-12 bg-accent-gradient rounded-xl flex items-center justify-center mb-4">
                    <principle.icon className="text-white" size={20} />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-pyra-ink mb-3">
                    {principle.title}
                  </h3>
                  <p className="text-pyra-muted">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Legal Content */}
          <div className="bg-glass rounded-2xl p-8 lg:p-12 space-y-8">
            <div>
              <h2 className="font-heading text-2xl font-semibold text-pyra-ink mb-4">
                Information We Collect
              </h2>
              <p className="text-pyra-muted mb-4">
                To provide our Discipline Index and club services, we collect:
              </p>
              <ul className="space-y-2 text-pyra-muted">
                <li>• Payment history and timing from connected accounts</li>
                <li>• Credit utilization patterns and account balances</li>
                <li>• Bill payment behavior and autopay preferences</li>
                <li>• Transaction categorization for fee detection</li>
                <li>• Contact information for account management</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-pyra-ink mb-4">
                How We Use Your Data
              </h2>
              <p className="text-pyra-muted mb-4">
                Your financial data is used exclusively to:
              </p>
              <ul className="space-y-2 text-pyra-muted">
                <li>• Calculate your Discipline Index score</li>
                <li>• Provide bill payment and fee protection services</li>
                <li>• Determine club eligibility and benefits</li>
                <li>• Detect hidden charges and optimize payments</li>
                <li>• Improve our services and risk models</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-pyra-ink mb-4">
                Data Sharing & Third Parties
              </h2>
              <p className="text-pyra-muted mb-4">
                We never sell your personal data. Limited sharing occurs only for:
              </p>
              <ul className="space-y-2 text-pyra-muted">
                <li>• Partner banks and financial institutions (for approved club benefits)</li>
                <li>• Payment processors (for transaction execution)</li>
                <li>• Regulatory compliance and legal requirements</li>
                <li>• Aggregated, anonymized insights (no personal identification)</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-pyra-ink mb-4">
                Your Rights & Controls
              </h2>
              <p className="text-pyra-muted mb-4">
                You have complete control over your data:
              </p>
              <ul className="space-y-2 text-pyra-muted">
                <li>• Access and download all your data anytime</li>
                <li>• Correct inaccurate information instantly</li>
                <li>• Delete your account and data permanently</li>
                <li>• Opt out of marketing communications</li>
                <li>• Control which accounts are connected</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-pyra-ink mb-4">
                Security Measures
              </h2>
              <p className="text-pyra-muted">
                We implement bank-grade security including end-to-end encryption, 
                multi-factor authentication, regular security audits, and compliance 
                with international financial data protection standards.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="mt-12 bg-glass rounded-2xl p-8 text-center">
            <h3 className="font-heading text-xl font-semibold text-pyra-ink mb-4">
              Questions About Privacy?
            </h3>
            <p className="text-pyra-muted mb-4">
              Contact our Data Protection Officer at privacy@pyra.club
            </p>
            <p className="text-xs text-pyra-muted">
              Last updated: March 2024 • This policy may be updated as we enhance our services
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}