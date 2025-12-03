import React from "react";

export const Location: React.FC = () => {
  return (
    <section id="localisation" className="tfy-section" data-reveal>
      <div className="tfy-section-inner tfy-section-split">
        <div>
          <h2>Localisation</h2>
          <p className="tfy-location-intro">
            Le cabinet Time for You vous accueille à Pinsaguel, au sud de
            Toulouse, dans un environnement calme et facile d&apos;accès en
            voiture.
          </p>
          <ul className="tfy-list tfy-location-list">
            <li>Adresse : 1 Rue Théodore Monod, 31120 Pinsaguel</li>
            <li>Stationnement : places disponibles à proximité</li>
            <li>Accès : à quelques minutes de Toulouse en voiture</li>
          </ul>
        </div>
        <div className="tfy-map-wrapper">
          <iframe
            title="Localisation Time for You"
            src="https://www.google.com/maps?q=1+Rue+Theodore+Monod,+31120+Pinsaguel&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};


