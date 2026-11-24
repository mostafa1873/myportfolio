import { useState, useEffect } from "react";
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

  useEffect(() => {
    // Map section IDs to navLink names
    const sectionMap: Record<string, string> = {
      home: "Home",
      about: "About",
      skills: "Skills",
      timeline: "Skills", // timeline is experienced between skills and projects
      projects: "Projects",
      services: "Services",
      contact: "Contact",
    };

    const handleScroll = () => {
      // If we are at the very top of the page, immediately set Home active
      if (window.scrollY < 100) {
        setActiveTab("Home");
        return;
      }

      // Check if user is scrolled to the absolute bottom of the document
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        setActiveTab("Contact");
        return;
      }

      // Detect which section is currently centered/visible in viewport
      const sections = ["contact", "services", "projects", "timeline", "skills", "about", "home"];
      const viewportMiddle = window.scrollY + window.innerHeight * 0.35;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (viewportMiddle >= top) {
            const mappedName = sectionMap[id] || "Home";
            setActiveTab(mappedName);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: { name: string; href: string }) => {
    e.preventDefault();
    setActiveTab(link.name);

    if (link.name === "Home" || link.href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (window.location.hash) {
        history.replaceState(null, "", window.location.pathname);
      }
      return;
    }

    const targetId = link.href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      history.replaceState(null, "", link.href);
    }
  };

  return (
    <div className="fixed bottom-4 sm:bottom-6 left-0 right-0 z-50 flex justify-center px-2 sm:px-4 pointer-events-none">
      <nav className="pointer-events-auto flex items-center p-1 sm:p-2 gap-0.5 sm:gap-1 md:gap-2 rounded-2xl md:rounded-full bg-black/70 backdrop-blur-2xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.5)] max-w-[calc(100vw-1rem)] sm:max-w-full overflow-x-auto no-scrollbar">
        {navLinks.map((link) => {
          const isActive = activeTab === link.name;
          const Icon = link.icon;

          return (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link)}
              aria-label={link.name}
              className={`relative flex items-center justify-center shrink-0 gap-1 sm:gap-1.5 md:gap-2 px-2 py-2 sm:px-3 sm:py-3 md:px-4 md:py-2.5 rounded-xl md:rounded-full transition-all duration-300 ${
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
              
              <Icon className="relative z-10 w-4 h-4 sm:w-5 sm:h-5" />
              
              {isActive && (
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  className="hidden xs:inline-block relative z-10 text-xs sm:text-sm font-bold overflow-hidden whitespace-nowrap"
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