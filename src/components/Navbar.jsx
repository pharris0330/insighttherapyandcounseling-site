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
        scrolled
          ? "bg-primary/98 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.4)]"
          : "bg-primary"
      }`}
    >
      {/* Top centered logo */}
      <div className="max-w-6xl mx-auto px-6 pt-4 pb-2 flex flex-col items-center">
        <Link to="/" className="flex flex-col items-center gap-1 mb-3 group">
          <img
            src="/insight-logo.png"
            alt="Insight Therapy and Counseling Logo"
            className="w-16 h-16 object-contain drop-shadow-[0_0_8px_rgba(240,192,64,0.3)]"
            onError={(e) => {
              // Fallback: render SVG brain-tree icon inline if image fails
              e.target.style.display = "none";
            }}
          />
          {/* Fallback SVG logo if image not found */}
          <svg
            className="w-16 h-16 hidden"
            id="logo-fallback"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50 85 L50 55 M50 55 C50 55 35 45 30 30 C25 15 38 8 50 20 C62 8 75 15 70 30 C65 45 50 55 50 55Z"
              stroke="#F0C040"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
          <span className="font-heading text-2xl font-bold text-accent tracking-widest uppercase leading-none">
            INSIGHT
          </span>
          <span className="text-[9px] uppercase tracking-[0.3em] text-accent/60">
            Therapy & Counseling
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-10 border-t border-accent/20 w-full justify-center pt-3 pb-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium tracking-wider uppercase transition-colors duration-300 hover:text-accent ${
                location.pathname === link.path
                  ? "text-accent"
                  : "text-accent/50"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://www.therapyportal.com/p/Insight32226/appointments/availability/#AvailabilityClinician=666417&AvailabilityLocation=334903"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold tracking-wider uppercase px-5 py-1.5 border border-accent/60 text-accent rounded-full hover:bg-accent hover:text-primary transition-all duration-300"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden absolute top-5 right-6 p-2 text-accent"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-primary border-t border-accent/20 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium tracking-wider uppercase transition-colors ${
                    location.pathname === link.path
                      ? "text-accent"
                      : "text-accent/50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://www.therapyportal.com/p/Insight32226/appointments/availability/#AvailabilityClinician=666417&AvailabilityLocation=334903"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold tracking-wider uppercase px-5 py-2 border border-accent/60 text-accent rounded-full text-center hover:bg-accent hover:text-primary transition-all duration-300"
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
