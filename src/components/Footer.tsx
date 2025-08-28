import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-navy-700 border-t border-white/10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-accent-gradient rounded-sm flex items-center justify-center">
                <div className="w-4 h-4 bg-white/20 clip-triangle"></div>
              </div>
              <span className="font-heading font-bold text-xl text-pyra-ink">Pyra</span>
            </div>
            <p className="text-pyra-muted mb-4 max-w-md">
              The Credit Club of Southeast Asia. Where discipline becomes currency.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-pyra-muted hover:text-pyra-cyan transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-pyra-muted hover:text-pyra-cyan transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-pyra-muted hover:text-pyra-cyan transition-colors">
                <Github size={20} />
              </a>
              <a href="mailto:hello@pyra.club" className="text-pyra-muted hover:text-pyra-cyan transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-heading font-semibold text-pyra-ink mb-4">Product</h4>
            <nav className="space-y-2">
              <Link to="/product" className="block text-pyra-muted hover:text-pyra-cyan transition-colors">
                Features
              </Link>
              <Link to="/clubs" className="block text-pyra-muted hover:text-pyra-cyan transition-colors">
                Clubs
              </Link>
              <a href="/investor-one-pager.pdf" className="block text-pyra-muted hover:text-pyra-cyan transition-colors">
                Investor Deck
              </a>
              <a href="/media-kit.zip" className="block text-pyra-muted hover:text-pyra-cyan transition-colors">
                Media Kit
              </a>
            </nav>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading font-semibold text-pyra-ink mb-4">Company</h4>
            <nav className="space-y-2">
              <Link to="/about" className="block text-pyra-muted hover:text-pyra-cyan transition-colors">
                About
              </Link>
              <Link to="/careers" className="block text-pyra-muted hover:text-pyra-cyan transition-colors">
                Careers
              </Link>
              <Link to="/blog" className="block text-pyra-muted hover:text-pyra-cyan transition-colors">
                Blog
              </Link>
              <Link to="/contact" className="block text-pyra-muted hover:text-pyra-cyan transition-colors">
                Contact
              </Link>
              <Link to="/legal/privacy" className="block text-pyra-muted hover:text-pyra-cyan transition-colors">
                Privacy
              </Link>
              <Link to="/legal/terms" className="block text-pyra-muted hover:text-pyra-cyan transition-colors">
                Terms
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-pyra-muted text-sm">
            <p>© 2024 Pyra. All rights reserved.</p>
            <p className="mt-1">Singapore • BLOCK71 Incubator Applicant</p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <div className="bg-glass rounded-lg px-4 py-2 text-xs text-pyra-muted">
              🚀 BLOCK71 Incubator Applicant
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}