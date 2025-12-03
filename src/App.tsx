import React, { useEffect, useState } from "react";
import { Hero } from "./components/Hero";
import { Navigation } from "./components/Navigation";
import { About } from "./components/sections/About";
import { Services } from "./components/sections/Services";
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
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useScrollReveal();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 900);

    return () => window.clearTimeout(timer);
  }, []);

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
          if (id === "hero") {
            setActiveSection("accueil");
          } else {
            setActiveSection(id);
          }
        }
      },
      { threshold: 0.4 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="tfy-root">
      {isLoading && (
        <div className="tfy-loader-screen">
          <div className="tfy-loader-card">
            <div className="tfy-loader-logo">Time for You</div>
            <div className="tfy-loader-sub">
              Massages bien-être · Soin du corps
            </div>
            <div className="tfy-loader-spinner" />
          </div>
        </div>
      )}
      <Navigation activeSection={activeSection} />
      <main>
        <Hero />
        <section
          id="accueil"
          className="tfy-section tfy-section--first"
          data-reveal
        >
          <div className="tfy-section-inner tfy-section-split">
            <div className="tfy-home-intro">
              <h2>Bienvenue chez Time for You</h2>
              <p className="tfy-home-intro-main">
                Un <strong>cocon de douceur</strong> où chaque soin est pensé
                pour vous reconnecter à votre corps, apaiser le mental et
                retrouver <strong>l&apos;équilibre</strong>.
              </p>
              <p className="tfy-home-intro-sub">
                Seniors, étudiants, futures mamans ou tout simplement
                fatigué·e du quotidien :{" "}
                <strong>
                  nous adaptons chaque massage à votre histoire et à vos
                  besoins
                </strong>
                .
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
        <Services />
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


