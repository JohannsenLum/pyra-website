import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Product', href: '/product' },
  { label: 'Clubs', href: '/clubs' },
  { label: 'About', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export function Header({ onOpenWaitlist }: { onOpenWaitlist: () => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-pyra-bg/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-accent-gradient rounded-sm flex items-center justify-center">
              <div className="w-4 h-4 bg-white/20 clip-triangle"></div>
            </div>
            <span className="font-heading font-bold text-xl text-pyra-ink">Pyra</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-pyra-cyan ${
                  location.pathname === item.href
                    ? 'text-pyra-cyan'
                    : 'text-pyra-muted'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Button 
              onClick={onOpenWaitlist}
              className="bg-accent-gradient btn-sheen font-medium px-6"
            >
              Join the Waitlist
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-pyra-ink"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'text-pyra-cyan'
                      : 'text-pyra-muted'
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button 
                onClick={() => {
                  onOpenWaitlist();
                  setMobileOpen(false);
                }}
                className="bg-accent-gradient btn-sheen font-medium w-full mt-4"
              >
                Join the Waitlist
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}