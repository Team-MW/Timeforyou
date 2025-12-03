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
import planityLogo from "./images/planity-logo.png";

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
          <div className="tfy-section-inner tfy-section-split">
            <div>
              <h2>Bienvenue chez Time for You</h2>
              <p>
                Un cocon de douceur où chaque soin est pensé pour vous
                reconnecter à votre corps, apaiser le mental et retrouver
                l&apos;équilibre.
              </p>
              <p>
                Seniors, étudiants, futures mamans ou tout simplement fatigué·e
                du quotidien : nous adaptons chaque massage à votre histoire et
                à vos besoins.
              </p>
            </div>
            <div className="tfy-home-highlights">
              <div>
                <h3>Une écoute attentive</h3>
                <p>Un temps d&apos;échange avant chaque séance pour vous.</p>
              </div>
              <div>
                <h3>Soins personnalisés</h3>
                <p>Techniques adaptées à votre âge, votre énergie, vos envies.</p>
              </div>
              <div>
                <h3>Cadre chaleureux</h3>
                <p>Un lieu doux, intimiste et rassurant pour lâcher prise.</p>
              </div>
            </div>
          </div>
        </section>
        <About />
        <Massages />
        <Reservation />
        <Gallery />
        <Location />
        <Reviews />
      </main>
      <a
        href="#reservation"
        className="tfy-floating-cta"
        aria-label="Réserver via Planity"
      >
        <span className="tfy-planity-logo tfy-planity-logo--floating">
          <img src={planityLogo} alt="Planity" />
        </span>
      </a>
      <Footer />
    </div>
  );
};


