/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Sparkles, Terminal, Shield, Award } from "lucide-react";
import { PERSONAL_INFO } from "../data";

export default function About() {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 20 },
    },
  };

  return (
    <section
      id="about"
      className="relative py-15 bg-dark-bg overflow-hidden border-t border-white/10"
    >
      {/* Background radial highlight */}
      <div className="absolute top-[30%] left-[-10%] w-[30rem] h-[30rem] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-4 mb-16">
          <span className="text-xs font-mono tracking-widest text-white/40 flex items-center space-x-2">
            <Sparkles size={12} />
            <span>01 . MY STORY</span>
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl text-white tracking-tight uppercase">
            About Me
          </h2>
          <div className="w-12 h-px bg-white/20"></div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Elite Philosophy Quote */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 flex flex-col space-y-6"
          >
            <p className="font-display font-light text-2xl md:text-3xl lg:text-4xl leading-snug text-white/80 uppercase">
              "Developing clean, <strong className="text-white font-semibold">scalable user interfaces</strong> and delivering <strong className="text-white/40">high-performance</strong> experiences."
            </p>
            <div className="p-6 rounded-3xl glass-card border-white/10 flex flex-col space-y-4">
              <div className="flex items-center space-x-3 text-white">
                <Terminal size={18} />
                <span className="font-mono text-xs font-semibold">THE PROBLEM-SOLVER</span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                With a strong foundation in modern web technologies and continuous hands-on experience, I bring teamwork, problem solving, flexibility, creativity, and responsibility to building seamless, production-ready applications.
              </p>
            </div>
          </motion.div>

          {/* Right Side: Narrative Story paragraphs */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 flex flex-col space-y-6 text-white/60 text-md md:text-lg font-light leading-relaxed"
          >
            <p>
              Front-End Developer with <strong className="text-white font-normal">1 year of professional experience at Global Nexus</strong>, preceded by 9 months of intensive self-directed training building practice projects, <strong className="text-white font-normal">nearly two years of hands-on, continuous work with React.js and Next.js</strong>.
            </p>
            <p>
              I build clean, responsive, production-ready interfaces and integrate <strong className="text-white font-normal">REST APIs</strong> into real client websites, including multi-language and multi-market platforms for international export businesses.
            </p>
            <p>
              I handle the full cycle: design from the brand identity, development, performance/accessibility/SEO optimization, production build and server deployment.
            </p>
            <p>
              Graduated from Faculty of Commerce, Al-Azhar University (2024).
            </p>

            {/* Core Values / Badges */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6 mt-6 border-t border-white/10">
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/80">
                  <Shield size={16} />
                </div>
                <div>
                  <h4 className="text-white text-xs font-semibold font-display">Responsive UI</h4>
                  <p className="text-white/40 text-[11px] font-mono mt-0.5">Smartphones to desktops</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/80">
                  <Award size={16} />
                </div>
                <div>
                  <h4 className="text-white text-xs font-semibold font-display">Soft Skills</h4>
                  <p className="text-white/40 text-[11px] font-mono mt-0.5">Teamwork & Flexibility</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 col-span-2 md:col-span-1">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/80">
                  <Sparkles size={16} />
                </div>
                <div>
                  <h4 className="text-white text-xs font-semibold font-display">Fast Execution</h4>
                  <p className="text-white/40 text-[11px] font-mono mt-0.5">End-to-End Cycle</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}