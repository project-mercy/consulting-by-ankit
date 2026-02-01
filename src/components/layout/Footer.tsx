import { Link } from "react-router-dom";
import { Linkedin, Twitter, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="text-xl font-semibold">
              Consulting<span className="text-primary">.</span>
            </Link>
            <p className="mt-4 text-secondary-foreground/80 max-w-md">
              Helping businesses thrive through strategic consulting in Technology, 
              Business Strategy, and Sustainability.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/projects" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/book" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Book a Call
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-secondary-foreground/80 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-secondary-foreground/80 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:hello@example.com"
                className="text-secondary-foreground/80 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-secondary-foreground/20 text-center text-secondary-foreground/60 text-sm">
          <p>© {new Date().getFullYear()} Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
