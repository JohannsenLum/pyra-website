import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Animation variants
  const footerVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.footer
      className="bg-background border-t border-white/10"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Logo & Description */}
          <motion.div
            className="md:col-span-2"
            variants={itemVariants}
          >
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-pyra-cyan to-pyra-indigo rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="text-white font-bold text-xl">Pyra</span>
            </Link>
            <p className="text-white/60 max-w-md leading-relaxed">
              Redefining credit and financial habits in Southeast Asia.
              Build trust, ascend through tiers, unlock your financial potential.
            </p>
          </motion.div>

          {/* Product Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/clubs" className="text-white/60 hover:text-yellow-400 transition-colors">
                  Pyra Clubs
                </Link>
              </li>
              <li>
                <Link to="/product" className="text-white/60 hover:text-yellow-400 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white/60 hover:text-yellow-400 transition-colors">
                  Join Waitlist
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-white/60 hover:text-yellow-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-white/60 hover:text-yellow-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/60 hover:text-yellow-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/60 hover:text-yellow-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p
            className="text-white/60 text-sm"
            variants={itemVariants}
          >
            © {currentYear} Pyra. All rights reserved.
          </motion.p>

          <motion.div
            className="flex space-x-6 mt-4 md:mt-0"
            variants={itemVariants}
          >
            <Link to="/privacy" className="text-white/60 hover:text-yellow-400 transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white/60 hover:text-yellow-400 transition-colors text-sm">
              Terms of Service
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
}