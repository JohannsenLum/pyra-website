import { useState } from 'react';
import { Mail, MapPin, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { useInView } from '@/hooks/useInView';

export default function Contact() {
  const [formRef] = useInView<HTMLElement>();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    reason: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.reason || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      console.log('Contact form submission:', formData);
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      
      setFormData({
        name: '',
        email: '',
        company: '',
        reason: '',
        message: ''
      });
    }, 1500);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 bg-gradient-deep">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl font-bold text-pyra-ink mb-6">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl text-pyra-muted max-w-3xl mx-auto">
            Whether you're an investor, potential partner, or future team member, 
            we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section ref={formRef} className="py-24 bg-pyra-bg">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-pyra-ink mb-8">
                Let's Start a Conversation
              </h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-pyra-ink mb-1">Email Us</h3>
                    <p className="text-pyra-muted">hello@pyra.club</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-pyra-ink mb-1">Location</h3>
                    <p className="text-pyra-muted">Singapore<br />BLOCK71 Incubator</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-pyra-ink mb-1">Response Time</h3>
                    <p className="text-pyra-muted">We typically respond within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="bg-glass rounded-2xl p-6">
                <h3 className="font-heading text-xl font-semibold text-pyra-ink mb-4">
                  What to expect:
                </h3>
                <ul className="space-y-2 text-pyra-muted">
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-pyra-cyan rounded-full" />
                    <span>Prompt response from our founding team</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-pyra-cyan rounded-full" />
                    <span>Thoughtful discussion about opportunities</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-pyra-cyan rounded-full" />
                    <span>Clear next steps and follow-up</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="bg-glass rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-pyra-ink mb-2">
                      Name *
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="bg-pyra-bg border-white/20 text-pyra-ink placeholder:text-pyra-muted"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-pyra-ink mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="bg-pyra-bg border-white/20 text-pyra-ink placeholder:text-pyra-muted"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-pyra-ink mb-2">
                    Company (Optional)
                  </label>
                  <Input
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className="bg-pyra-bg border-white/20 text-pyra-ink placeholder:text-pyra-muted"
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-pyra-ink mb-2">
                    Reason for Contact *
                  </label>
                  <Select value={formData.reason} onValueChange={(value) => handleInputChange('reason', value)}>
                    <SelectTrigger className="bg-pyra-bg border-white/20 text-pyra-ink">
                      <SelectValue placeholder="Select a reason" />
                    </SelectTrigger>
                    <SelectContent className="bg-navy-700 border-white/20">
                      <SelectItem value="investor">Investor Inquiry</SelectItem>
                      <SelectItem value="partner">Partnership Opportunity</SelectItem>
                      <SelectItem value="candidate">Career / Job Inquiry</SelectItem>
                      <SelectItem value="press">Press / Media</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-pyra-ink mb-2">
                    Message *
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="bg-pyra-bg border-white/20 text-pyra-ink placeholder:text-pyra-muted min-h-[120px]"
                    placeholder="Tell us about your inquiry..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-accent-gradient btn-sheen font-medium"
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}