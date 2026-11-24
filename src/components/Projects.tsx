/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github, Sparkles, Folder } from "lucide-react";
import { PROJECTS } from "../data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-15 bg-dark-bg overflow-hidden border-t border-white/10"
    >
      {/* Background Glowing Orb */}
      <div className="absolute top-[50%] right-[10%] w-[35rem] h-[35rem] rounded-full bg-blue-500/5 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 mb-12 sm:mb-16">
          <span className="text-xs font-mono tracking-widest text-white/40 flex items-center justify-center md:justify-start space-x-2">
            <Sparkles size={12} />
            <span>04 . WORKS & CASES</span>
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase">
            Selected Projects
          </h2>
          <div className="w-12 h-px bg-white/20 mx-auto md:mx-0"></div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {PROJECTS.map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                key={project.id}
                className="group flex flex-col justify-between rounded-3xl overflow-hidden glass-card border-white/10 hover:border-white/20 transition-all duration-300 h-full relative text-left"
              >
                <div>
                  {/* Aspect Ratio 4:3 Image container with scales */}
                  <div className="relative aspect-video w-full overflow-hidden bg-neutral-900 border-b border-white/10">
                    <img
                      src={project.image}
                      alt={`${project.title} website mockup`}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Category overlay */}
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                      <span className="px-2.5 sm:px-3 py-1 text-[10px] font-mono tracking-widest uppercase bg-black/80 text-white rounded-full border border-white/10 backdrop-blur-md">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Title & description info */}
                  <div className="p-5 sm:p-6 md:p-8 space-y-3 sm:space-y-4">
                    <h3 className="font-display font-black text-xl sm:text-2xl text-white transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/60 text-xs sm:text-sm font-light leading-relaxed">
                      {project.longDescription || project.description}
                    </p>
                  </div>
                </div>

                {/* Footer stack & links */}
                <div className="p-5 sm:p-6 md:p-8 pt-0 space-y-5 sm:space-y-6">
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 sm:px-2.5 py-1 rounded-lg bg-white/5 text-white/50 font-mono text-[9px] sm:text-[10px] uppercase border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Dual buttons */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 pt-4 border-t border-white/10">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-3 rounded-2xl bg-white text-black font-display text-xs font-bold text-center hover:bg-neutral-200 transition-colors flex items-center justify-center space-x-2"
                      aria-label={`Visit live demo for ${project.title}`}
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={14} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-3 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-display text-xs font-bold text-center transition-colors flex items-center justify-center space-x-2 border border-white/10"
                      aria-label={`View repository for ${project.title}`}
                    >
                      <Github size={14} />
                      <span>Repository</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}