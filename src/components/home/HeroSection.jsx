import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full" style={{ marginTop: "160px" }}>
      {/* Full-width background image */}
      <div className="relative w-full h-[60vh] md:h-[75vh] overflow-hidden">
        <img
          src="https://media.base44.com/images/public/69c68e93e516ae05a78f406a/358f4c501_generated_14a1d59e.png"
          alt="Therapy office"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/60" />

        {/* Centered text overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
              Welcome to<br />
              <span className="italic text-accent">Insight Therapy</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl font-light max-w-xl mx-auto mb-8">
              Compassionate, evidence-based therapy for mental wellness and personal growth.
            </p>
            <a
              href="https://www.therapyportal.com/p/Insight32226/appointments/availability/#AvailabilityClinician=666417&AvailabilityLocation=334903"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full text-sm font-semibold hover:bg-accent/90 transition-all duration-300 hover:shadow-lg"
            >
              Request Appointment
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}