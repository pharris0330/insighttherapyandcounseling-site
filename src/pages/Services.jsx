import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTASection from "../components/home/CTASection";
import { motion } from "framer-motion";
import {
  Brain,
  Heart,
  Users,
  Leaf,
  Shield,
  DollarSign,
  CreditCard,
  SlidersHorizontal,
  Monitor,
} from "lucide-react";

const specialties = [
  { icon: Brain, label: "Anxiety" },
  { icon: Users, label: "Couples Counseling" },
  { icon: Heart, label: "Divorce" },
  { icon: Leaf, label: "Grief or Loss" },
  { icon: Shield, label: "Men's Issues" },
];

const conditions = [
  "Abandonment",
  "Adjustment Disorder",
  "Aging Concerns",
  "Anger Management",
  "College Mental Health",
  "Depression",
  "Family Caregiving Stress",
  "Job Stress",
  "Life Transitions",
  "Marital/Pre-Marital",
  "Obsessive Compulsive Disorder (OCD)",
  "Relationship/Marriage Issues",
  "Stress",
];

const pricingDetails = [
  {
    icon: DollarSign,
    title: "Session Pricing",
    detail: "$75.00 — $225.00",
  },
  {
    icon: CreditCard,
    title: "Payments Accepted",
    detail: "Cash, Credit Cards",
  },
  {
    icon: SlidersHorizontal,
    title: "Sliding Scale",
    detail: "Available upon request",
  },
  {
    icon: Monitor,
    title: "Telehealth",
    detail: "Available throughout Florida",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-secondary/50">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <span className="text-accent text-sm font-medium tracking-widest uppercase">
              Services
            </span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mt-3 mb-6">
              Therapy <span className="italic">Tailored</span> to You
            </h1>
            <p className="text-muted-foreground text-lg font-light">
              Evidence-based approaches to help you navigate life's challenges
              and find lasting wellness.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-medium tracking-widest uppercase">
              Core Specialties
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
              Areas of Focus
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map((spec, i) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card rounded-2xl p-8 border border-border text-center hover:shadow-xl hover:border-accent/30 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                  <spec.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  {spec.label}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-20 px-6 bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-medium tracking-widest uppercase">
              Conditions
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
              What I Work With
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {conditions.map((cond, i) => (
              <motion.div
                key={cond}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="flex items-center gap-3 bg-card rounded-xl px-5 py-4 border border-border"
              >
                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">
                  {cond}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-medium tracking-widest uppercase">
              Investment
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
              Fees & Insurance
            </h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
              Direct payments only — no out of network billing services.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingDetails.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-base font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}