import { motion } from 'framer-motion';
import { Play, Youtube, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';

const videos = [
  {
    id: 'BXy4b00rgzs',
    title: 'Silver X, Molten Rock - Kon Koc (Official Music Video)',
    category: 'Music Video',
    views: '13K views',
    date: '2023',
  },
  {
    id: 'Vr2pFeq6kH0',
    title: 'Silver X - Time is Over (Official HD Video)',
    category: 'Music Video',
    views: '15K views',
    date: '2020',
  },
  {
    id: 'rQCGJIZe3ME',
    title: 'Eyal Del - Dynamq & The Voices Of South Sudan ft. Silver X',
    category: 'Music Video',
    views: '500K+ views',
    date: '2017',
  },
  {
    id: '_8bNRt19s44',
    title: 'Top 10 South Sudanese Songs - Silver X Featured',
    category: 'Compilation',
    views: '100K+ views',
    date: '2023',
  },
];

const categories = ['All', 'Music Video', 'Live Performance', 'Behind The Scenes', 'Lyric Video'];

const Videos = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container-custom px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="font-display text-sm uppercase tracking-[0.3em] text-primary mb-4">
              Visual Stories
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-black mb-6">
              <span className="text-gradient-gold">Videos</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Official music videos, live performances, and behind-the-scenes content
            </p>

            <Button variant="gold" size="lg" asChild>
              <a href="https://www.youtube.com/@SilverXMusicMachine" target="_blank" rel="noopener noreferrer">
                <Youtube size={18} />
                Subscribe on YouTube
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-8">
        <div className="container-custom px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`px-6 py-2 rounded-full font-display text-sm uppercase tracking-wider transition-all ${
                  index === 0
                    ? 'bg-gradient-to-r from-yellow-500 to-amber-500 text-slate-900'
                    : 'bg-secondary text-foreground hover:bg-secondary/80'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video rounded-xl overflow-hidden mb-4 bg-secondary">
                  {/* YouTube Thumbnail */}
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                    }}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-500 to-amber-500 flex items-center justify-center shadow-yellow-500/30 shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <Play size={28} className="text-slate-900 ml-1" />
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-xs font-display uppercase tracking-wider">
                      {video.category}
                    </span>
                  </div>
                </div>

                <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {video.title}
                </h3>
                <div className="flex items-center gap-3 text-muted-foreground text-sm">
                  <span>{video.views}</span>
                  <span>•</span>
                  <span>{video.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Video */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl font-bold">
              Featured <span className="text-gradient-gold">Video</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative aspect-video rounded-xl overflow-hidden bg-secondary">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/BXy4b00rgzs"
                title="Silver X - Kon Koc (Official Music Video)"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-8"
          >
            <Button variant="outline-gold" size="lg" asChild>
              <a href="https://www.youtube.com/@SilverXMusicMachine" target="_blank" rel="noopener noreferrer">
                <ExternalLink size={18} />
                View All on YouTube
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Videos;
