"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate contact form submission
    setTimeout(() => {
      setStatus("success");
      setFormState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-dark-bg/50 relative">
      {/* Decorative Blob */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent-purple/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-10 bg-dark-card border border-accent-purple/10 rounded-3xl shadow-xl relative"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3 text-gradient-purple inline-block">
              Let's work together!
            </h2>
            <p className="text-sm sm:text-base text-accent-light mb-8 max-w-md">
              I design and code beautifully simple things, and I love what I do. Just simple like that!
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    placeholder="First name"
                    required
                    value={formState.firstName}
                    onChange={(e) => setFormState({ ...formState, firstName: e.target.value })}
                    className="w-full px-5 py-3.5 bg-dark-bg border border-accent-purple/15 rounded-xl text-white placeholder-accent-light/50 focus:outline-hidden focus:border-accent-purple transition-colors duration-300"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last name"
                    required
                    value={formState.lastName}
                    onChange={(e) => setFormState({ ...formState, lastName: e.target.value })}
                    className="w-full px-5 py-3.5 bg-dark-bg border border-accent-purple/15 rounded-xl text-white placeholder-accent-light/50 focus:outline-hidden focus:border-accent-purple transition-colors duration-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <input
                    type="email"
                    placeholder="Email address"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-5 py-3.5 bg-dark-bg border border-accent-purple/15 rounded-xl text-white placeholder-accent-light/50 focus:outline-hidden focus:border-accent-purple transition-colors duration-300"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone number"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    className="w-full px-5 py-3.5 bg-dark-bg border border-accent-purple/15 rounded-xl text-white placeholder-accent-light/50 focus:outline-hidden focus:border-accent-purple transition-colors duration-300"
                  />
                </div>
              </div>

              <div>
                <select
                  required
                  value={formState.service}
                  onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                  className="w-full px-5 py-3.5 bg-dark-bg border border-accent-purple/15 rounded-xl text-white placeholder-accent-light/50 focus:outline-hidden focus:border-accent-purple transition-colors duration-300 appearance-none cursor-pointer"
                >
                  <option value="" disabled>
                    —Please choose an option—
                  </option>
                  <option value="branding">Branding Design</option>
                  <option value="uiux">UI/UX Design</option>
                  <option value="web">Web Design</option>
                  <option value="app">App Design</option>
                </select>
              </div>

              <div>
                <textarea
                  rows={4}
                  placeholder="Message"
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-5 py-3.5 bg-dark-bg border border-accent-purple/15 rounded-xl text-white placeholder-accent-light/50 focus:outline-hidden focus:border-accent-purple transition-colors duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-4 rounded-xl bg-linear-to-r from-accent-purple to-accent-dark text-white font-bold tracking-wide shadow-[0_0_15px_rgba(135,80,247,0.3)] hover:shadow-[0_0_25px_rgba(135,80,247,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer disabled:opacity-70 disabled:pointer-events-none"
              >
                {status === "sending" ? "Sending Message..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-green-400 text-sm font-semibold text-center mt-2 animate-bounce">
                  ✓ Message sent successfully! I will contact you soon.
                </p>
              )}
            </form>
          </motion.div>

          {/* Details Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-10 mt-6 lg:mt-12"
          >
            {[
              {
                icon: <Phone className="w-5 h-5 text-white" />,
                label: "Phone",
                value: "+01 123 456 789",
              },
              {
                icon: <Mail className="w-5 h-5 text-white" />,
                label: "Email",
                value: "mail@gerolddesign.com",
              },
              {
                icon: <MapPin className="w-5 h-5 text-white" />,
                label: "Address",
                value: "Warrington, United Kingdom",
              },
            ].map((detail, index) => (
              <div key={index} className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-linear-to-b from-accent-purple to-accent-dark flex items-center justify-center shadow-[0_0_15px_rgba(135,80,247,0.3)] group-hover:scale-105 transition-transform duration-300">
                  {detail.icon}
                </div>
                <div>
                  <span className="text-xs text-accent-light block mb-1">
                    {detail.label}
                  </span>
                  <span className="text-lg font-bold text-white group-hover:text-accent-purple transition-colors duration-300">
                    {detail.value}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
