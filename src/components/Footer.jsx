import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-semibold mb-3">
              Insight
            </h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Therapy and Counseling Services, LLC.
              <br />
              Compassionate, evidence-based therapy empowering individuals to
              achieve mental wellness and personal growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-medium mb-4">
              Quick Links
            </h4>
            <div className="space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-medium mb-4">
              Get in Touch
            </h4>
            <div className="space-y-3">
              <a
                href="tel:904-485-0939"
                className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4 text-accent" />
                (904) 485-0939
              </a>
              <a
                href="mailto:insighttherapyandcounseling@gmail.com"
                className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4 text-accent" />
                insighttherapyandcounseling@gmail.com
              </a>
              <div className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                Telehealth Available in Florida
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Insight Therapy and Counseling
            Services, LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}