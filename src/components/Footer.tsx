import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* School Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center">
                <span className="text-secondary-foreground font-display font-bold text-2xl">ST</span>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold">St. Thomas</h3>
                <p className="text-sm text-primary-foreground/70">English Convent School</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              Nurturing minds, building character, and inspiring excellence since 1965. Our commitment to holistic education shapes tomorrow's leaders.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-secondary">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "About Us" },
                { href: "/academics", label: "Academics" },
                { href: "/admissions", label: "Admissions" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-secondary">Our Programs</h4>
            <ul className="space-y-3">
              {[
                "Pre-Primary",
                "Primary School",
                "Middle School",
                "High School",
                "Extra Curricular",
              ].map((program) => (
                <li key={program}>
                  <span className="text-primary-foreground/80">{program}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-secondary">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary mt-0.5" />
                <span className="text-primary-foreground/80">
                  123 Education Lane,<br />Knowledge City, 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary" />
                <a href="tel:+1234567890" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary" />
                <a href="mailto:info@stthomas.edu" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  info@stthomas.edu
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 St. Thomas English Convent School. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
