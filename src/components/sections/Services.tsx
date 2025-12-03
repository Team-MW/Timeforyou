import React from "react";
import hommeMassage from "../../images/hommemassage.jpg";
import bellePhoto from "../../images/bellephotocailloux.webp";
import ambiance from "../../images/ku4gjvncqli6iqohmxe2.webp";
import rituels from "../../images/rituels.webp";
import visitWellness from "../../images/visit-doctor-wellness-cupping-massage-therapy-reha-1500.jpg";

export const Services: React.FC = () => {
  return (
    <section id="services" className="tfy-section tfy-section-alt" data-reveal>
      <div className="tfy-section-inner tfy-section-split tfy-services">
        <div>
          <h2>Nos services</h2>
          <p className="tfy-section-intro">
            Une sélection de massages et de soins bien-être pensés pour répondre
            à différents besoins : détente profonde, récupération, légèreté,
            accompagnement des étapes de vie.
          </p>
          <ul className="tfy-list tfy-services-list">
            <li>Massages bien-être personnalisés</li>
            <li>Seniors, étudiants, futures mamans, post-opératoire</li>
            <li>Techniques drainantes (méthode Renata, maderothérapie…)</li>
            <li>Rituels avec pierres chaudes et inspirations du monde</li>
          </ul>
        </div>
        <div className="tfy-services-hero">
          <img src={hommeMassage} alt="Massage bien-être" />
        </div>
      </div>
      <div className="tfy-section-inner tfy-services-grid">
        <article className="tfy-service-card">
          <img src={bellePhoto} alt="Moment de détente" />
          <div className="tfy-service-card-body">
            <h3>Détente &amp; lâcher-prise</h3>
            <p>
              Des soins pour relâcher les tensions, apaiser le mental et se
              recentrer sur soi.
            </p>
          </div>
        </article>
        <article className="tfy-service-card">
          <img src={ambiance} alt="Ambiance du cabinet" />
          <div className="tfy-service-card-body">
            <h3>Accompagnement sur-mesure</h3>
            <p>
              Une écoute attentive pour adapter chaque séance à votre énergie et
              à votre histoire.
            </p>
          </div>
        </article>
        <article className="tfy-service-card">
          <img src={rituels} alt="Rituels de massage et soins" />
          <div className="tfy-service-card-body">
            <h3>Rituels &amp; moments d&apos;exception</h3>
            <p>
              Des protocoles complets mêlant gestes enveloppants, huiles
              chaudes et accessoires pour un voyage sensoriel unique.
            </p>
          </div>
        </article>
        <article className="tfy-service-card">
          <img
            src={visitWellness}
            alt="Cupping et techniques spécifiques de récupération"
          />
          <div className="tfy-service-card-body">
            <h3>Techniques ciblées &amp; récupération</h3>
            <p>
              Des approches spécifiques (ventouses, travail sur certaines
              zones...) pour soutenir le corps dans sa récupération.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};


