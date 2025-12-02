import React from "react";

export const Location: React.FC = () => {
  return (
    <section id="localisation" className="tfy-section" data-reveal>
      <div className="tfy-section-inner tfy-section-split">
        <div>
          <h2>Localisation</h2>
          <p>
            Le cabinet Time for You est situé à préciser avec l&apos;adresse
            exacte (ville / quartier). Facilement accessible en transport et en
            voiture.
          </p>
          <ul className="tfy-list">
            <li>Adresse : à compléter</li>
            <li>Stationnement : à préciser</li>
            <li>Accès transport : à préciser</li>
          </ul>
        </div>
        <div className="tfy-map-wrapper">
          {/* Remplacer la requête Google Maps par l'adresse exacte */}
          <iframe
            title="Localisation Time for You"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2891.567349845653!2d7.4215451!3d43.7396114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdc29a6539a77f%3A0x87b3e7b8b99f005a!2sMonaco!5e0!3m2!1sfr!2sfr!4v1700000000000"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};


