import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const steps = [
  {
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop",
    label: "Services",
    path: "/services",
    desc: "Learn about my specialties and therapeutic approaches.",
  },
  {
    img: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=300&h=300&fit=crop",
    label: "Contact",
    path: "/contact",
    desc: "Taking the first step is the hardest part — I'm here to help.",
  },
  {
    img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=300&fit=crop",
    label: "About",
    path: "/about",
    desc: "Learn more about my background, credentials, and approach.",
  },
];

export default function GetStartedSection() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
          Ready to get started?
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-14">
          Your Path to Healing Begins Here
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Link to={step.path} className="group flex flex-col items-center gap-4">
                <div className="w-28 h-28 rounded-full overflow-hidden shadow-md group-hover:shadow-xl transition-shadow duration-300 border-4 border-accent/20">
                  <img
                    src={step.img}
                    alt={step.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                  {step.label}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                  {step.desc}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}