/**
- @license
- SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { ArrowUpRight, Download } from "lucide-react";
import { PERSONAL_INFO } from "../data";

export default function HeroGlass() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: isMobile ? 55 : 45,
    damping: isMobile ? 26 : 22,
    restDelta: 0.001,
  });

  // 1. Text fades out smoothly during initial scroll
  const textOpacity = useTransform(smoothProgress, [0, isMobile ? 0.25 : 0.3], [1, 0]);
  const textY = useTransform(smoothProgress, [0, isMobile ? 0.25 : 0.3], [0, isMobile ? -25 : -40]);
  const textScale = useTransform(smoothProgress, [0, isMobile ? 0.25 : 0.3], [1, 0.95]);

  // 2. Card emerges smoothly: on mobile, eliminate heavy 3D rotation (rotateX) and excessive vertical translation for high usability
  const cardY = useTransform(
    smoothProgress,
    [0.1, 0.5],
    shouldReduceMotion ? [0, 0] : isMobile ? [80, 0] : [200, 0]
  );
  const cardOpacity = useTransform(smoothProgress, [0.08, 0.35], [0, 1]);
  const cardRotateX = useTransform(
    smoothProgress,
    [0.1, 0.5],
    shouldReduceMotion || isMobile ? [0, 0] : [20, 0]
  );
  const cardScale = useTransform(
    smoothProgress,
    [0.1, 0.5],
    shouldReduceMotion ? [1, 1] : isMobile ? [0.98, 1] : [0.95, 1]
  );

  const cvPath = `${import.meta.env.BASE_URL}Mostafa_Osama_CV.pdf`;


  return (
    // تم تعديل الارتفاع لـ 200vh (بدل 250vh) عشان الحركة متطش في الفراغ، والـ Sticky يفضل مظبوط 100%
    <section id="home" ref={containerRef} className="relative h-[200vh] w-full overflow-clip">

      {/* هنا الـ Sticky شغال 100vh بالظبط على قد الشاشة ثابت، والـ 200vh اللي بره هي المسؤولة عن مسافة السكرول */}
      <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden">

        {/* === النص الترحيبي === */}
        <motion.div
          style={{ opacity: textOpacity, y: textY, scale: textScale }}
          className="absolute z-10 flex flex-col items-center text-center px-4 will-change-transform"
        >
          <h2 className="text-6xl md:text-8xl lg:text-[9rem] font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 drop-shadow-2xl select-none">
            Scroll
          </h2>
          <p className="mt-4 text-sm md:text-xl font-light tracking-[0.3em] text-white/60 uppercase select-none">
            To Discover
          </p>
        </motion.div>

        {/* === الكارت الزجاجي === */}
        <div style={{ perspective: 1200 }} className="absolute z-20 flex w-full items-center justify-center px-4 sm:px-6">
          <motion.div
            style={{
              y: cardY,
              opacity: cardOpacity,
              rotateX: cardRotateX,
              scale: cardScale
            }}
            className="w-full max-w-lg will-change-transform"
          >
            {/* حاوية الزجاج */}
            <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 md:p-10 backdrop-blur-[20px] border border-white/25">

              {/* إضاءة داخلية خفيفة في الكارت */}
              <div className="absolute inset-0 bg-white/5 to-transparent opacity-40 pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center text-center">

                {/* صورة البروفايل */}
                <div className="relative mb-4 sm:mb-6 group">
                  <div className="relative h-24 w-24 sm:h-28 sm:w-28 overflow-hidden rounded-full border-2 border-white/30 bg-neutral-900 p-1 backdrop-blur-md shadow-inner">
                    <img
                      src={PERSONAL_INFO.avatar}
                      alt={PERSONAL_INFO.name}
                      className="h-full w-full rounded-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* المعلومات */}
                <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2 sm:mb-3 drop-shadow-md">
                  {PERSONAL_INFO.name}
                </h1>

                {/* بادج المسمى الوظيفي */}
                <div className="mb-4 sm:mb-6 inline-flex items-center text-center rounded-full border border-blue-500/30 bg-blue-950/50 px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium text-blue-300 backdrop-blur-md shadow-sm max-w-full">
                  <span className="truncate sm:whitespace-normal">{PERSONAL_INFO.title}</span>
                </div>

                <p className="mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed text-neutral-300">
                  Front-End Developer specializing in <strong className="font-semibold text-white">React.js</strong> and <strong className="font-semibold text-white">Next.js</strong>. Building clean, responsive, production-ready interfaces and multi-language platforms.
                </p>

                <div className="flex w-full flex-col sm:flex-row items-center justify-center gap-3">
                  {/* الزرار بستايل Pill Shape */}
                  <a
                    href="#contact"
                    className="group relative flex w-full sm:w-auto items-center justify-center gap-2 overflow-hidden rounded-full border border-white/20 bg-white/5 px-7 py-3 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black active:scale-95"
                  >
                    <span>Let's Talk</span>
                    <ArrowUpRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>

                  {/* الزرار بستايل Pill Shape */}
                  <a
                    href={cvPath}
                    download="Mostafa_Osama_FrontEnd_Developer_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Download Mostafa Osama's CV"
                    className="group relative flex w-full sm:w-auto items-center justify-center gap-2 overflow-hidden rounded-full border border-blue-400/30 bg-blue-950/40 px-6 py-3 font-semibold text-blue-200 backdrop-blur-md transition-all duration-300 hover:border-blue-300/60 hover:bg-blue-500/20 hover:text-white active:scale-95"
                  >
                    <Download size={16} className="shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5" />
                    <span className="tracking-tight">Download CV</span>
                  </a>
                </div>

              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}