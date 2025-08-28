import { FileText, AlertTriangle, CreditCard, Globe } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

export default function Terms() {
  const [heroRef] = useInView<HTMLElement>();
  const [contentRef] = useInView<HTMLElement>();

  return (
    <div className="pt-16">
      {/* Hero */}
      <section ref={heroRef} className="py-24 bg-gradient-deep">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl font-bold text-pyra-ink mb-6">
            Terms of <span className="text-gradient">Use</span>
          </h1>
          <p className="text-xl text-pyra-muted max-w-3xl mx-auto">
            Clear, fair terms for using Pyra's financial services and 
            club membership platform.
          </p>
        </div>
      </section>

      {/* Important Notices */}
      <section className="py-16 bg-navy-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: AlertTriangle,
                title: 'Not a Credit Offer',
                description: 'Pyra club status does not guarantee credit approval or specific terms from partner institutions.'
              },
              {
                icon: Globe,
                title: 'Market Availability',
                description: 'Services are currently available in select Southeast Asian markets. Availability varies by region.'
              },
              {
                icon: CreditCard,
                title: 'Partner Services',
                description: 'Club benefits are provided by partner institutions and subject to their terms and availability.'
              },
              {
                icon: FileText,
                title: 'Regulatory Compliance',
                description: 'All services comply with local financial regulations and consumer protection laws.'
              }
            ].map((notice, index) => (
              <div key={index} className="bg-glass rounded-2xl p-6">
                <div className="w-10 h-10 bg-accent-gradient rounded-lg flex items-center justify-center mb-4">
                  <notice.icon className="text-white" size={18} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-pyra-ink mb-2">
                  {notice.title}
                </h3>
                <p className="text-pyra-muted text-sm">
                  {notice.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section ref={contentRef} className="py-24 bg-pyra-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-glass rounded-2xl p-8 lg:p-12 space-y-8">
            <div>
              <h2 className="font-heading text-2xl font-semibold text-pyra-ink mb-4">
                Acceptance of Terms
              </h2>
              <p className="text-pyra-muted">
                By accessing or using Pyra's services, you agree to be bound by these Terms of Use 
                and our Privacy Policy. If you disagree with any part of these terms, you may not 
                access the service.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-pyra-ink mb-4">
                Service Description
              </h2>
              <p className="text-pyra-muted mb-4">
                Pyra provides:
              </p>
              <ul className="space-y-2 text-pyra-muted">
                <li>• Unified credit card bill payment services</li>
                <li>• Discipline Index (DI) scoring based on financial behavior</li>
                <li>• Club membership tiers (Spark, Elevate, Black)</li>
                <li>• Hidden charge detection and fee protection</li>
                <li>• Access to partner financial services and benefits</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-pyra-ink mb-4">
                User Responsibilities
              </h2>
              <p className="text-pyra-muted mb-4">
                Users agree to:
              </p>
              <ul className="space-y-2 text-pyra-muted">
                <li>• Provide accurate and up-to-date account information</li>
                <li>• Maintain the security of login credentials</li>
                <li>• Use the service in compliance with applicable laws</li>
                <li>• Not attempt to manipulate DI scores through fraudulent means</li>
                <li>• Notify us immediately of any unauthorized account access</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-pyra-ink mb-4">
                Discipline Index & Club Status
              </h2>
              <p className="text-pyra-muted mb-4">
                DI scores are calculated based on financial behavior patterns including:
              </p>
              <ul className="space-y-2 text-pyra-muted">
                <li>• Payment timing and consistency</li>
                <li>• Credit utilization patterns</li>
                <li>• Account management practices</li>
                <li>• Fee avoidance and financial optimization</li>
              </ul>
              <p className="text-pyra-muted mt-4">
                Club status is non-transferable and subject to ongoing behavior assessment. 
                Benefits may vary by market and partner availability.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-pyra-ink mb-4">
                Financial Disclaimer
              </h2>
              <p className="text-pyra-muted">
                Pyra is not a bank, credit provider, or financial advisor. Club membership 
                does not guarantee credit approval, specific rates, or access to financial 
                products. All financial services are provided by licensed partner institutions 
                subject to their own terms and conditions.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-pyra-ink mb-4">
                Limitation of Liability
              </h2>
              <p className="text-pyra-muted">
                Pyra's liability is limited to the maximum extent permitted by law. We are not 
                responsible for decisions made by partner institutions, market availability changes, 
                or indirect damages arising from service use.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold text-pyra-ink mb-4">
                Marketing Consent
              </h2>
              <p className="text-pyra-muted">
                By using our services, you consent to receive communications about your account, 
                club status updates, and relevant financial opportunities. You may opt out of 
                marketing communications at any time while retaining access to essential service notifications.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="mt-12 bg-glass rounded-2xl p-8 text-center">
            <h3 className="font-heading text-xl font-semibold text-pyra-ink mb-4">
              Questions About These Terms?
            </h3>
            <p className="text-pyra-muted mb-4">
              Contact our legal team at legal@pyra.club
            </p>
            <p className="text-xs text-pyra-muted">
              Last updated: March 2024 • These terms may be updated as we expand our services
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}