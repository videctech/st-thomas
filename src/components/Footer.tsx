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
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white p-2 rounded-lg shadow-sm w-16 h-16 flex items-center justify-center">
                {/* School logo will go here */}
                <div className="text-primary font-bold text-xs text-center leading-none">
                  SAINT THOMAS<br />SCHOOL
                </div>
              </div>
              <div className="text-left">
                <h3 className="font-display text-2xl font-bold leading-tight">Saint Thomas</h3>
                <p className="text-secondary font-medium">English Convent School</p>
              </div>
            </div>
            <p className="text-primary-foreground/90 leading-relaxed mb-4">
              Building Foundations For A Brighter Future for more than two decades. Our commitment to holistic education shapes tomorrow's leaders.
            </p>
            <div className="space-y-1 mb-6 text-sm text-primary-foreground/70">
              <p>School DISE Code: 29120202006</p>
              <p>School TT Code: TT126</p>
            </div>
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
                { href: "/gallery", label: "Gallery" },
                { href: "/achievements", label: "Achievements" },
                { href: "/alumni", label: "Alumni" },
                { href: "/careers", label: "Careers" },
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
                { label: "Pre-Primary", href: "/academics/pre-primary" },
                { label: "Primary School", href: "/academics/primary" },
                { label: "High School", href: "/academics/high-school" },
                { label: "Extra Curricular", href: "/academics" },
              ].map((program) => (
                <li key={program.label}>
                  <Link
                    to={program.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    {program.label}
                  </Link>
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
                  Shakara-Housi Road, Holalu Village,<br />
                  Hadagali Taluk, Vijayanagar Dist-583217
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary" />
                <a href="tel:+1234567890" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  +91 98765 43210
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
            © 2026 Saint Thomas English Convent School. All rights reserved.
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
    </footer >
  );
};

export default Footer;
