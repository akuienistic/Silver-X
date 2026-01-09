import { motion } from 'framer-motion';
import { Award, Music2, Globe, Mic2, Star, Calendar } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import studioImage from '@/assets/silver-x-studio.jpg';
import heroImage from '@/assets/hero-silver-x.jpg';

const achievements = [
  { year: '2022', title: 'East African Best Artist of the Year', icon: Award },
  { year: '2021', title: 'East African Best Artist of the Year', icon: Award },
  { year: '2020', title: 'Founded Holyland Music Empire', icon: Music2 },
  { year: '2019', title: 'International Records Launch', icon: Globe },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Silver X"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>

        <div className="container-custom relative z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="font-display text-sm uppercase tracking-[0.3em] text-primary mb-4">
              The Story
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-black mb-6">
              About <span className="text-gradient-gold">Silver X</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              A legendary musical icon bridging African rhythms with international sounds
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Bio Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:sticky lg:top-32"
            >
              <div className="relative rounded-2xl overflow-hidden flex-shrink-0">
                <img
                  src={studioImage}
                  alt="Silver X in studio"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-500 to-amber-500 flex items-center justify-center">
                      <Mic2 className="text-slate-900" size={20} />
                    </div>
                    <div>
                      <p className="font-display font-bold text-lg">336K+</p>
                      <p className="text-muted-foreground text-sm">Followers Worldwide</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Bio Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="prose prose-invert max-w-none">
                <p className="text-xl text-foreground leading-relaxed">
                  Silver X is a two-time East African Best Artist of the Year and an all-time 
                  award-winning legendary musical icon from South Sudan.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  As the CEO of Holyland Music Empire (HLME) & International Records, Silver X 
                  has established himself as a pioneering force in East African dancehall and R&B. 
                  His unique sound blends traditional African rhythms with contemporary international 
                  influences, creating music that resonates with audiences across the globe.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Currently based in Sydney, Australia, Silver X continues to push the boundaries 
                  of African music on the world stage. His journey from South Sudan to international 
                  recognition represents not just personal achievement, but a cultural bridge 
                  connecting African heritage with global audiences.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  With over 336,000 followers and a 94% recommendation rate from fans, Silver X 
                  has built a dedicated community of supporters who celebrate his authentic sound 
                  and powerful performances. His music speaks to the African diaspora and beyond, 
                  carrying messages of hope, celebration, and cultural pride.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-8 border-y border-border">
                {[
                  { icon: Award, value: '2x', label: 'Award Winner' },
                  { icon: Music2, value: '50+', label: 'Tracks' },
                  { icon: Star, value: '94%', label: 'Fan Rating' },
                  { icon: Globe, value: 'Global', label: 'Reach' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <stat.icon size={24} className="text-primary mx-auto mb-2" />
                    <p className="font-display text-2xl font-bold text-gradient-gold">{stat.value}</p>
                    <p className="text-muted-foreground text-sm">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Timeline */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="font-display text-sm uppercase tracking-[0.3em] text-primary mb-4">
              Milestones
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Career <span className="text-gradient-gold">Highlights</span>
            </h2>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-500 to-amber-500 flex items-center justify-center flex-shrink-0">
                    <achievement.icon size={20} className="text-slate-900" />
                  </div>
                  {index < achievements.length - 1 && (
                    <div className="w-0.5 flex-1 bg-border mt-4" />
                  )}
                </div>
                <div className="pb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar size={14} className="text-primary" />
                    <span className="text-primary font-display font-semibold">{achievement.year}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold">{achievement.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
