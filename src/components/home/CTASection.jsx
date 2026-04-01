import React from "react";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-24 md:py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary" />
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://media.base44.com/images/public/69c68e93e516ae05a78f406a/8b82fd9bd_generated_1cc8d10b.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-3xl mx-auto text-center"
      >
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
          Ready to Take the <span className="italic text-accent">First Step</span>?
        </h2>
        <p className="text-primary-foreground/70 text-lg font-light mb-10 max-w-xl mx-auto">
          You don't have to face life's challenges alone. Reach out today and
          let's begin your journey toward healing and growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.therapyportal.com/p/Insight32226/appointments/availability/#AvailabilityClinician=666417&AvailabilityLocation=334903"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full text-sm font-semibold hover:bg-accent/90 transition-all duration-300 hover:shadow-lg"
          >
            Request Appointment
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="tel:904-485-0939"
            className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-full text-sm font-medium hover:border-primary-foreground/60 transition-all duration-300"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </div>
      </motion.div>
    </section>
  );
}