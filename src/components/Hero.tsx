import React from "react";

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="tfy-hero">
      <div className="tfy-hero-video-container">
        <video
          className="tfy-hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.pexels.com/photos/3738341/pexels-photo-3738341.jpeg?auto=compress&cs=tinysrgb&w=1600"
        >
          <source
            src="https://videos.pexels.com/video-files/4148179/4148179-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
          Votre navigateur ne supporte pas la vidéo.
        </video>
        <div className="tfy-hero-overlay" />
      </div>
      <div className="tfy-hero-content">
        <p className="tfy-hero-eyebrow">Massages bien-être · Soin du corps</p>
        <h1>
          Offrez-vous <span>un temps pour vous</span>
        </h1>
        <p className="tfy-hero-subtitle">
          Un espace doux et chaleureux pour vous détendre, relâcher les
          tensions et retrouver votre énergie.
        </p>
        <div className="tfy-hero-actions">
          <a href="#reservation" className="tfy-btn tfy-btn-primary">
            Réserver un massage
          </a>
          <a href="#massages" className="tfy-btn tfy-btn-secondary">
            Découvrir les massages
          </a>
        </div>
      </div>
    </section>
  );
};


