import React from "react";

type NavigationProps = {
  activeSection?: string;
};

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  return (
    <header className="tfy-nav-wrapper">
      <nav className="tfy-nav">
        <div className="tfy-logo" onClick={() => scrollTo("hero")}>
          <img
            src="/logo petit blanc@4x.png"
            alt="Time for You"
            className="tfy-logo-img"
          />
        </div>
        <ul className="tfy-nav-links">
          <li
            className={activeSection === "accueil" ? "tfy-nav-link--active" : ""}
            onClick={() => scrollTo("accueil")}
          >
            Accueil
          </li>
          <li
            className={activeSection === "a-propos" ? "tfy-nav-link--active" : ""}
            onClick={() => scrollTo("a-propos")}
          >
            À propos
          </li>
          <li
            className={activeSection === "massages" ? "tfy-nav-link--active" : ""}
            onClick={() => scrollTo("massages")}
          >
            Massages
          </li>
          <li
            className={activeSection === "reservation" ? "tfy-nav-link--active" : ""}
            onClick={() => scrollTo("reservation")}
          >
            Réservation
          </li>
          <li
            className={activeSection === "photos" ? "tfy-nav-link--active" : ""}
            onClick={() => scrollTo("photos")}
          >
            Photos
          </li>
          <li
            className={
              activeSection === "localisation" ? "tfy-nav-link--active" : ""
            }
            onClick={() => scrollTo("localisation")}
          >
            Localisation
          </li>
          <li
            className={activeSection === "avis" ? "tfy-nav-link--active" : ""}
            onClick={() => scrollTo("avis")}
          >
            Avis
          </li>
        </ul>
      </nav>
    </header>
  );
};


