import React, { useEffect, useState } from "react";
import { Hero } from "./components/Hero";
import { Navigation } from "./components/Navigation";
import { About } from "./components/sections/About";
import { Massages } from "./components/sections/Massages";
import { Reservation } from "./components/sections/Reservation";
import { Gallery } from "./components/sections/Gallery";
import { Location } from "./components/sections/Location";
import { Reviews } from "./components/sections/Reviews";
import { Footer } from "./components/sections/Footer";
import { useScrollReveal } from "./hooks/useScrollReveal";

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("hero");
  useScrollReveal();

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    if (!("IntersectionObserver" in window) || sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0));

        if (visible[0]) {
          const id = visible[0].target.id;
          setActiveSection(id);
        }
      },
      { threshold: 0.4 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="tfy-root">
      <Navigation activeSection={activeSection} />
      <main>
        <Hero />
        <section
          id="accueil"
          className="tfy-section tfy-section--first"
          data-reveal
        >
          <div className="tfy-section-inner">
            <h2>Bienvenue chez Time for You</h2>
            <p>
              Massages bien-être à taille humaine, pensés pour les seniors, les
              étudiants, les futures mamans et toute personne qui a besoin
              d&apos;un moment pour elle.
            </p>
          </div>
        </section>
        <About />
        <Massages />
        <Reservation />
        <Gallery />
        <Location />
        <Reviews />
      </main>
      <a href="#reservation" className="tfy-floating-cta">
        Réserver
      </a>
      <Footer />
    </div>
  );
};


