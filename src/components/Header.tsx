import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/product', label: 'Product' },
    { href: '/clubs', label: 'Clubs' },
    { href: '/careers', label: 'Careers' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' }
  ];

  // Animation variants
  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto" }
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-white/10"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            variants={navItemVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-pyra-cyan to-pyra-indigo rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="text-white font-bold text-xl">Pyra</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            className="hidden md:flex items-center space-x-8"
            variants={navItemVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-colors ${location.pathname === item.href
                    ? 'text-yellow-400'
                    : 'text-white/80 hover:text-white'
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </motion.nav>

          {/* CTA Button */}
          <motion.div
            variants={navItemVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="hidden md:block"
          >
            <Button
              className="btn-premium font-medium"
              asChild
            >
              <Link to="/">
                Join Waitlist
              </Link>
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            variants={navItemVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:hidden p-2 text-white hover:text-yellow-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden border-t border-white/10"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`block px-4 py-2 text-sm font-medium transition-colors ${location.pathname === item.href
                      ? 'text-yellow-400'
                      : 'text-white/80 hover:text-white'
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4 pt-4">
                <Button
                  className="w-full btn-premium font-medium"
                  asChild
                >
                  <Link to="/" onClick={() => setIsMenuOpen(false)}>
                    Join Waitlist
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}