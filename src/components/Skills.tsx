/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "motion/react";
import { Cpu, Layers, Workflow, Sparkles } from "lucide-react";
import { SKILLS } from "../data";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<"all" | "frontend" | "workflow">("all");

  const categories = [
    { id: "all", name: "All Expertise", icon: Cpu },
    { id: "frontend", name: "Frontend Mastery", icon: Layers },
    { id: "workflow", name: "Workflow & Strategy", icon: Workflow },
  ];

  const filteredSkills = SKILLS.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section
      id="skills"
      className="relative py-15 bg-dark-bg overflow-hidden border-t border-white/10"
    >
      {/* Background ambient highlights */}
      <div className="absolute top-[40%] right-[-10%] w-[30rem] h-[30rem] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col items-start space-y-4">
            <span className="text-xs font-mono tracking-widest text-white/40 flex items-center space-x-2">
              <Sparkles size={12} />
              <span>02 . CAPABILITIES</span>
            </span>
            <h2 className="font-display font-black text-4xl md:text-5xl text-white tracking-tight uppercase">
              My Tech Stack
            </h2>
            <div className="w-12 h-px bg-white/20"></div>
          </div>

          {/* Filtering Tab buttons */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as any)}
                  className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl font-display text-xs font-semibold transition-all duration-300 relative cursor-pointer ${
                    isActive ? "text-black" : "text-white/60 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSkillCategory"
                      className="absolute inset-0 bg-white rounded-xl"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <Icon size={14} className="relative z-10" />
                  <span className="relative z-10">{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSkills.map((skill) => (
            <motion.div
              layout
              key={skill.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="group p-6 rounded-3xl glass-card border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between space-y-6 relative overflow-hidden"
            >
              {/* Subtle hover gradient glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/0 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-bold text-lg text-white transition-colors">
                    {skill.name}
                  </h3>
                  <span className="font-mono text-xs font-semibold text-white/50">
                    {skill.level}%
                  </span>
                </div>
                <p className="text-white/60 text-xs font-light leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {/* Progress Bar Container */}
              <div className="space-y-2 pt-2">
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="h-full bg-white rounded-full"
                  />
                </div>
                <div className="flex justify-between items-center text-[9px] font-mono tracking-wider text-white/30">
                  <span>FOUNDATION</span>
                  <span>MASTERY</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
