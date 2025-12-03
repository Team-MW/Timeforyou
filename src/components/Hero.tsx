import React from "react";
import heroImage from "../images/bellephotocailloux.webp";

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="tfy-hero">
      <div className="tfy-hero-video-container">
        <img
          src={heroImage}
          alt="Massage bien-être Time for You"
          className="tfy-hero-video"
        />
        <div className="tfy-hero-overlay" />
      </div>
      <div className="tfy-hero-content">
        <p className="tfy-hero-eyebrow">Massages bien-être · Soin du corps</p>
        <h1>
          Offrez-vous <span>une parenthèse de bien-être</span>
        </h1>
        <p className="tfy-hero-subtitle tfy-hero-subtitle--framed">
          <strong>Accordez-vous un moment rien qu&apos;à vous</strong> pour
          soulager les tensions, relancer l&apos;énergie et simplement lâcher
          prise.
        </p>
        <div className="tfy-hero-actions">
          <a href="#reservation" className="tfy-btn tfy-btn-primary">
            Prendre rendez-vous
          </a>
          <a href="#massages" className="tfy-btn tfy-btn-secondary">
            Découvrir les soins
          </a>
        </div>
      </div>
    </section>
  );
};


