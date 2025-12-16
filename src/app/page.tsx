import { Suspense } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
          <Projects />
        </Suspense>
        {/* <Skills /> */}
        {/* <Services /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
