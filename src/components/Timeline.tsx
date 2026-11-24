/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Briefcase, Calendar, CheckCircle, Sparkles } from "lucide-react";
import { EXPERIENCES } from "../data";

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="relative py-15 bg-dark-bg overflow-hidden border-t border-white/10"
    >
      {/* Background Glow */}
      <div className="absolute top-[20%] left-[5%] w-[25rem] h-[25rem] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-14 sm:mb-20">
          <span className="text-xs font-mono tracking-widest text-white/40 flex items-center justify-center space-x-2">
            <Sparkles size={12} />
            <span>03 . PROFESSIONAL RECORD</span>
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase">
            Career Timeline
          </h2>
          <div className="w-12 h-px bg-white/20 mx-auto"></div>
        </div>

        {/* Vertical Timeline Track Container */}
        <div className="relative border-l-2 border-white/10 ml-2 xs:ml-4 md:ml-32 pl-5 xs:pl-7 md:pl-12 space-y-12 sm:space-y-16">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[29px] xs:-left-[37px] md:-left-[57px] top-1.5 w-4 h-4 xs:w-5 xs:h-5 rounded-full bg-black border-2 border-white/30 flex items-center justify-center z-10 group-hover:bg-white transition-colors duration-300">
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              </div>

              {/* Glowing Ambient Dot behind nodes */}
              <div className="absolute -left-[33px] xs:-left-[41px] md:-left-[61px] top-0.5 w-6 h-6 xs:w-7 xs:h-7 rounded-full bg-white/10 blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              {/* Left-Side Desktop Year Indicator */}
              <div className="hidden md:block absolute -left-44 top-1.5 w-28 text-right">
                <span className="font-mono text-xs font-bold text-white/40 tracking-wider">
                  {exp.years}
                </span>
              </div>

              {/* Core Content Card */}
              <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl glass-card border-white/10 hover:border-white/20 transition-all duration-300 relative group text-left">
                <div className="flex flex-col space-y-4">
                  {/* Title & Organization */}
                  <div>
                    <span className="md:hidden font-mono text-xs font-bold text-white/40 tracking-wider block mb-2">
                      {exp.years}
                    </span>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <h3 className="font-display font-black text-lg sm:text-xl text-white transition-colors">
                        {exp.role}
                      </h3>
                      <span className="text-[10px] font-mono tracking-widest px-2.5 py-1 rounded bg-white/5 text-white/50 border border-white/10 uppercase self-start sm:self-center">
                        {index === 0 ? "CURRENT" : "HISTORIC"}
                      </span>
                    </div>
                    <p className="text-white/60 font-display font-medium text-sm mt-1">
                      {exp.company}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-white/60 text-xs sm:text-sm font-light leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Bullet Achievements */}
                  <div className="space-y-2.5 pt-4 border-t border-white/10">
                    <h4 className="text-[10px] font-mono tracking-widest text-white/30 font-bold uppercase">
                      KEY ACHIEVEMENTS & CONTRIBUTIONS:
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((ach, i) => (
                        <li key={i} className="flex items-start space-x-2.5 text-xs text-white/50 leading-relaxed">
                          <span className="mt-1 text-white/60 shrink-0">
                            <CheckCircle size={12} />
                          </span>
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
