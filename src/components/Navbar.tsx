import { useState } from "react";
import { motion } from "motion/react";
import { Home, User, Code2, FolderGit2, Briefcase, Mail } from "lucide-react";

export default function BottomDockNav() {
  const [activeTab, setActiveTab] = useState("Home");

  const navLinks = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Skills", href: "#skills", icon: Code2 },
    { name: "Projects", href: "#projects", icon: FolderGit2 },
    { name: "Services", href: "#services", icon: Briefcase },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-3 sm:px-4 pointer-events-none">
      <nav className="pointer-events-auto flex items-center p-1.5 sm:p-2 gap-0.5 sm:gap-1 md:gap-2 rounded-2xl md:rounded-full bg-black/70 backdrop-blur-2xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.5)] max-w-full">
        {navLinks.map((link) => {
          const isActive = activeTab === link.name;
          const Icon = link.icon;

          return (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveTab(link.name)}
              aria-label={link.name}
              className={`relative flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 py-2.5 sm:px-3 sm:py-3 md:px-4 md:py-2.5 rounded-xl md:rounded-full transition-all duration-300 ${
                isActive 
                  ? "text-black" 
                  : "text-white/60 hover:text-white hover:bg-white/10"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="active-dock-bg"
                  className="absolute inset-0 bg-white rounded-xl md:rounded-full shadow-lg"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              
              <Icon className="relative z-10 w-[18px] h-[18px] sm:w-5 sm:h-5" />
              
              {isActive && (
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  className="relative z-10 text-xs sm:text-sm font-bold overflow-hidden whitespace-nowrap"
                >
                  {link.name}
                </motion.span>
              )}
            </a>
          );
        })}
      </nav>
    </div>
  );
}