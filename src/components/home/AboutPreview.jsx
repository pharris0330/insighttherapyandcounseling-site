import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPreview() {
  return (
    <section className="py-20 px-6 bg-secondary/40">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://media.base44.com/images/public/69c68e93e516ae05a78f406a/68359de1d_image.png"
                alt="Jamaal Powell, LCSW"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
              Hi, I'm Jamaal Powell
            </h2>
            <div className="w-16 h-0.5 bg-accent mb-5" />
            <p className="text-muted-foreground text-base font-medium mb-2">
              Licensed Clinical Social Worker & Therapist
            </p>
            <p className="text-muted-foreground leading-relaxed mb-5 text-base">
              I am a Licensed Clinical Social Worker dedicated to providing compassionate,
              evidence-based therapy that empowers individuals to achieve mental wellness
              and personal growth.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-5 text-base">
              I work with adults and elders (65+) from diverse backgrounds. My approach
              is eclectic — drawing from CBT, Motivational Interviewing, Narrative Therapy,
              and Solution-Focused Brief Therapy — customized to your unique needs.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 text-base">
              Telehealth services are available throughout the state of Florida, making
              quality mental health care accessible wherever you are.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all duration-300"
            >
              Meet Jamaal
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}