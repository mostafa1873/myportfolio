/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <div className="bg-dark-bg min-h-screen text-neutral-300 antialiased selection:bg-amber-500 selection:text-black">
        {/* Premium Glassmorphic Navbar */}
        <Navbar />

        {/* Main Content Sections */}
        <main>
          {/* Hero Section */}
          <Hero />

          {/* About Me Section */}
          <About />

          {/* Skills & Tech Stack Section */}
          <Skills />

          {/* Interactive Experience Timeline */}
          <Timeline />

          {/* Case Studies / Projects */}
          <Projects />

          {/* Professional Services */}
          <Services />

          {/* Contact Form & Premium Footer */}
          <Contact />
        </main>
      </div>
    </>
  );
}
