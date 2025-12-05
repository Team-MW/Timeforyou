import React, { useEffect } from "react";
import planityLogo from "../../images/planity-logo.png";

// Remplace ce lien par la vraie page Planity quand elle sera créée
const PLANITY_URL = "https://www.planity.com/";

export const Reservation: React.FC = () => {
  useEffect(() => {
    const existing = document.getElementById("tfy-jotform-script");
    if (existing) return;

    const script = document.createElement("script");
    script.id = "tfy-jotform-script";
    script.type = "text/javascript";
    script.src = "https://form.jotform.com/jsform/253373221409351";
    script.async = true;

    const container = document.getElementById("tfy-jotform-container");
    if (container) {
      container.appendChild(script);
    } else {
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="reservation" className="tfy-section" data-reveal>
      <div className="tfy-section-inner tfy-section-split tfy-section-reservation">
        <div>
          <h2>Réservation</h2>
          <p className="tfy-reservation-intro">
            La prise de rendez-vous se fait en ligne via Planity. Choisissez le
            massage qui vous correspond, l&apos;horaire qui vous convient, et
            recevez une <strong>confirmation immédiate</strong>.
          </p>
          <ul className="tfy-list tfy-reservation-list">
            <li>Choix du massage et de la durée</li>
            <li>Calendrier en temps réel</li>
            <li>Rappel automatique de votre rendez-vous</li>
          </ul>
          <a
            className="tfy-btn tfy-btn-primary tfy-btn-planity"
            href={PLANITY_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Réserver via Planity"
          >
            <span className="tfy-planity-logo">
              <img src={planityLogo} alt="Planity" />
            </span>
          </a>
        </div>
        <div className="tfy-reservation-card">
          <h3>Horaires &amp; contact</h3>
          <p>Lundi au samedi sur rendez-vous.</p>
          <p>Téléphone : 06 00 00 00 00</p>
          <p>Adresse : à compléter avec Émilie</p>
          <p className="tfy-reservation-note">
            Pour toute demande spécifique (mobilité réduite, post-opératoire,
            etc.), merci de le préciser lors de la réservation.
          </p>
        </div>
      </div>
    </section>
  );
};



