import { motion } from 'framer-motion';
import { Play, ExternalLink, Music2, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import albumCover1 from '@/assets/album-cover-1.jpg';
import albumCover2 from '@/assets/album-cover-2.jpg';

const albums = [
  {
    id: 1,
    title: 'Kingdom Rise',
    year: '2024',
    cover: albumCover1,
    tracks: [
      { name: 'Holyland Anthem', duration: '4:32' },
      { name: 'Rise Up', duration: '3:45' },
      { name: 'African King', duration: '4:12' },
      { name: 'No Surrender', duration: '3:58' },
      { name: 'Empire State', duration: '4:20' },
    ],
    streamLinks: {
      spotify: 'https://open.spotify.com/artist/4W0kkRPNouPljglZsUhxsL',
      apple: 'https://music.apple.com/us/artist/silver-x/1156820465',
    },
  },
  {
    id: 2,
    title: 'African Beats',
    year: '2023',
    cover: albumCover2,
    tracks: [
      { name: 'African Dreams', duration: '3:58' },
      { name: 'Sunset Dance', duration: '4:05' },
      { name: 'Motherland', duration: '4:30' },
      { name: 'Rhythm of Life', duration: '3:42' },
    ],
    streamLinks: {
      spotify: 'https://open.spotify.com/artist/4W0kkRPNouPljglZsUhxsL',
      apple: 'https://music.apple.com/us/artist/silver-x/1156820465',
    },
  },
];

const singles = [
  { title: 'Summer Vibes', year: '2024', streams: '1.2M' },
  { title: 'Midnight Call', year: '2024', streams: '890K' },
  { title: 'Born to Win', year: '2023', streams: '2.1M' },
  { title: 'Love & Light', year: '2023', streams: '1.5M' },
];

const Music = () => {
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
              Discography
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-black mb-6">
              <span className="text-gradient-gold">Music</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Explore the complete collection of Silver X's music
            </p>

            {/* Streaming Platforms */}
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="gold" size="lg" asChild>
                <a href="https://open.spotify.com/artist/4W0kkRPNouPljglZsUhxsL" target="_blank" rel="noopener noreferrer">
                  <Music2 size={18} />
                  Spotify
                </a>
              </Button>
              <Button variant="outline-gold" size="lg" asChild>
                <a href="https://music.apple.com/us/artist/silver-x/1156820465" target="_blank" rel="noopener noreferrer">
                  <Headphones size={18} />
                  Apple Music
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Albums Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-display text-3xl font-bold">
              Albums & <span className="text-gradient-gold">EPs</span>
            </h2>
          </motion.div>

          <div className="space-y-16">
            {albums.map((album, albumIndex) => (
              <motion.div
                key={album.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: albumIndex * 0.2 }}
                className="grid lg:grid-cols-[300px,1fr] gap-8"
              >
                {/* Album Cover */}
                <div className="group relative">
                  <div className="relative rounded-xl overflow-hidden">
                    <img
                      src={album.cover}
                      alt={album.title}
                      className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-500 to-amber-500 flex items-center justify-center shadow-yellow-500/30 shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300">
                        <Play size={28} className="text-slate-900 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Album Details */}
                <div>
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <p className="text-primary font-display text-sm uppercase tracking-wider mb-1">
                        {album.year}
                      </p>
                      <h3 className="font-display text-2xl font-bold">{album.title}</h3>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline-gold" size="sm" asChild>
                        <a href={album.streamLinks.spotify} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={14} />
                          Stream
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Track List */}
                  <div className="space-y-2">
                    {album.tracks.map((track, trackIndex) => (
                      <div
                        key={track.name}
                        className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group cursor-pointer"
                      >
                        <div className="flex items-center gap-4">
                          <span className="text-muted-foreground w-6">{trackIndex + 1}</span>
                          <Play size={16} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                          <span className="font-medium">{track.name}</span>
                        </div>
                        <span className="text-muted-foreground text-sm">{track.duration}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Singles Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-display text-3xl font-bold">
              Latest <span className="text-gradient-gold">Singles</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {singles.map((single, index) => (
              <motion.div
                key={single.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-500 to-amber-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Music2 size={20} className="text-slate-900" />
                </div>
                <h3 className="font-display font-bold text-lg mb-1">{single.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{single.year}</p>
                <p className="text-primary font-semibold">{single.streams} streams</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Spotify Embed Placeholder */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-display text-3xl font-bold mb-8">
              Stream on <span className="text-gradient-gold">Spotify</span>
            </h2>
            <div className="max-w-2xl mx-auto bg-secondary rounded-xl p-8">
              <iframe
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/artist/4W0kkRPNouPljglZsUhxsL?utm_source=generator&theme=0"
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Spotify Player"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Music;
