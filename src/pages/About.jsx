import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTASection from "../components/home/CTASection";
import { motion } from "framer-motion";
import { GraduationCap, Award, Heart, BookOpen } from "lucide-react";

const credentials = [
  {
    icon: Award,
    title: "Licensed Clinical Social Worker",
    detail: "License #SW 19010 — Florida",
  },
  {
    icon: GraduationCap,
    title: "Master's in Social Work",
    detail: "Florida State University, 2013",
  },
  {
    icon: BookOpen,
    title: "Bachelor's in Family, Youth & Community Sciences",
    detail: "University of Florida, 2006",
  },
  {
    icon: Heart,
    title: "NPI Number",
    detail: "1124787882",
  },
];

const approaches = [
  "Cognitive Behavioral Therapy (CBT)",
  "Motivational Interviewing",
  "Narrative Therapy",
  "Person-Centered (Rogerian)",
  "Rational Emotive Behavior (REBT)",
  "Solution Focused Brief Therapy (SFBT)",
  "Supportive Therapy",
  "Eclectic Therapy",
  "Clinical Supervision",
  "Premarital Counseling",
];

export default function About() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <span className="text-accent text-sm font-medium tracking-widest uppercase">
              About
            </span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mt-3 mb-6">
              Jamaal Powell, <span className="italic">LCSW, QSW</span>
            </h1>
            <p className="text-muted-foreground text-lg font-light leading-relaxed">
              Licensed Clinical Social Worker dedicated to providing
              compassionate, evidence-based therapy that empowers individuals to
              achieve mental wellness and personal growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Image */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-3xl overflow-hidden shadow-xl bg-secondary">
              <img
                src="https://media.base44.com/images/public/69c68e93e516ae05a78f406a/68359de1d_image.png"
                alt="Jamaal Powell, LCSW"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              My <span className="italic text-accent">Mission</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              To provide compassionate, evidence-based therapy and counseling
              services that empower individuals to achieve mental wellness and
              personal growth.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I work with adults and elders (65+) from diverse backgrounds,
              including Black or African American, Hispanic or Latinx, and White
              communities. I believe everyone deserves a safe, non-judgmental
              space to explore their thoughts, feelings, and challenges.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Telehealth services are available throughout the state of Florida,
              making quality mental health care accessible from the comfort of
              your own space.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 px-6 bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-medium tracking-widest uppercase">
              Credentials
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
              Education & Licenses
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {credentials.map((cred, i) => (
              <motion.div
                key={cred.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <cred.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {cred.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {cred.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approaches */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-medium tracking-widest uppercase">
              Therapeutic Approaches
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
              How I Work
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {approaches.map((approach, i) => (
              <motion.span
                key={approach}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="px-5 py-2.5 rounded-full border border-border bg-card text-sm text-foreground font-medium hover:border-accent/30 hover:bg-accent/5 transition-all duration-300"
              >
                {approach}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}