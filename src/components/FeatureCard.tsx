import { LucideIcon } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export function FeatureCard({ icon: Icon, title, description, index }: FeatureCardProps) {
  const [cardRef] = useInView<HTMLDivElement>();

  return (
    <div
      ref={cardRef}
      className="bg-glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="w-12 h-12 bg-accent-gradient rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon className="text-white" size={24} />
      </div>
      <h3 className="font-heading text-xl font-semibold text-pyra-ink mb-3">
        {title}
      </h3>
      <p className="text-pyra-muted leading-relaxed">
        {description}
      </p>
    </div>
  );
}