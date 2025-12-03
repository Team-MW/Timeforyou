import React from "react";
import hommeMassage from "../../images/hommemassage.jpg";
import bellePhoto from "../../images/bellephotocailloux.webp";
import rituels from "../../images/rituels.webp";
import maderotherapie from "../../images/Maderothérapie.webp";
import massageHindou from "../../images/Massage hindou essentiel.jpg";

export const Services: React.FC = () => {
  return (
    <section id="services" className="tfy-section tfy-section-alt" data-reveal>
      <div className="tfy-section-inner tfy-section-split tfy-services">
        <div>
          <h2>Nos services</h2>
          <p className="tfy-section-intro">
            Une sélection de massages et de soins bien-être pensés pour répondre
            à vos différents besoins :{" "}
            <strong>détente profonde</strong>,{" "}
            <strong>récupération</strong>,{" "}
            <strong>légèreté</strong> et{" "}
            <strong>accompagnement des grandes étapes de vie</strong>.
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
          <img src={massageHindou} alt="Massage hindou essentiel" />
          <div className="tfy-service-card-body">
            <h3>Massage hindou essentiel</h3>
            <p>
              Un rituel inspiré des traditions hindoues, qui combine pressions
              douces et mouvements enveloppants pour apaiser le mental et
              harmoniser l&apos;énergie.
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
            src={maderotherapie}
            alt="Maderothérapie, massage avec outils en bois"
          />
          <div className="tfy-service-card-body">
            <h3>Maderothérapie &amp; remodelage</h3>
            <p>
              Une technique de massage utilisant des outils en bois pour
              stimuler la circulation, lisser les tissus et favoriser une
              sensation de légèreté dans le corps.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};


