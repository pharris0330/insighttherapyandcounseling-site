import React from "react";
import { Link } from "react-router-dom";
import { Heart, Users, Brain, Leaf, Shield, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const specialties = [
  {
    icon: Brain,
    title: "Anxiety",
    description:
      "Evidence-based approaches to help manage anxiety and regain control of your life.",
  },
  {
    icon: Heart,
    title: "Depression",
    description:
      "Compassionate support to navigate depression and rediscover hope and joy.",
  },
  {
    icon: Users,
    title: "Couples Counseling",
    description:
      "Strengthen your relationship through improved communication and understanding.",
  },
  {
    icon: Leaf,
    title: "Grief & Loss",
    description:
      "Gentle guidance through the process of grief, honoring your unique journey.",
  },
  {
    icon: Shield,
    title: "Men's Issues",
    description:
      "A safe space to explore challenges unique to men's mental health and identity.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function SpecialtiesPreview() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-medium tracking-widest uppercase">
            Areas of Focus
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            How I Can Help
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg font-light">
            Specializing in evidence-based therapeutic approaches tailored to
            your unique needs.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {specialties.map((spec) => (
            <motion.div
              key={spec.title}
              variants={item}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-accent/30 hover:shadow-xl transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <spec.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {spec.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {spec.description}
              </p>
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.div variants={item}>
            <Link
              to="/services"
              className="group flex flex-col items-center justify-center bg-primary rounded-2xl p-8 h-full text-center hover:shadow-xl transition-all duration-500"
            >
              <h3 className="font-heading text-xl font-semibold text-primary-foreground mb-3">
                View All Services
              </h3>
              <p className="text-primary-foreground/70 text-sm mb-4">
                Explore all conditions and therapeutic approaches
              </p>
              <ArrowRight className="w-5 h-5 text-accent group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}