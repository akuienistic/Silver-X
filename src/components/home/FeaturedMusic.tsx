import { motion } from 'framer-motion';
import { Play, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import albumCover1 from '@/assets/album-cover-1.jpg';
import albumCover2 from '@/assets/album-cover-2.jpg';

const tracks = [
  {
    title: 'Holyland Anthem',
    album: 'Kingdom Rise',
    cover: albumCover1,
    duration: '4:32',
  },
  {
    title: 'African Dreams',
    album: 'African Beats',
    cover: albumCover2,
    duration: '3:58',
  },
];

const FeaturedMusic = () => {
  return (
    <section className="section-padding bg-gradient-dark african-pattern">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-display text-sm uppercase tracking-[0.3em] text-primary mb-4">
            Latest Release
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Featured <span className="text-gradient-gold">Music</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {tracks.map((track, index) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={track.cover}
                  alt={track.album}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center glow-gold transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <Play size={28} className="text-primary-foreground ml-1" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold mb-1">{track.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{track.album} • {track.duration}</p>
                <div className="flex gap-2">
                  <Button variant="outline-gold" size="sm" className="flex-1">
                    <Play size={14} />
                    Play
                  </Button>
                  <Button variant="ghost" size="sm">
                    <ExternalLink size={14} />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button variant="gold" size="lg" asChild>
            <Link to="/music">View All Music</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedMusic;
