import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter, Phone, Mail, MessageCircle } from "lucide-react";

// Import your logo from the public folder
// Note: Because it's in /public, we can just use the path directly in <img src="...">
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/assets/img/branding/favicon-32x32.png"
                alt="ReachRight Marketing"
                width="40"
                height="40"
                className="rounded-lg"
              />
              <span className="font-bold text-xl text-foreground">ReachRight Marketing</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Empowering businesses with innovative digital marketing solutions. Founded in 2023, 
              we specialize in helping SMEs and growing businesses reach their full potential.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="block text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/services" className="block text-muted-foreground hover:text-primary transition-colors">
                Services
              </Link>
              <Link to="/pricing" className="block text-muted-foreground hover:text-primary transition-colors">
                Pricing
              </Link>
              <Link to="/testimonials" className="block text-muted-foreground hover:text-primary transition-colors">
                Testimonials
              </Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a
                href="mailto:jonathanavis96@gmail.com"
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email Us Here
              </a>
              <a
                href="tel:+27822227457"
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                +27 82 222 7457
              </a>
              <a
                href="https://wa.me/27765864469"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Us Here
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © {currentYear} ReachRight Marketing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
