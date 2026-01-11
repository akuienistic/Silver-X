import { motion } from "framer-motion";
import { Play, Music2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import heroImage from "@/assets/SilverX Hero.jpg";

const HeroSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Silver X performing" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div className="absolute inset-0 bg-hero-gradient" />
      </div>

      {/* African Pattern Overlay */}
      <div className="absolute inset-0 african-pattern opacity-30" />

      {/* Content */}
      <div className="relative z-10 container-custom px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="font-display text-sm md:text-base uppercase tracking-[0.3em] text-primary"
          >
            Two-Time East African Best Artist
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-black"
          >
            <span className="text-gradient-gold">SILVER X</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed"
          >
            Award-winning musical icon from South Sudan. CEO of Holyland Music Empire. Currently based in Sydney,
            Australia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <Button variant="hero" size="xl" onClick={() => setSelectedVideo('BXy4b00rgzs')}>
              <Play size={20} />
              Watch Latest
            </Button>
            <Button variant="outline-gold" size="xl" asChild>
              <a
                href="https://open.spotify.com/artist/4W0kkRPNouPljglZsUhxsL"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Music2 size={20} />
                Listen Now
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative w-full max-w-4xl bg-background rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-primary/20 hover:bg-primary/40 flex items-center justify-center transition-colors"
              aria-label="Close video"
            >
              <X size={24} className="text-foreground" />
            </button>

            {/* Video Player */}
            <div className="relative aspect-video bg-black">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="Video Player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0"
              />
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
