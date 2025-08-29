import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';

export default function Contact() {
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

  const contactSectionVariants = {
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
        className="py-24 bg-gradient-deep"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="font-heading text-5xl font-bold text-pyra-ink mb-6"
              variants={itemVariants}
            >
              Get in <span className="text-gradient">Touch</span>
            </motion.h1>
            <motion.p
              className="text-xl text-pyra-muted max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Have questions about Pyra? Want to partner with us?
              Ready to join the waitlist? We'd love to hear from you.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section
        className="py-24 bg-pyra-bg"
        variants={contactSectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2
                className="font-heading text-3xl font-bold text-pyra-ink mb-8"
                variants={itemVariants}
              >
                Let's Connect
              </motion.h2>

              <motion.p
                className="text-lg text-pyra-muted mb-8 leading-relaxed"
                variants={itemVariants}
              >
                Whether you're a potential user, partner, investor, or just curious about
                what we're building, we're here to help. Reach out and let's start a conversation.
              </motion.p>

              <motion.div
                className="space-y-6"
                variants={containerVariants}
              >
                {[
                  {
                    icon: Mail,
                    title: 'Email',
                    content: 'hello@pyra.com',
                    description: 'For general inquiries and partnerships'
                  },
                  {
                    icon: Phone,
                    title: 'Phone',
                    content: '+65 9123 4567',
                    description: 'Available during business hours (SGT)'
                  },
                  {
                    icon: MapPin,
                    title: 'Office',
                    content: 'Singapore',
                    description: 'Headquartered in the heart of Southeast Asia'
                  }
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    variants={itemVariants}
                  >
                    <div className="w-12 h-12 bg-accent-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                      <contact.icon className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-pyra-ink mb-1">
                        {contact.title}
                      </h3>
                      <p className="text-pyra-cyan font-medium mb-1">
                        {contact.content}
                      </p>
                      <p className="text-sm text-pyra-muted">
                        {contact.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="mt-12 bg-glass rounded-2xl p-6"
                variants={itemVariants}
              >
                <h3 className="font-heading text-xl font-semibold text-pyra-ink mb-4">
                  Quick Links
                </h3>
                <div className="space-y-3">
                  <a
                    href="/about"
                    className="block text-pyra-cyan hover:text-pyra-ink transition-colors"
                  >
                    About Pyra →
                  </a>
                  <a
                    href="/product"
                    className="block text-pyra-cyan hover:text-pyra-ink transition-colors"
                  >
                    Our Product →
                  </a>
                  <a
                    href="/clubs"
                    className="block text-pyra-cyan hover:text-pyra-ink transition-colors"
                  >
                    Pyra Clubs →
                  </a>
                  <a
                    href="/careers"
                    className="block text-pyra-cyan hover:text-pyra-ink transition-colors"
                  >
                    Join Our Team →
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-glass rounded-2xl p-8"
                variants={itemVariants}
              >
                <motion.h3
                  className="font-heading text-2xl font-semibold text-pyra-ink mb-6"
                  variants={itemVariants}
                >
                  Send us a Message
                </motion.h3>

                <motion.form
                  className="space-y-6"
                  variants={containerVariants}
                >
                  <motion.div variants={itemVariants}>
                    <label htmlFor="name" className="block text-sm font-medium text-pyra-ink mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      className="bg-pyra-bg border-white/20 text-pyra-ink placeholder:text-pyra-muted focus:border-pyra-cyan"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="email" className="block text-sm font-medium text-pyra-ink mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      className="bg-pyra-bg border-white/20 text-pyra-ink placeholder:text-pyra-muted focus:border-pyra-cyan"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="subject" className="block text-sm font-medium text-pyra-ink mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="What's this about?"
                      className="bg-pyra-bg border-white/20 text-pyra-ink placeholder:text-pyra-muted focus:border-pyra-cyan"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="message" className="block text-sm font-medium text-pyra-ink mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your inquiry..."
                      rows={5}
                      className="bg-pyra-bg border-white/20 text-pyra-ink placeholder:text-pyra-muted focus:border-pyra-cyan resize-none"
                    />
                  </motion.div>

                  <motion.div
                    variants={buttonVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <Button
                      type="submit"
                      className="w-full bg-accent-gradient btn-sheen font-medium"
                    >
                      <Send className="mr-2" size={16} />
                      Send Message
                      <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </motion.div>
                </motion.form>

                <motion.div
                  className="mt-6 text-center"
                  variants={itemVariants}
                >
                  <p className="text-sm text-pyra-muted">
                    We'll get back to you within 24 hours
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Additional Info */}
      <motion.section
        className="py-16 bg-navy-700"
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="bg-glass rounded-2xl p-8 max-w-3xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              className="font-heading text-2xl font-semibold text-pyra-ink mb-4"
              variants={itemVariants}
            >
              Ready to Transform Your Financial Habits?
            </motion.h3>
            <motion.p
              className="text-pyra-muted mb-6"
              variants={itemVariants}
            >
              Join thousands of users across Southeast Asia who are already building
              better financial discipline with Pyra.
            </motion.p>

            <motion.div
              variants={buttonVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <Button
                className="bg-accent-gradient btn-sheen font-medium"
                asChild
              >
                <a href="/">
                  Join the Waitlist
                  <ArrowRight className="ml-2" size={16} />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}