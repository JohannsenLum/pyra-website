import { Linkedin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { AboutHeroBackground } from '@/components/AboutHeroBackground';

export default function About() {
  const founders = [
    {
      name: 'Sanjeev',
      role: 'CEO',
      bio: 'Product & strategy leader with fintech partnerships expertise. Passionate about redefining credit and financial habits in Southeast Asia.',
      linkedin: '#'
    },
    {
      name: 'Flo',
      role: 'CFO',
      bio: 'Capital strategy and unit economics specialist with compliance rigor. Drives sustainable growth across Southeast Asia.',
      linkedin: '#'
    },
    {
      name: 'Basil',
      role: 'COO',
      bio: 'Operations and partner delivery expert with deep member support experience. Builds reliable financial rails.',
      linkedin: '#'
    },
    {
      name: 'Johannsen',
      role: 'CTO',
      bio: 'Platform architecture and data privacy innovator. Creates secure-by-design financial infrastructure and trust models.',
      linkedin: '#'
    }
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
        className="py-24 bg-gradient-deep relative overflow-hidden"
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
              className="font-heading text-5xl font-bold text-pyra-ink mb-6"
              variants={itemVariants}
            >
              About <span className="text-gradient">Pyra</span>
            </motion.h1>
            <motion.p
              className="text-xl text-pyra-muted max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Redefining Credit and Financial Habits in Southeast Asia
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Founding Story */}
      <motion.section
        className="py-24 bg-pyra-bg"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="font-heading text-4xl font-bold text-pyra-ink mb-8 text-center"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Our Story
            </motion.h2>

            <motion.div
              className="bg-glass rounded-2xl p-8 lg:p-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.p
                className="text-lg text-pyra-muted leading-relaxed mb-6"
                variants={itemVariants}
              >
                Pyra was founded to build an ecosystem where financial discipline is rewarded, trust is monetized,
                and users ascend aspirational tiers of finance and lifestyle. We saw disciplined
                individuals penalized by fragmented tools and generic rewards, while irresponsible spending
                was celebrated with points and perks.
              </motion.p>

              <motion.p
                className="text-lg text-pyra-muted leading-relaxed mb-6"
                variants={itemVariants}
              >
                So we built a behavior-first ecosystem where your habits unlock access. Where building
                credit responsibly, managing expenses wisely, and making smart financial choices creates real status
                and meaningful benefits.
              </motion.p>

              <motion.p
                className="text-lg text-pyra-muted leading-relaxed"
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
        className="py-24 bg-navy-700"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="font-heading text-4xl font-bold text-pyra-ink mb-4"
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
              className="bg-glass rounded-2xl p-8"
              variants={itemVariants}
            >
              <h3 className="font-heading text-2xl font-semibold text-pyra-ink mb-6">
                Our Vision
              </h3>
              <p className="text-pyra-muted leading-relaxed">
                A financial super-app for Southeast Asia that rewards good habits with real access.
                Where discipline becomes the new currency and financial responsibility opens doors
                to premium experiences and opportunities.
              </p>
            </motion.div>

            <motion.div
              className="bg-glass rounded-2xl p-8"
              variants={itemVariants}
            >
              <h3 className="font-heading text-2xl font-semibold text-pyra-ink mb-6">
                Our Mission
              </h3>
              <p className="text-pyra-muted leading-relaxed">
                To build an ecosystem where financial discipline is rewarded, trust is monetized,
                and users ascend aspirational tiers of finance and lifestyle. We transform credit
                behavior into a valuable asset.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-12 bg-glass rounded-2xl p-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              className="font-heading text-2xl font-semibold text-pyra-ink mb-6 text-center"
              variants={itemVariants}
            >
              Year-1 Goals
            </motion.h3>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <div className="text-3xl font-bold text-gradient mb-2">100k</div>
                <p className="text-pyra-muted">Disciplined members in first market</p>
              </motion.div>
              <motion.div variants={itemVariants}>
                <div className="text-3xl font-bold text-gradient mb-2">50%</div>
                <p className="text-pyra-muted">Autopay adoption among active bill payers</p>
              </motion.div>
              <motion.div variants={itemVariants}>
                <div className="text-3xl font-bold text-gradient mb-2">Launch</div>
                <p className="text-pyra-muted">Pyra Clubs with unified financial management</p>
              </motion.div>
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
              className="font-heading text-xl font-semibold text-pyra-ink mb-4"
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
                  className="bg-pyra-bg rounded-full px-6 py-3"
                  variants={itemVariants}
                >
                  <span className="text-pyra-muted">{value}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Founders */}
      <motion.section
        className="py-24 bg-pyra-bg"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="font-heading text-4xl font-bold text-pyra-ink mb-4"
              variants={itemVariants}
            >
              Meet the Founders
            </motion.h2>
            <motion.p
              className="text-xl text-pyra-muted"
              variants={itemVariants}
            >
              Building the future of financial discipline across Southeast Asia
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                className="bg-glass rounded-2xl p-6 text-center"
                variants={founderCardVariants}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="w-24 h-24 bg-accent-gradient rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {founder.name.charAt(0)}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-semibold text-pyra-ink mb-1">
                  {founder.name}
                </h3>
                <p className="text-pyra-cyan font-medium mb-4">{founder.role}</p>

                <p className="text-sm text-pyra-muted leading-relaxed mb-4">
                  {founder.bio}
                </p>

                <a
                  href={founder.linkedin}
                  className="inline-flex items-center text-pyra-cyan hover:text-pyra-ink transition-colors"
                >
                  <Linkedin size={16} className="mr-1" />
                  LinkedIn
                </a>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-16 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-glass rounded-2xl p-8 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              <h3 className="font-heading text-2xl font-semibold text-pyra-ink mb-4">
                Join Our Team
              </h3>
              <p className="text-pyra-muted mb-6">
                We're looking for exceptional people who share our vision of making
                financial discipline rewarding and trust monetizable.
              </p>
              <motion.div
                variants={buttonVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <Button
                  className="bg-accent-gradient btn-sheen font-medium"
                  asChild
                >
                  <a href="/careers">
                    View Open Roles
                    <ArrowRight className="ml-2" size={16} />
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}