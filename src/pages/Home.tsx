import { Button } from '@/components/ui/button';
import { Hero } from '@/components/Hero';
import { FeatureCard } from '@/components/FeatureCard';
import { WaitlistModal } from '@/components/WaitlistModal';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  TrendingUp,
  Shield,
  Users,
  Star,
  Zap,
  Crown,
  Target,
  Split,
  BarChart3,
  Wallet,
  Gift,
  Download,
} from 'lucide-react';

export function Home() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const onOpenWaitlist = () => setIsWaitlistOpen(true);
  const onCloseWaitlist = () => setIsWaitlistOpen(false);

  const allFeatures = [
    {
      icon: Target,
      title: 'Unified Credit Card Management',
      description: 'Single dashboard for all your credit cards with comprehensive analytics and insights.',
      club: 'Prime'
    },
    {
      icon: Shield,
      title: 'Hidden Fee Detection',
      description: 'AI-powered e-statement scanning to uncover hidden charges and save you money.',
      club: 'Prime'
    },
    {
      icon: Gift,
      title: 'Smart Reminders + Rewards',
      description: 'Timely alerts and personalized offers that reward your financial discipline.',
      club: 'Prime'
    },
    {
      icon: BarChart3,
      title: 'Holistic Expense Tracking',
      description: 'Track spending across both debit and credit for complete financial visibility.',
      club: 'Prime'
    },
    {
      icon: BarChart3,
      title: 'Expense Tracking',
      description: 'Build healthy spending habits with intuitive debit-first expense tracking tools.',
      club: 'Spark'
    },
    {
      icon: Split,
      title: 'Group Expense Management',
      description: 'Splitwise-style tools for managing shared expenses with friends and family.',
      club: 'Spark'
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const heroVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    hover: { scale: 1.05 }
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div>
      <Hero onOpenWaitlist={onOpenWaitlist} />

      {/* Founder Quote Section */}
      <motion.section
        className="py-16"
        style={{ backgroundColor: '#0A0A0A' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-25% 0px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              className="bg-premium-glass rounded-2xl p-8 md:p-12 border border-white/10 shimmer-border"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.blockquote
                className="text-xl md:text-2xl text-white mb-6 leading-relaxed text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-5% 0px" }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.2,
                      delayChildren: 0.2
                    }
                  }
                }}
              >
                {[
                  "Financial responsibility should feel aspirational.",
                  "Pyra turns disciplined habits into real advantages—",
                  "clear guidance today, premium access tomorrow."
                ].map((line, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-2"
                  >
                    {line}
                  </motion.div>
                ))}
              </motion.blockquote>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5% 0px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
              >
                <div className="text-lg text-white/80 font-medium">— Sanjeev, Co-Founder & CEO</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Mission & Introduction Section */}
      <motion.section
        className="py-16"
        style={{ backgroundColor: '#111315' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-25% 0px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10% 0px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.1
                  }
                }
              }}
            >
              {[
                "Transform your credit behavior into a valuable asset.",
                "Build an ecosystem where financial discipline is rewarded,",
                "trust is monetized, and you ascend aspirational tiers of finance and lifestyle."
              ].map((line, index) => (
                <motion.p
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="mb-2"
                >
                  {line}
                </motion.p>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              variants={containerVariants}
            >
              <motion.div
                variants={buttonVariants}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2, ease: "easeOut" } }}
              >
                <Button
                  onClick={onOpenWaitlist}
                  size="lg"
                  className="btn-premium font-semibold px-8 py-3 text-lg"
                >
                  Discover the Future of Finance
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </motion.div>
              <motion.div
                variants={buttonVariants}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2, ease: "easeOut" } }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10 px-8 py-3 text-lg"
                  onClick={() => document.getElementById('clubs')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore Pyra Clubs
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex flex-wrap justify-center gap-4"
              variants={containerVariants}
            >
              {[
                { icon: TrendingUp, text: 'Financial discipline rewarded' },
                { icon: Shield, text: 'Trust monetized' },
                { icon: Users, text: 'Ascend through tiers' },
                { icon: Shield, text: 'Privacy first' },
              ].map((badge, i) => (
                <motion.div
                  key={i}
                  className="bg-premium-glass rounded-full px-4 py-2 flex items-center space-x-2"
                  variants={badgeVariants}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <badge.icon size={16} className="text-white" />
                  <span className="text-sm text-white">{badge.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Pyra Clubs & Features Section */}
      <motion.section
        id="clubs"
        className="py-24"
        style={{ backgroundColor: '#0F0F0F' }}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
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
              className="font-heading text-4xl font-bold text-white mb-4"
              variants={itemVariants}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              The Pyra Clubs: A Tiered Ecosystem of <span className="text-yellow-400">Trust</span>
            </motion.h2>
            <motion.p
              className="text-xl text-white/80 max-w-3xl mx-auto mb-8"
              variants={itemVariants}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Each club represents a level of financial discipline and trust, unlocking progressively more exclusive benefits.
              From building foundational habits to accessing premium financial tools, Pyra guides your journey to financial excellence.
            </motion.p>
          </motion.div>

          {/* Club Overview Cards */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Prime Club */}
            <motion.div
              className="bg-premium-glass rounded-2xl p-8 border-premium shimmer-border"
              variants={cardVariants}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-gray-300 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Star className="text-white" size={32} />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-2">Prime Club</h3>
                <p className="text-cyan-400 font-medium">CBS Score 1800+</p>
              </div>
              <p className="text-white/80 text-center mb-6">
                The core tier for established users with advanced financial tracking and credit management tools.
              </p>
            </motion.div>

            {/* Spark Club */}
            <motion.div
              className="bg-premium-glass rounded-2xl p-8 border-premium shimmer-border"
              variants={cardVariants}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Zap className="text-white" size={32} />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-2">Spark Club</h3>
                <p className="text-teal-400 font-medium">New-to-Credit & Students</p>
              </div>
              <p className="text-white/80 text-center mb-6">
                The launchpad for building the foundation of financial discipline and healthy spending habits.
              </p>
            </motion.div>

            {/* Nova Club */}
            <motion.div
              className="bg-premium-glass rounded-2xl p-8 border-premium shimmer-border"
              variants={cardVariants}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Crown className="text-white" size={32} />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-2">Nova Club</h3>
                <p className="text-yellow-400 font-medium">Most Exclusive Tier</p>
              </div>
              <p className="text-white/80 text-center mb-6">
                Earned through discipline, granting access to the highest-end financial and lifestyle products.
              </p>
            </motion.div>
          </motion.div>

          {/* Features Section */}
          <motion.div
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              className="font-heading text-3xl font-bold text-white mb-8"
              variants={itemVariants}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Core Features & Functionality
            </motion.h3>
            <motion.p
              className="text-xl text-white/80 max-w-3xl mx-auto mb-12"
              variants={itemVariants}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Our comprehensive suite of tools is designed to build financial discipline and unlock exclusive benefits.
              Whether you're starting your financial journey or managing complex portfolios, Pyra provides the insights and tools you need.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {allFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={featureVariants}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  index={index}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Pyra Super-App Vision Section */}
      <motion.section
        className="py-24"
        style={{ backgroundColor: '#141414' }}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="font-heading text-4xl font-bold text-white mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              From Bill Pay to Super-App
            </motion.h2>

            <motion.p
              className="text-lg text-white/80 mb-16 leading-relaxed max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              We start with the habit that matters—repayment. As members prove discipline, we unlock products that match their behavior: subscription financing, savings, earned wage access, insurance, premium lines via partners, and a curated marketplace. Step by step, Pyra becomes your trusted financial hub for SEA.
            </motion.p>

            {/* Sticky Scrolling Vision Tiers */}
            <div className="relative">
              {/* Credit Tier - Foundation */}
              <motion.div
                className="sticky top-32 mb-32"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20% 0px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="bg-premium-glass rounded-2xl p-8 md:p-12 border border-white/10 shimmer-border max-w-2xl">
                  <div className="flex items-center gap-6 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                      <Target className="text-white" size={32} />
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-white mb-2">Credit Foundation</h3>
                      <p className="text-cyan-400 font-medium">Building trust through discipline</p>
                    </div>
                  </div>
                  <p className="text-white/80 leading-relaxed">
                    Start your journey with unified bill pay, late-fee protection, and hidden charge detection. Build your Discipline Index (DI) score through consistent repayment behavior.
                  </p>
                </div>
              </motion.div>

              {/* Savings Tier - Growth */}
              <motion.div
                className="sticky top-32 mb-32"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20% 0px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="bg-premium-glass rounded-2xl p-8 md:p-12 border border-white/10 shimmer-border max-w-2xl ml-auto">
                  <div className="flex items-center gap-6 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full flex items-center justify-center">
                      <Wallet className="text-white" size={32} />
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-white mb-2">Savings & Growth</h3>
                      <p className="text-cyan-400 font-medium">Smart saving & financial goals</p>
                    </div>
                  </div>
                  <p className="text-white/80 leading-relaxed">
                    Unlock savings tools, subscription financing, and insurance access. Your proven discipline opens doors to wealth-building opportunities and partner offers.
                  </p>
                </div>
              </motion.div>

              {/* Investments Tier - Wealth */}
              <motion.div
                className="sticky top-32 mb-32"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20% 0px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="bg-premium-glass rounded-2xl p-8 md:p-12 border border-white/10 shimmer-border max-w-2xl">
                  <div className="flex items-center gap-6 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-green-400 rounded-full flex items-center justify-center">
                      <BarChart3 className="text-white" size={32} />
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-white mb-2">Investments & Wealth</h3>
                      <p className="text-teal-400 font-medium">Portfolio management & wealth building</p>
                    </div>
                  </div>
                  <p className="text-white/80 leading-relaxed">
                    Access earned wage solutions, EMI on card bills, and curated partner marketplace. Your financial maturity unlocks sophisticated wealth management tools.
                  </p>
                </div>
              </motion.div>

              {/* Lifestyle Tier - Apex */}
              <motion.div
                className="sticky top-32 mb-16"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20% 0px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="bg-premium-glass rounded-2xl p-8 md:p-12 border border-white/10 shimmer-border max-w-2xl ml-auto">
                  <div className="flex items-center gap-6 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                      <Crown className="text-white" size={32} />
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-white mb-2">Lifestyle & Premium</h3>
                      <p className="text-yellow-400 font-medium">Exclusive access & premium experiences</p>
                    </div>
                  </div>
                  <p className="text-white/80 leading-relaxed">
                    Premium credit lines via partners, wealth products, and lifestyle benefits. Your journey culminates in exclusive access to the highest-end financial and lifestyle products.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Timeline Callout */}
            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
              <div className="bg-white/5 rounded-2xl p-6 md:p-8 border border-white/10 max-w-4xl mx-auto">
                <h4 className="font-heading text-xl font-bold text-white mb-4">Development Timeline</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-white/80">
                  <div>
                    <span className="text-cyan-400 font-medium">Near-term:</span> subscription financing, savings wallet, insurance access
                  </div>
                  <div>
                    <span className="text-teal-400 font-medium">Next:</span> Earned wage access, EMI on card bills, curated partner marketplace
                  </div>
                  <div>
                    <span className="text-yellow-400 font-medium">Later:</span> Premium credit lines via partners, wealth products, lifestyle benefits
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            >
              <Button
                onClick={onOpenWaitlist}
                size="lg"
                className="btn-premium font-semibold px-8 py-3 text-lg"
              >
                Join the Future
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Investor Section */}
      <motion.section
        className="py-24"
        style={{ backgroundColor: '#0F0F0F' }}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="font-heading text-3xl font-bold text-white mb-8"
              variants={itemVariants}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Building the future of financial discipline
            </motion.h2>

            <motion.p
              className="text-lg text-white/80 mb-12 leading-relaxed"
              variants={itemVariants}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Pyra transforms financial responsibility into aspiration through behavior-first status tiers.
              Our revenue model combines partner revenue sharing, premium Nova subscriptions, and future
              credit margin opportunities—creating sustainable growth while rewarding disciplined members.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={containerVariants}
            >
              <motion.div
                variants={buttonVariants}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2, ease: "easeOut" } }}
              >
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                  asChild
                >
                  <a href="/investor-one-pager.pdf" download>
                    <Download className="mr-2" size={20} />
                    Investor One-Pager (PDF)
                  </a>
                </Button>
              </motion.div>

              <motion.div
                variants={buttonVariants}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2, ease: "easeOut" } }}
              >
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                  asChild
                >
                  <a href="/media-kit.zip" download>
                    <Download className="mr-2" size={20} />
                    Media Kit (ZIP)
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Waitlist Modal */}
      <WaitlistModal isOpen={isWaitlistOpen} onClose={onCloseWaitlist} />
    </div>
  );
}