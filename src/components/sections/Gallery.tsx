import React from "react";

const photos = [
  {
    url: "https://images.pexels.com/photos/3738341/pexels-photo-3738341.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Cabinet de massage chaleureux",
  },
  {
    url: "https://images.pexels.com/photos/3738349/pexels-photo-3738349.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Ambiance détente avec bougies",
  },
  {
    url: "https://images.pexels.com/photos/3738355/pexels-photo-3738355.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Table de massage prête à accueillir",
  },
  {
    url: "https://images.pexels.com/photos/1614776/pexels-photo-1614776.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Détails de décoration zen",
  },
];

export const Gallery: React.FC = () => {
  return (
    <section id="photos" className="tfy-section tfy-section-alt" data-reveal>
      <div className="tfy-section-inner">
        <h2>Les lieux</h2>
        <p className="tfy-section-intro">
          Un espace intimiste, épuré et chaleureux, pensé pour vous faire
          décrocher dès la porte franchie.
        </p>
        <div className="tfy-gallery-grid">
          {photos.map((photo) => (
            <figure key={photo.url} className="tfy-gallery-item">
              <img src={photo.url} alt={photo.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};


