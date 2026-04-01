import React from "react";
import { motion } from "framer-motion";

export default function QuoteSection() {
  return (
    <section className="py-20 px-6 bg-primary">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto text-center"
      >
        <p className="font-heading text-2xl md:text-3xl italic text-primary-foreground/90 leading-relaxed mb-6">
          "You don't have to control your thoughts. You just have to stop letting them control you."
        </p>
        <p className="text-primary-foreground/50 text-sm tracking-widest uppercase">
          — Dan Millman
        </p>
        <p className="text-primary-foreground/70 text-base mt-8 max-w-xl mx-auto leading-relaxed">
          You don't have to face life's challenges alone. Whether you're navigating anxiety,
          grief, or simply feeling stuck — I'm here to help you find clarity, build
          resilience, and move forward with confidence.
        </p>
      </motion.div>
    </section>
  );
}