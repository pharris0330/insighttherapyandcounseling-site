import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { base44 } from "@/api/base44Client";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "(904) 485-0939",
    href: "tel:904-485-0939",
  },
  {
    icon: Mail,
    label: "Email",
    value: "insighttherapyandcounseling@gmail.com",
    href: "mailto:insighttherapyandcounseling@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Telehealth Available in Florida",
    href: null,
  },
  {
    icon: Clock,
    label: "Appointments",
    value: "Request online or call",
    href: "https://www.therapyportal.com/p/Insight32226/appointments/availability/#AvailabilityClinician=666417&AvailabilityLocation=334903",
  },
];

export default function Contact() {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    await base44.integrations.Core.SendEmail({
      to: "insighttherapyandcounseling@gmail.com",
      subject: `New Inquiry from ${form.name}`,
      body: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${form.name}</p>
        <p><strong>Email:</strong> ${form.email}</p>
        <p><strong>Phone:</strong> ${form.phone || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${form.message}</p>
      `,
    });

    toast({
      title: "Message Sent",
      description:
        "Thank you for reaching out. Jamaal will get back to you soon.",
    });
    setForm({ name: "", email: "", phone: "", message: "" });
    setSending(false);
  };

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
              Get In Touch
            </span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mt-3 mb-6">
              Let's <span className="italic">Connect</span>
            </h1>
            <p className="text-muted-foreground text-lg font-light">
              Taking the first step is often the hardest. Reach out today — I'm
              here to help.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
              Contact Information
            </h2>

            <div className="space-y-6 mb-10">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-foreground font-medium hover:text-accent transition-colors text-sm break-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium text-sm">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://www.therapyportal.com/p/Insight32226/appointments/availability/#AvailabilityClinician=666417&AvailabilityLocation=334903"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm font-semibold hover:bg-primary/90 transition-all duration-300"
            >
              Request Appointment Online
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card rounded-3xl p-8 md:p-10 border border-border shadow-lg">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-2">
                Send a Message
              </h2>
              <p className="text-sm text-muted-foreground mb-8">
                Fill out the form below and I'll respond within 24-48 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Input
                    placeholder="Your Name"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    className="h-12 rounded-xl bg-background"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="h-12 rounded-xl bg-background"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Phone Number (Optional)"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    className="h-12 rounded-xl bg-background"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="How can I help you?"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="rounded-xl bg-background resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={sending}
                  className="w-full h-12 rounded-xl bg-accent text-accent-foreground hover:bg-accent/90 text-sm font-semibold gap-2"
                >
                  {sending ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}