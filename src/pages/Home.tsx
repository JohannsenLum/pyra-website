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
        className="min-h-[50vh] flex items-center justify-center"
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
        className="min-h-[50vh] flex items-center justify-center"
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
        className="min-h-screen py-24"
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

            {/* Enhanced Sticky Scrolling Vision Tiers */}
            <div className="relative">
              {/* Credit Tier - Foundation */}
              <motion.div
                className="sticky top-0 min-h-screen flex items-center justify-center mb-32"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                <div className="relative w-full max-w-6xl mx-auto px-6">
                  {/* Background Image Placeholder - You can add your image here */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-3xl blur-3xl"></div>

                  <div className="relative bg-premium-glass/80 backdrop-blur-xl rounded-3xl p-12 md:p-16 border border-white/20 shimmer-border overflow-hidden">
                    {/* Animated Background Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>

                    <div className="relative z-10">
                      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
                        <motion.div
                          className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center shadow-2xl"
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                        >
                          <Target className="text-white" size={48} />
                        </motion.div>

                        <div className="flex-1 text-center lg:text-left">
                          <motion.h3
                            className="font-heading text-4xl md:text-5xl font-bold text-white mb-4"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                          >
                            Credit Foundation
                          </motion.h3>
                          <motion.p
                            className="text-cyan-400 font-semibold text-xl mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
                          >
                            Building trust through discipline
                          </motion.p>
                          <motion.p
                            className="text-white/90 leading-relaxed text-lg max-w-2xl mx-auto lg:mx-0"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
                          >
                            Start your journey with unified bill pay, late-fee protection, and hidden charge detection. Build your Discipline Index (DI) score through consistent repayment behavior and unlock the foundation of financial excellence.
                          </motion.p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Savings Tier - Growth */}
              <motion.div
                className="sticky top-0 min-h-screen flex items-center justify-center mb-32"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                <div className="relative w-full max-w-6xl mx-auto px-6">
                  {/* Background Image Placeholder - You can add your image here */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-3xl blur-3xl"></div>

                  <div className="relative bg-premium-glass/80 backdrop-blur-xl rounded-3xl p-12 md:p-16 border border-white/20 shimmer-border overflow-hidden">
                    {/* Animated Background Elements */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-br from-teal-400/20 to-green-400/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>

                    <div className="relative z-10">
                      <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start gap-8 lg:gap-12">
                        <motion.div
                          className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-2xl flex items-center justify-center shadow-2xl"
                          initial={{ scale: 0, rotate: 180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                        >
                          <Wallet className="text-white" size={48} />
                        </motion.div>

                        <div className="flex-1 text-center lg:text-right">
                          <motion.h3
                            className="font-heading text-4xl md:text-5xl font-bold text-white mb-4"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                          >
                            Savings & Growth
                          </motion.h3>
                          <motion.p
                            className="text-cyan-400 font-semibold text-xl mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
                          >
                            Smart saving & financial goals
                          </motion.p>
                          <motion.p
                            className="text-white/90 leading-relaxed text-lg max-w-2xl mx-auto lg:mx-0"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
                          >
                            Unlock savings tools, subscription financing, and insurance access. Your proven discipline opens doors to wealth-building opportunities, partner offers, and the next level of financial sophistication.
                          </motion.p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Investments Tier - Wealth */}
              <motion.div
                className="sticky top-0 min-h-screen flex items-center justify-center mb-32"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                <div className="relative w-full max-w-6xl mx-auto px-6">
                  {/* Background Image Placeholder - You can add your image here */}
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-400/10 to-green-400/10 rounded-3xl blur-3xl"></div>

                  <div className="relative bg-premium-glass/80 backdrop-blur-xl rounded-3xl p-12 md:p-16 border border-white/20 shimmer-border overflow-hidden">
                    {/* Animated Background Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-teal-400/20 to-green-400/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>

                    <div className="relative z-10">
                      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
                        <motion.div
                          className="w-24 h-24 bg-gradient-to-br from-teal-400 to-green-400 rounded-2xl flex items-center justify-center shadow-2xl"
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                        >
                          <BarChart3 className="text-white" size={48} />
                        </motion.div>

                        <div className="flex-1 text-center lg:text-left">
                          <motion.h3
                            className="font-heading text-4xl md:text-5xl font-bold text-white mb-4"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                          >
                            Investments & Wealth
                          </motion.h3>
                          <motion.p
                            className="text-teal-400 font-semibold text-xl mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
                          >
                            Portfolio management & wealth building
                          </motion.p>
                          <motion.p
                            className="text-white/90 leading-relaxed text-lg max-w-2xl mx-auto lg:mx-0"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
                          >
                            Access earned wage solutions, EMI on card bills, and curated partner marketplace. Your financial maturity unlocks sophisticated wealth management tools and advanced investment opportunities.
                          </motion.p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Lifestyle Tier - Apex */}
              <motion.div
                className="sticky top-0 min-h-screen flex items-center justify-center mb-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                <div className="relative w-full max-w-6xl mx-auto px-6">
                  {/* Background Image Placeholder - You can add your image here */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-3xl blur-3xl"></div>

                  <div className="relative bg-premium-glass/80 backdrop-blur-xl rounded-3xl p-12 md:p-16 border border-white/20 shimmer-border overflow-hidden">
                    {/* Animated Background Elements */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>

                    <div className="relative z-10">
                      <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start gap-8 lg:gap-12">
                        <motion.div
                          className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center shadow-2xl"
                          initial={{ scale: 0, rotate: 180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                        >
                          <Crown className="text-white" size={48} />
                        </motion.div>

                        <div className="flex-1 text-center lg:text-right">
                          <motion.h3
                            className="font-heading text-4xl md:text-5xl font-bold text-white mb-4"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                          >
                            Lifestyle & Premium
                          </motion.h3>
                          <motion.p
                            className="text-yellow-400 font-semibold text-xl mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
                          >
                            Exclusive access & premium experiences
                          </motion.p>
                          <motion.p
                            className="text-white/90 leading-relaxed text-lg max-w-2xl mx-auto lg:mx-0"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
                          >
                            Premium credit lines via partners, wealth products, and lifestyle benefits. Your journey culminates in exclusive access to the highest-end financial and lifestyle products, creating a truly premium experience.
                          </motion.p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Enhanced Timeline with SVG */}
            <motion.div
              className="mt-20 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
              <div className="bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 max-w-6xl mx-auto backdrop-blur-sm">
                <motion.h4
                  className="font-heading text-2xl md:text-3xl font-bold text-white mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                >
                  Development Timeline
                </motion.h4>

                {/* Timeline Container */}
                <div className="relative">
                  {/* Enhanced SVG Timeline Line */}
                  <svg className="absolute left-1/2 transform -translate-x-1/2 w-3 h-full" viewBox="0 0 12 600">
                    {/* Main Timeline Line */}
                    <motion.line
                      x1="6" y1="40" x2="6" y2="560"
                      stroke="url(#timelineGradient)"
                      strokeWidth="8"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2.5, ease: "easeOut", delay: 0.8 }}
                    />

                    {/* Connection Points - Small circles at each phase */}
                    <motion.circle
                      cx="6" cy="120"
                      r="4"
                      fill="url(#timelineGradient)"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, ease: "easeOut", delay: 1.5 }}
                    />
                    <motion.circle
                      cx="6" cy="300"
                      r="4"
                      fill="url(#timelineGradient)"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, ease: "easeOut", delay: 2.0 }}
                    />
                    <motion.circle
                      cx="6" cy="480"
                      r="4"
                      fill="url(#timelineGradient)"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, ease: "easeOut", delay: 2.5 }}
                    />

                    <defs>
                      <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#06b6d4" stopOpacity="1" />
                        <stop offset="25%" stopColor="#06b6d4" stopOpacity="1" />
                        <stop offset="50%" stopColor="#14b8a6" stopOpacity="1" />
                        <stop offset="75%" stopColor="#14b8a6" stopOpacity="1" />
                        <stop offset="100%" stopColor="#eab308" stopOpacity="1" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Timeline Items */}
                  <div className="space-y-16 relative z-10">
                    {/* Near-term */}
                    <motion.div
                      className="relative flex items-center"
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut", delay: 1.0 }}
                    >
                      <div className="flex-1 text-right pr-8">
                        <h5 className="text-cyan-400 font-semibold text-lg mb-2">Near-term</h5>
                        <p className="text-white/80 text-sm leading-relaxed">
                          Subscription financing, savings wallet, insurance access
                        </p>
                      </div>

                      {/* Timeline Node */}
                      <div className="relative">
                        {/* Vertical Connection Line to Main Timeline */}
                        <div className="absolute left-1/2 top-1/2 w-1 h-16 bg-gradient-to-b from-cyan-400/80 to-transparent transform -translate-x-1/2 -translate-y-full"></div>

                        <motion.div
                          className="w-8 h-8 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/30 relative z-10"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, ease: "easeOut", delay: 1.2 }}
                        />
                        <motion.div
                          className="absolute inset-0 w-8 h-8 bg-cyan-400 rounded-full animate-ping opacity-20"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, ease: "easeOut", delay: 1.4 }}
                        />
                      </div>

                      <div className="flex-1 pl-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-2xl flex items-center justify-center">
                          <motion.div
                            initial={{ rotate: -180, scale: 0 }}
                            whileInView={{ rotate: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 1.6 }}
                          >
                            <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                            </svg>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Next */}
                    <motion.div
                      className="relative flex items-center"
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
                    >
                      <div className="flex-1 text-right pr-8">
                        <h5 className="text-teal-400 font-semibold text-lg mb-2">Next</h5>
                        <p className="text-white/80 text-sm leading-relaxed">
                          Earned wage access, EMI on card bills, curated partner marketplace
                        </p>
                      </div>

                      {/* Timeline Node */}
                      <div className="relative">
                        {/* Vertical Connection Line to Main Timeline */}
                        <div className="absolute left-1/2 top-1/2 w-1 h-24 bg-gradient-to-b from-teal-400/80 to-transparent transform -translate-x-1/2 -translate-y-full"></div>

                        <motion.div
                          className="w-8 h-8 bg-teal-400 rounded-full shadow-lg shadow-teal-400/30 relative z-10"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, ease: "easeOut", delay: 2.0 }}
                        />
                        <motion.div
                          className="absolute inset-0 w-8 h-8 bg-teal-400 rounded-full animate-ping opacity-20"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, ease: "easeOut", delay: 2.2 }}
                        />
                      </div>

                      <div className="flex-1 pl-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-teal-400/20 to-green-400/20 rounded-2xl flex items-center justify-center">
                          <motion.div
                            initial={{ rotate: 180, scale: 0 }}
                            whileInView={{ rotate: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 1.8 }}
                          >
                            <svg className="w-8 h-8 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Later */}
                    <motion.div
                      className="relative flex items-center"
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut", delay: 1.4 }}
                    >
                      <div className="flex-1 text-right pr-8">
                        <h5 className="text-yellow-400 font-semibold text-lg mb-2">Later</h5>
                        <p className="text-white/80 text-sm leading-relaxed">
                          Premium credit lines via partners, wealth products, lifestyle benefits
                        </p>
                      </div>

                      {/* Timeline Node */}
                      <div className="relative">
                        {/* Vertical Connection Line to Main Timeline */}
                        <div className="absolute left-1/2 top-1/2 w-1 h-24 bg-gradient-to-b from-yellow-400/80 to-transparent transform -translate-x-1/2 -translate-y-full"></div>

                        <motion.div
                          className="w-8 h-8 bg-yellow-400 rounded-full shadow-lg shadow-yellow-400/30 relative z-10"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, ease: "easeOut", delay: 2.4 }}
                        />
                        <motion.div
                          className="absolute inset-0 w-8 h-8 bg-yellow-400 rounded-full animate-ping opacity-20"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, ease: "easeOut", delay: 2.6 }}
                        />
                      </div>

                      <div className="flex-1 pl-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-2xl flex items-center justify-center">
                          <motion.div
                            initial={{ rotate: -180, scale: 0 }}
                            whileInView={{ rotate: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 2.8 }}
                          >
                            <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
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


          </motion.div>
        </div>
      </motion.section>

      {/* Waitlist Modal */}
      <WaitlistModal isOpen={isWaitlistOpen} onClose={onCloseWaitlist} />
    </div>
  );
}