import { motion } from "motion/react";
import { Code, Compass, ShoppingBag, Search, Monitor, Sparkles, ArrowRight } from "lucide-react";
import { SERVICES } from "../data";

// Map icon names to Lucide icons
const iconMap: Record<string, any> = {
  Code: Code,
  Compass: Compass,
  ShoppingBag: ShoppingBag,
  Search: Search,
  Monitor: Monitor,
};

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 20 },
    },
  };

  return (
    <section
      id="services"
      className="relative py-15 bg-dark-bg overflow-hidden border-t border-white/10"
    >
      {/* Background ambient light */}
      <div className="absolute top-[30%] left-[20%] w-[30rem] h-[30rem] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-4 mb-20">
          <span className="text-xs font-mono tracking-widest text-white/40 flex items-center space-x-2">
            <Sparkles size={12} />
            <span>05 . PROFESSIONAL OFFERINGS</span>
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl text-white tracking-tight uppercase">
            Services I Offer
          </h2>
          <div className="w-12 h-px bg-white/20"></div>
        </div>

        {/* Services Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {SERVICES.map((srv, index) => {
            const IconComponent = iconMap[srv.iconName] || Code;
            const isFeatured = index === 0 || index === 2;
            return (
              <motion.div
                key={srv.id}
                variants={itemVariants}
                className={`group p-8 rounded-3xl glass-card border-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col justify-between min-h-[280px] ${
                  isFeatured ? "bg-white/5" : ""
                }`}
              >
                {/* Custom glowing background on card hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/0 to-blue-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="space-y-6">
                  {/* Icon Area */}
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 group-hover:bg-white group-hover:text-black transition-all duration-300 shadow-inner">
                    <IconComponent size={20} />
                  </div>

                  {/* Core Title & Description */}
                  <div className="space-y-3">
                    <h3 className="font-display font-bold text-xl text-white transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-white/60 text-sm font-light leading-relaxed">
                      {srv.description}
                    </p>
                  </div>
                </div>

                {/* Card CTA arrow link */}
                <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/30 group-hover:text-white/50 transition-colors mt-auto">
                  <span>DISCOVER SOLUTIONS</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
