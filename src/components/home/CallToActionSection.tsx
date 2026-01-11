import { motion } from 'framer-motion';
import { Music2, Youtube, Instagram, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CallToActionSection = () => {
  const actions = [
    {
      icon: Music2,
      title: 'Stream Music',
      description: 'Listen to Silver X on all major streaming platforms',
      link: '/music',
      external: false,
    },
    {
      icon: Youtube,
      title: 'Watch Videos',
      description: 'Explore official music videos and performances',
      link: 'https://www.youtube.com/@SilverXMusicMachine',
      external: true,
    },
    {
      icon: Instagram,
      title: 'Follow Updates',
      description: 'Stay connected on social media for latest news',
      link: 'https://www.instagram.com/silverxtra/',
      external: true,
    },
    {
      icon: Mail,
      title: 'Get in Touch',
      description: 'Book performances or inquire about collaborations',
      link: '/contact',
      external: false,
    },
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 african-pattern opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-display text-sm uppercase tracking-[0.3em] text-primary mb-4">
            Connect With Silver X
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Explore the <span className="text-gradient-gold">Holyland Empire</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover music, watch performances, and connect with one of East Africa's most influential artists
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {actions.map((action, index) => {
            const Icon = action.icon;
            const content = (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-500 to-amber-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={24} className="text-slate-900" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{action.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{action.description}</p>
                <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                  Learn More
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );

            if (action.external) {
              return (
                <a
                  key={action.title}
                  href={action.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content}
                </a>
              );
            }

            return (
              <Link key={action.title} to={action.link}>
                {content}
              </Link>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            For booking inquiries and business opportunities
          </p>
          <Button variant="gold" size="lg" asChild>
            <a href="mailto:olihasimon@gmail.com">
              <Mail size={18} />
              Contact Management
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToActionSection;
