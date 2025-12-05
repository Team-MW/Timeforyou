import React from "react";
import logoFull from "../images/Logo 1@4x.png";

type NavigationProps = {
  activeSection?: string;
};

const handleNavClick = (id: string) => {
  if (typeof window !== "undefined" && window.location.pathname.includes("mentions")) {
    if (id === "hero") {
      window.location.href = "/";
    } else {
      window.location.href = `/#${id}`;
    }
    return;
  }

  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  return (
    <header className="tfy-nav-wrapper">
      <nav className="tfy-nav">
        <div className="tfy-logo" onClick={() => handleNavClick("hero")}>
          <img
            src={logoFull}
            alt="Time for You"
            className="tfy-logo-img"
          />
        </div>
        <ul className="tfy-nav-links">
          <li
            className={activeSection === "accueil" ? "tfy-nav-link--active" : ""}
            onClick={() => handleNavClick("hero")}
          >
            Accueil
          </li>
          <li
            className={activeSection === "a-propos" ? "tfy-nav-link--active" : ""}
            onClick={() => handleNavClick("a-propos")}
          >
            À propos
          </li>
          <li
            className={activeSection === "services" ? "tfy-nav-link--active" : ""}
            onClick={() => handleNavClick("services")}
          >
            Nos services
          </li>
          <li
            className={activeSection === "massages" ? "tfy-nav-link--active" : ""}
            onClick={() => handleNavClick("massages")}
          >
            Massages
          </li>
          <li
            className={activeSection === "reservation" ? "tfy-nav-link--active" : ""}
            onClick={() => handleNavClick("reservation")}
          >
            Réservation
          </li>
          <li
            className={
              activeSection === "localisation" ? "tfy-nav-link--active" : ""
            }
            onClick={() => handleNavClick("localisation")}
          >
            Localisation
          </li>
          <li
            className={activeSection === "avis" ? "tfy-nav-link--active" : ""}
            onClick={() => handleNavClick("avis")}
          >
            Avis
          </li>
        </ul>
      </nav>
    </header>
  );
};



