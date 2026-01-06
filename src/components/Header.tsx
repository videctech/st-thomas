import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  {
    href: "/academics",
    label: "Academics",
    subLinks: [
      { href: "/academics/pre-primary", label: "Pre-Primary" },
      { href: "/academics/primary", label: "Primary School" },
      { href: "/academics/high-school", label: "High School" },
    ]
  },
  { href: "/admissions", label: "Admissions" },
  { href: "/gallery", label: "Gallery" },
  { href: "/achievements", label: "Achievements" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">+91 98765 43210</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <a href="mailto:info@stthomas.edu" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">info@stthomas.edu</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-card shadow-soft py-4 px-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-xl">ST</span>
            </div>
            <div className="hidden md:block">
              <h1 className="font-display text-lg font-bold text-primary leading-tight">Saint Thomas</h1>
              <p className="text-xs text-muted-foreground">English Convent School</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group">
                <Link
                  to={link.href}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-1 ${location.pathname === link.href || location.pathname.startsWith(link.href + "/")
                    ? "bg-secondary text-secondary-foreground"
                    : "text-foreground hover:bg-muted"
                    }`}
                >
                  {link.label}
                  {link.subLinks && <ChevronDown className="w-4 h-4" />}
                </Link>

                {link.subLinks && (
                  <div className="absolute top-full left-0 w-48 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                    <div className="bg-card shadow-lg rounded-lg border border-border overflow-hidden">
                      {link.subLinks.map((subLink) => (
                        <Link
                          key={subLink.href}
                          to={subLink.href}
                          className="block px-4 py-3 text-sm text-foreground hover:bg-muted hover:text-secondary transition-colors"
                        >
                          {subLink.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="hero" asChild>
              <Link to="/admissions">Apply Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-card shadow-medium border-t border-border animate-fade-up">
            <div className="container mx-auto py-4 px-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    to={link.href}
                    className={`block px-4 py-3 rounded-lg font-medium transition-all ${location.pathname === link.href
                      ? "bg-secondary text-secondary-foreground"
                      : "text-foreground hover:bg-muted"
                      }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {link.subLinks && (
                    <div className="ml-4 flex flex-col gap-1 border-l-2 border-border pl-2 mt-1">
                      {link.subLinks.map((subLink) => (
                        <Link
                          key={subLink.href}
                          to={subLink.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subLink.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button variant="hero" className="mt-2" asChild>
                <Link to="/admissions" onClick={() => setIsMobileMenuOpen(false)}>
                  Apply Now
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
