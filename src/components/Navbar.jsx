import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-background"
      }`}
    >
      {/* Top centered logo */}
      <div className="max-w-6xl mx-auto px-6 pt-5 pb-2 flex flex-col items-center">
        <Link to="/" className="flex flex-col items-center gap-1 mb-3">
          <img
            src="https://media.base44.com/images/public/69c68e93e516ae05a78f406a/02ebce721_generated_3963f23d.png"
            alt="Insight Therapy Logo"
            className="w-14 h-14 rounded-full"
          />
          <span className="font-heading text-xl font-semibold text-foreground tracking-wide leading-none">
            Insight
          </span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            Therapy & Counseling Services, LLC
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-10 border-t border-border w-full justify-center pt-3 pb-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors duration-300 hover:text-accent ${
                location.pathname === link.path
                  ? "text-accent"
                  : "text-foreground/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://www.therapyportal.com/p/Insight32226/appointments/availability/#AvailabilityClinician=666417&AvailabilityLocation=334903"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-accent hover:text-accent/80 transition-colors"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden absolute top-5 right-6 p-2 text-foreground"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-border overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block text-base font-medium transition-colors ${
                    location.pathname === link.path
                      ? "text-accent"
                      : "text-foreground/70"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://www.therapyportal.com/p/Insight32226/appointments/availability/#AvailabilityClinician=666417&AvailabilityLocation=334903"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-base font-medium text-accent"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}