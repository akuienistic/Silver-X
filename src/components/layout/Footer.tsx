import { Link } from "react-router-dom";
import { Instagram, Youtube, Facebook, Twitter, Music2, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

const socialLinks = [
  { icon: Youtube, href: "https://www.youtube.com/@SilverXMusicMachine", label: "YouTube" },
  { icon: Instagram, href: "https://www.instagram.com/silverxtra/", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/SilverXtraOfficial/", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com/silverxtra", label: "Twitter" },
  { icon: Music2, href: "https://open.spotify.com/artist/4W0kkRPNouPljglZsUhxsL", label: "Spotify" },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-display text-3xl font-black text-gradient-gold">SILVER X</h3>
            <p className="text-muted-foreground leading-relaxed">
              Two-time East African Best Artist of the Year. CEO of Holyland Music Empire.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6 text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Music", "Videos", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6 text-foreground">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <Mail size={18} className="text-primary mt-1 flex-shrink-0" />
                <span>olihasimon@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <Phone size={18} className="text-primary mt-1 flex-shrink-0" />
                <span>+61 434 038 309</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                <span>Sydney, NSW, Australia</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6 text-foreground">Stay Updated</h4>
            <p className="text-muted-foreground mb-4">Subscribe for exclusive updates, new releases, and tour dates.</p>
            {submitted ? (
              <div className="text-primary text-sm font-semibold">✓ Thanks for subscribing!</div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="px-4 py-3 bg-secondary border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <button
                  type="submit"
                  className="bg-gradient-gold text-primary-foreground font-display font-semibold py-3 rounded-md hover:opacity-90 transition-opacity"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} Silver X. All rights reserved.</p>
          <p className="text-muted-foreground text-sm">Holyland Music Empire (HLME) & International Records</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
