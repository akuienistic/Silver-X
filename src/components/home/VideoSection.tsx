import { motion } from "framer-motion";
import { Play, Youtube, X, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

const videos = [
  {
    id: "BXy4b00rgzs",
    title: "Silver X, Molten Rock - Kon Koc",
    views: "13K views",
  },
  {
    id: "Vr2pFeq6kH0",
    title: "Silver X - Time is Over",
    views: "15K views",
  },
  {
    id: "rQCGJIZe3ME",
    title: "Eyal Del - ft. Silver X",
    views: "500K+ views",
  },
];

const VideoSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section className="section-padding bg-card">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-display text-sm uppercase tracking-[0.3em] text-primary mb-4">Watch Now</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Latest <span className="text-gradient-gold">Videos</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group cursor-pointer"
              onClick={() => setSelectedVideo(video.id)}
            >
              <div>
                <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                  <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-300 glow-gold">
                      <Play size={24} className="text-primary-foreground ml-1" />
                    </div>
                  </div>
                </div>
                <h3 className="font-display font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
                <p className="text-muted-foreground text-sm">{video.views}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="gold" size="lg" asChild>
            <Link to="/videos">
              <Video size={20} />
              View All Videos
            </Link>
          </Button>
          <Button variant="outline-gold" size="lg" asChild>
            <a href="https://www.youtube.com/@SilverXMusicMachine" target="_blank" rel="noopener noreferrer">
              <Youtube size={18} />
              Subscribe on YouTube
            </a>
          </Button>
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

export default VideoSection;
