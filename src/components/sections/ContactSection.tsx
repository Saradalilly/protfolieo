"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactSection() {
  const { personal } = PORTFOLIO_DATA;
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate contact form dispatch
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setSubmitted(true);
    reset();

    // Trigger confetti celebration
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch (e) {
      console.log("Confetti triggered", e);
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10 bg-slate-900/10 dark:bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border-emerald-500/30 text-xs font-mono text-emerald-400"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight"
          >
            Let's Build Something <span className="text-gradient">Great Together</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 text-base sm:text-lg"
          >
            Whether you have a full-time role, project query, or collaboration opportunity, I'd love to hear from you!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
          
          {/* Left Column: Quick Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-card rounded-3xl p-8 border-slate-700/40 space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Feel free to reach out directly via email, phone, or LinkedIn. I usually respond within 24 hours.
              </p>

              <div className="space-y-4 pt-2">
                {/* Email */}
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/50 border border-slate-700/40 hover:border-emerald-500/50 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-emerald-500/15 text-emerald-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-mono">Email Address</p>
                    <p className="text-sm font-bold text-slate-200 group-hover:text-emerald-400 transition-colors">
                      {personal.email}
                    </p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${personal.phone}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/50 border border-slate-700/40 hover:border-cyan-500/50 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-cyan-500/15 text-cyan-400 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-mono">Phone Number</p>
                    <p className="text-sm font-bold text-slate-200 group-hover:text-cyan-400 transition-colors">
                      {personal.phone}
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/50 border border-slate-700/40">
                  <div className="p-3 rounded-xl bg-indigo-500/15 text-indigo-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-mono">Location</p>
                    <p className="text-sm font-bold text-slate-200">
                      {personal.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="pt-4 border-t border-slate-700/30 flex items-center gap-3">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-3 rounded-xl glass-card text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-all"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-3 rounded-xl glass-card text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="glass-card rounded-3xl p-8 border-slate-700/40 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Send Me a Message
              </h3>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
                  <h4 className="text-lg font-bold text-emerald-400">Message Received!</h4>
                  <p className="text-xs text-slate-300">
                    Thank you for reaching out, {personal.firstName} will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 rounded-xl bg-slate-800 text-xs font-bold text-emerald-400 hover:bg-slate-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1">
                      <label className="text-xs font-mono text-slate-400 font-semibold">Your Name *</label>
                      <input
                        {...register("name", { required: "Name is required" })}
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-700/50 text-slate-200 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                      {errors.name && <p className="text-[11px] text-red-400">{errors.name.message}</p>}
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                      <label className="text-xs font-mono text-slate-400 font-semibold">Your Email *</label>
                      <input
                        {...register("email", {
                          required: "Email is required",
                          pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
                        })}
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-700/50 text-slate-200 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                      />
                      {errors.email && <p className="text-[11px] text-red-400">{errors.email.message}</p>}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-400 font-semibold">Subject *</label>
                    <input
                      {...register("subject", { required: "Subject is required" })}
                      type="text"
                      placeholder="Full Stack Developer Opportunity"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-700/50 text-slate-200 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                    {errors.subject && <p className="text-[11px] text-red-400">{errors.subject.message}</p>}
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-400 font-semibold">Message *</label>
                    <textarea
                      {...register("message", { required: "Message is required" })}
                      rows={5}
                      placeholder="Hi Sarada, I would like to discuss a project..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-700/50 text-slate-200 text-sm focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                    />
                    {errors.message && <p className="text-[11px] text-red-400">{errors.message.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-indigo-500 text-slate-950 font-bold text-sm shadow-xl shadow-emerald-500/25 hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">Sending Message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
