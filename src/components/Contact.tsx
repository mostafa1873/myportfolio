import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, Github, Linkedin, Copy, Check, Send, Sparkles, ArrowUp } from "lucide-react";
import { PERSONAL_INFO } from "../data";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
      return;
    }

    setIsSubmitting(true);
    // Simulate API Submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 4000);
    }, 1500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="contact"
      className="relative pt-24 pb-12 bg-dark-bg overflow-hidden border-t border-white/10"
    >
      {/* Background neon ambient highlight */}
      <div className="absolute bottom-[-10%] right-[5%] w-[40rem] h-[40rem] rounded-full bg-orange-500/5 blur-[180px] pointer-events-none"></div>
      <div className="absolute top-[20%] left-[-10%] w-[30rem] h-[30rem] rounded-full bg-blue-500/5 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Huge Display Heading */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 mb-12 sm:mb-16">
          <span className="text-xs font-mono tracking-widest text-white/40 flex items-center justify-center md:justify-start space-x-2">
            <Sparkles size={12} />
            <span>07 . START A COLLABORATION</span>
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-tight md:leading-none max-w-4xl uppercase">
            Let's Build Something <br className="hidden xs:inline" />
            <span className="text-white/50">Great Together</span>
          </h2>
          <div className="w-16 h-px bg-white/20 mt-2 sm:mt-4 mx-auto md:mx-0"></div>
        </div>

        {/* Contact Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16 sm:mb-24">
          {/* Left: Contact Info details & handles */}
          <div className="lg:col-span-5 flex flex-col space-y-6 sm:space-y-8 text-center md:text-left items-center md:items-start">
            <p className="text-white/60 text-base sm:text-lg font-light leading-relaxed max-w-md">
              Whether you want to construct an enterprise system, high-converting product lander, or have hardware-logic technical inquiries — reach out. Let’s make it real.
            </p>

            {/* Address cards with Copy-to-clipboard functionality */}
            <div className="space-y-4 w-full">
              {/* Email Address */}
              <div className="group flex items-center justify-between p-4 sm:p-6 rounded-3xl glass-card border-white/10 hover:border-white/20 transition-all text-left">
                <div className="flex items-center space-x-3 sm:space-x-4 min-w-0 pr-2">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-[10px] font-mono tracking-widest text-white/40 uppercase">EMAIL ADDRESS</h4>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-white text-xs sm:text-sm font-semibold hover:text-white/80 transition-colors block truncate">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.email, "email")}
                  className="p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white/60 hover:text-white transition-all cursor-pointer shrink-0"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                </button>
              </div>

              {/* Phone Dial */}
              <div className="group flex items-center justify-between p-4 sm:p-6 rounded-3xl glass-card border-white/10 hover:border-white/20 transition-all text-left">
                <div className="flex items-center space-x-3 sm:space-x-4 min-w-0 pr-2">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 shrink-0">
                    <Phone size={18} />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-[10px] font-mono tracking-widest text-white/40 uppercase">PHONE NUMBER</h4>
                    <a href={`tel:${PERSONAL_INFO.phone}`} className="text-white text-xs sm:text-sm font-semibold hover:text-white/80 transition-colors block truncate">
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(PERSONAL_INFO.phone, "phone")}
                  className="p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white/60 hover:text-white transition-all cursor-pointer shrink-0"
                  title="Copy Phone"
                >
                  {copiedPhone ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                </button>
              </div>
            </div>

            {/* Social Accounts links */}
            <div className="space-y-3 pt-2 sm:pt-4 flex flex-col items-center md:items-start w-full">
              <h4 className="text-[10px] font-mono tracking-widest text-white/40 uppercase">SOCIAL NETWORKS</h4>
              <div className="flex items-center space-x-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Mostafa Osama GitHub Profile"
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black hover:-translate-y-1 transition-all text-white/60 shadow-lg"
                >
                  <Github size={18} />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Mostafa Osama LinkedIn Profile"
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-blue-500 hover:-translate-y-1 transition-all text-white/60 shadow-lg"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Premium Interactive Contact Form */}
          <div className="lg:col-span-7 w-full">
            <form onSubmit={handleFormSubmit} className="p-5 sm:p-8 md:p-10 rounded-3xl glass-card border-white/10 space-y-5 sm:space-y-6 relative overflow-hidden text-left">
              <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-2">Send a Message</h3>
              <p className="text-white/30 text-xs font-mono">FILLING OUT THE SECURE FORM AUTOMATICALLY CHANNELS YOUR REQUESTS DIRECTLY</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[10px] font-mono tracking-widest text-white/40 uppercase font-bold">YOUR NAME</label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] font-mono tracking-widest text-white/40 uppercase font-bold">YOUR EMAIL</label>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="e.g. john@example.com"
                    className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] font-mono tracking-widest text-white/40 uppercase font-bold">YOUR MESSAGE</label>
                <textarea
                  id="message"
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="How can we help you? Describe your product goals, timeline, or inquiries..."
                  className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all resize-none"
                />
              </div>

              {/* Submit Buttons / Feedback states */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send size={14} />
                    </>
                  )}
                </button>

                {/* Status indicators */}
                <AnimatePresence mode="wait">
                  {submitStatus === "success" && (
                    <motion.p
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="text-green-400 font-mono text-xs flex items-center space-x-1.5"
                    >
                      <Check size={14} />
                      <span>Message sent successfully!</span>
                    </motion.p>
                  )}
                  {submitStatus === "error" && (
                    <motion.p
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="text-red-400 font-mono text-xs"
                    >
                      Please complete all required fields.
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </div>
        </div>

        {/* Footer Area */}
        <div className="pt-8 sm:pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-white/40 text-center md:text-left">
          <p>© {new Date().getFullYear()} Mostafa Osama. All rights reserved. Crafted with precision.</p>

          <div className="flex flex-wrap items-center justify-center space-x-4 sm:space-x-6">
            <a href="#about" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#projects" className="hover:text-white transition-colors">Client Agreements</a>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white/60 hover:text-white flex items-center justify-center transition-all cursor-pointer"
              aria-label="Scroll back to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
