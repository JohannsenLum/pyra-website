import { Linkedin, ArrowRight, Users, Target, Shield, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { AboutHeroBackground } from '@/components/AboutHeroBackground';

export default function About() {
  const founders = [
    {
      name: 'sanjeev',
      role: 'Founder & CEO',
      bio: 'Product & strategy leader with fintech partnerships expertise. Passionate about redefining credit and financial habits in Southeast Asia.',
      linkedin: 'https://www.linkedin.com/in/sanjeev2710'
    },
    {
      name: 'flo',
      role: 'CFO & COO',
      bio: 'Capital strategy and unit economics specialist with compliance rigor. Drives sustainable growth across Southeast Asia.',
      linkedin: 'http://www.linkedin.com/in/florian-gache'
    },
    {
      name: 'basil',
      role: 'CTO',
      bio: 'Operations and partner delivery expert with deep member support experience. Builds reliable financial rails.',
      linkedin: 'https://www.linkedin.com/in/basil-boh-81933b18b/'
    },
  ];

  // Animation variants
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
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  const heroVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  const founderCardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    hover: { scale: 1.05 }
  };

  return (
    <div className="pt-16">
      {/* Hero */}
      <motion.section
        className="py-32 relative overflow-hidden"
        style={{ backgroundColor: '#0A0A0A' }}
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Animated Background */}
        <AboutHeroBackground />

        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8"
              variants={itemVariants}
            >
              About <span className="text-gradient">Pyra</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Redefining Credit and Financial Habits in Southeast Asia
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Founding Story */}
      <motion.section
        className="py-32 relative overflow-hidden"
        style={{ backgroundColor: '#0F0F0F' }}
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Premium Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-transparent to-cyan-900/20" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-amber-400/10 to-yellow-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />

        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="font-heading text-4xl md:text-5xl font-bold text-white mb-8 text-center"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Our Story
            </motion.h2>

            <motion.div
              className="bg-premium-glass/90 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/20"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.p
                className="text-lg text-white/90 leading-relaxed mb-6"
                variants={itemVariants}
              >
                Pyra was founded to build an ecosystem where financial discipline is rewarded, trust is monetized,
                and users ascend aspirational tiers of finance and lifestyle. We saw disciplined
                individuals penalized by fragmented tools and generic rewards, while irresponsible spending
                was celebrated with points and perks.
              </motion.p>

              <motion.p
                className="text-lg text-white/90 leading-relaxed mb-6"
                variants={itemVariants}
              >
                So we built a behavior-first ecosystem where your habits unlock access. Where building
                credit responsibly, managing expenses wisely, and making smart financial choices creates real status
                and meaningful benefits.
              </motion.p>

              <motion.p
                className="text-lg text-white/90 leading-relaxed"
                variants={itemVariants}
              >
                Starting in Southeast Asia, we're creating the financial super-app that rewards what
                matters: discipline, consistency, and long-term thinking.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Mission */}
      <motion.section
        className="py-32 relative overflow-hidden"
        style={{ backgroundColor: '#111315' }}
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Premium Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-cyan-900/20" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />

        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="font-heading text-4xl md:text-5xl font-bold text-white mb-4"
              variants={itemVariants}
            >
              Mission & Vision
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-premium-glass/90 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-cyan-400/40 transition-all duration-500 hover:scale-105"
              variants={itemVariants}
            >
              <h3 className="font-heading text-2xl font-semibold text-white mb-6">
                Our Vision
              </h3>
              <p className="text-white/90 leading-relaxed">
                A financial super-app for Southeast Asia that rewards good habits with real access.
                Where discipline becomes the new currency and financial responsibility opens doors
                to premium experiences and opportunities.
              </p>
            </motion.div>

            <motion.div
              className="bg-premium-glass/90 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-emerald-400/40 transition-all duration-500 hover:scale-105"
              variants={itemVariants}
            >
              <h3 className="font-heading text-2xl font-semibold text-white mb-6">
                Our Mission
              </h3>
              <p className="text-white/90 leading-relaxed">
                To build an ecosystem where financial discipline is rewarded, trust is monetized,
                and users ascend aspirational tiers of finance and lifestyle. We transform credit
                behavior into a valuable asset.
              </p>
            </motion.div>
          </motion.div>



          <motion.div
            className="mt-12 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h4
              className="font-heading text-xl font-semibold text-white mb-4"
              variants={itemVariants}
            >
              Our Values
            </motion.h4>
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              variants={containerVariants}
            >
              {[
                'Member-first clarity',
                'Privacy by default',
                'Trust you earn',
                'Do the boring things beautifully'
              ].map((value, i) => (
                <motion.div
                  key={i}
                  className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 hover:border-white/40 transition-all duration-300"
                  variants={itemVariants}
                >
                  <span className="text-white/90">{value}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Founders */}
      <motion.section
        className="py-32 relative overflow-hidden"
        style={{ backgroundColor: '#0A0A0A' }}
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Premium Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-transparent to-teal-900/20" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-emerald-400/10 to-green-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-br from-teal-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />

        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="font-heading text-4xl md:text-5xl font-bold text-white mb-4"
              variants={itemVariants}
            >
              Meet the Founders
            </motion.h2>
            <motion.p
              className="text-xl text-white/80"
              variants={itemVariants}
            >
              Building the future of financial discipline across Southeast Asia
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                className="bg-premium-glass/90 backdrop-blur-xl rounded-3xl p-6 text-center border border-white/20 hover:border-cyan-400/40 transition-all duration-500 hover:scale-105 group flex flex-col h-full"
                variants={founderCardVariants}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                  <img
                    src={`/${founder.name.toLowerCase()}.jpg`}
                    alt={`${founder.name} - ${founder.role}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="font-heading text-xl font-semibold text-white mb-1">
                  {founder.name.charAt(0).toUpperCase() + founder.name.slice(1)}
                </h3>
                <p className="text-cyan-400 font-medium mb-4">{founder.role}</p>

                <p className="text-sm text-white/90 leading-relaxed mb-4 flex-grow">
                  {founder.bio}
                </p>

                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-cyan-400 hover:text-white transition-colors mt-auto"
                >
                  <Linkedin size={16} className="mr-1" />
                  LinkedIn
                </a>
              </motion.div>
            ))}
          </motion.div>


        </div>
      </motion.section>
    </div>
  );
}