import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Instagram, Youtube, Facebook, Twitter, Music2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import Layout from '@/components/layout/Layout';

const socialLinks = [
  { icon: Youtube, href: 'https://www.youtube.com/@SilverXMusicMachine', label: 'YouTube', color: 'hover:text-red-500' },
  { icon: Instagram, href: 'https://www.instagram.com/silverxtra/', label: 'Instagram', color: 'hover:text-pink-500' },
  { icon: Facebook, href: 'https://www.facebook.com/SilverXtraOfficial/', label: 'Facebook', color: 'hover:text-blue-500' },
  { icon: Twitter, href: 'https://twitter.com/silverxtra', label: 'Twitter', color: 'hover:text-sky-500' },
  { icon: Music2, href: 'https://open.spotify.com/artist/4W0kkRPNouPljglZsUhxsL', label: 'Spotify', color: 'hover:text-green-500' },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
              Get In Touch
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-black mb-6">
              <span className="text-gradient-gold">Contact</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              For bookings, press inquiries, and collaborations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-display text-3xl font-bold mb-6">
                  Let's <span className="text-gradient-gold">Connect</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Whether you're interested in booking Silver X for an event, discussing 
                  press opportunities, or exploring collaboration possibilities, we'd love 
                  to hear from you.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-500 to-amber-500 flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-slate-900" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold mb-1">Email</h3>
                    <a href="mailto:olihasimon@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      olihasimon@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-500 to-amber-500 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-slate-900" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold mb-1">Phone</h3>
                    <a href="tel:+61434038309" className="text-muted-foreground hover:text-primary transition-colors block">
                      +61 434 038 309 (Australia)
                    </a>
                    <a href="https://wa.me/211929999768" className="text-muted-foreground hover:text-primary transition-colors block">
                      +211 929 999 768 (WhatsApp)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-500 to-amber-500 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-slate-900" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold mb-1">Location</h3>
                    <p className="text-muted-foreground">
                      Sydney, NSW, Australia<br />
                      <span className="text-sm">Holyland Music Empire (HLME)</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-display font-semibold mb-4">Follow Silver X</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground ${social.color} transition-all duration-300 hover:scale-110`}
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {submitted ? (
                <div className="bg-card rounded-2xl p-8 border border-border text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-yellow-500 to-amber-500 flex items-center justify-center">
                    <Send size={28} className="text-slate-900" />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-4">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. We'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 border border-border space-y-6">
                  <h3 className="font-display text-2xl font-bold mb-6">Send a Message</h3>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    >
                      <option value="">Select a subject</option>
                      <option value="booking">Booking Inquiry</option>
                      <option value="press">Press & Media</option>
                      <option value="collaboration">Collaboration</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  <Button type="submit" variant="gold" size="lg" className="w-full">
                    <Send size={18} />
                    Send Message
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Management Info */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-display text-3xl font-bold mb-6">
              Management & <span className="text-gradient-gold">Bookings</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              For all booking inquiries and management contacts, please reach out through 
              the official channels of Holyland Music Empire (HLME) & International Records.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="lg" asChild>
                <a href="mailto:olihasimon@gmail.com">
                  <Mail size={18} />
                  Email Management
                </a>
              </Button>
              <Button variant="outline-gold" size="lg" asChild>
                <a href="https://wa.me/211929999768" target="_blank" rel="noopener noreferrer">
                  <Phone size={18} />
                  WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
