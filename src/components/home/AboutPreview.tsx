import { motion } from 'framer-motion';
import { Award, Users, Music, Star, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import studioImage from '@/assets/silver-x-studio.jpg';

const stats = [
  { icon: Award, value: '2x', label: 'Award Winner' },
  { icon: Users, value: '336K+', label: 'Followers' },
  { icon: Music, value: '50+', label: 'Tracks Released' },
  { icon: Star, value: '94%', label: 'Fan Rating' },
];

const AboutPreview = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border-gradient-gold">
              <img
                src={studioImage}
                alt="Silver X in studio"
                className="w-full aspect-square object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-gold opacity-20 rounded-full blur-3xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary opacity-10 rounded-full blur-2xl" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <p className="font-display text-sm uppercase tracking-[0.3em] text-primary mb-4">
                The Legend
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-gradient-gold">Silver X</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                A two-time East African Best Artist of the Year and an all-time award-winning 
                legendary musical icon from South Sudan. As CEO of Holyland Music Empire (HLME) 
                & International Records, Silver X continues to push boundaries in dancehall and R&B.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently based in Sydney, Australia, he bridges African rhythms with international 
                sounds, creating music that resonates across continents.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-secondary flex items-center justify-center">
                    <stat.icon size={20} className="text-primary" />
                  </div>
                  <p className="font-display text-2xl font-bold text-gradient-gold">{stat.value}</p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <Button variant="outline-gold" size="lg" asChild>
              <Link to="/about">
                <BookOpen size={20} />
                Read Full Story
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
