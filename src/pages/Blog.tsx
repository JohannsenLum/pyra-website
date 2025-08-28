import { Calendar, ArrowRight, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useInView } from '@/hooks/useInView';

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
}

const posts: BlogPost[] = [
  {
    title: 'Fee Fridays: How to Avoid Hidden FX Markups',
    excerpt: 'Most cardholders pay 2-4% in hidden foreign exchange markups without realizing it. Here\'s how to spot and avoid these charges.',
    date: '2024-03-15',
    author: 'Pyra Team',
    category: 'Financial Tips',
    readTime: '5 min read'
  },
  {
    title: 'The True Cost of Late Fees in Southeast Asia',
    excerpt: 'Research shows SEA cardholders pay over $2B annually in avoidable late fees. We break down the regional patterns and solutions.',
    date: '2024-03-08',
    author: 'Flo Chen',
    category: 'Market Research',
    readTime: '7 min read'
  },
  {
    title: 'Building Credit Discipline: The DI Framework',
    excerpt: 'How we designed the Discipline Index to reward good financial habits rather than just spending power.',
    date: '2024-03-01',
    author: 'Sanjeev Kumar',
    category: 'Product',
    readTime: '6 min read'
  }
];

export default function Blog() {
  const [heroRef] = useInView<HTMLElement>();
  const [postsRef] = useInView<HTMLElement>();

  return (
    <div className="pt-16">
      {/* Hero */}
      <section ref={heroRef} className="py-24 bg-gradient-deep">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl font-bold text-pyra-ink mb-6">
            Pyra <span className="text-gradient">Blog</span>
          </h1>
          <p className="text-xl text-pyra-muted max-w-3xl mx-auto">
            Insights on financial discipline, fintech innovation, and building 
            better money habits across Southeast Asia.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section ref={postsRef} className="py-24 bg-pyra-bg">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article
                key={index}
                className="bg-glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer group"
              >
                <div className="mb-4">
                  <span className="inline-block bg-accent-gradient text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {post.category}
                  </span>
                  
                  <h2 className="font-heading text-xl font-semibold text-pyra-ink mb-3 group-hover:text-pyra-cyan transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-pyra-muted text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs text-pyra-muted pt-4 border-t border-white/10">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User size={12} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={12} />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <span>{post.readTime}</span>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-glass rounded-2xl p-8 max-w-2xl mx-auto text-center">
            <h3 className="font-heading text-2xl font-semibold text-pyra-ink mb-4">
              Stay Updated
            </h3>
            <p className="text-pyra-muted mb-6">
              Get our latest insights on financial discipline and fintech innovation 
              delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-pyra-bg border border-white/20 rounded-xl text-pyra-ink placeholder:text-pyra-muted focus:outline-none focus:ring-2 focus:ring-pyra-cyan"
              />
              <Button className="bg-accent-gradient btn-sheen font-medium px-6">
                Subscribe
              </Button>
            </div>
            
            <p className="text-xs text-pyra-muted mt-3">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16 bg-navy-700">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-glass rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="font-heading text-2xl font-semibold text-pyra-ink mb-4">
              More Content Coming Soon
            </h3>
            <p className="text-pyra-muted mb-6">
              We're working on comprehensive guides covering credit optimization, 
              fee avoidance strategies, and financial discipline across Southeast Asian markets.
            </p>
            
            <Button 
              variant="outline"
              className="border-white/20 text-pyra-ink hover:bg-white/10"
              asChild
            >
              <a href="/contact">
                Suggest a Topic
                <ArrowRight className="ml-2" size={16} />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}