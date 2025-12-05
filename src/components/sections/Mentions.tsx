import React from "react";

export const Mentions: React.FC = () => {
  return (
    <section
      id="mentions-legales"
      className="tfy-section tfy-section-alt tfy-mentions"
      data-reveal
    >
      <div className="tfy-section-inner">
        <h2>Mentions légales</h2>
        <p className="tfy-section-intro">
          Informations principales concernant l&apos;édition du site Time for
          You, sa responsabilité et l&apos;utilisation des contenus.
        </p>
        <div className="tfy-mentions-grid">
          <article className="tfy-mentions-card">
            <h3>Éditeur du site</h3>
            <p>
              <strong>Time for You</strong> – activité de massages bien-être.
            </p>
            <p>
              Adresse : 1 Rue Théodore Monod, 31120 Pinsaguel, France
            </p>
          </article>
          <article className="tfy-mentions-card">
            <h3>Propriété intellectuelle &amp; données</h3>
            <p>
              L&apos;ensemble des contenus (textes, images, visuels) présents
              sur ce site sont la propriété de Time for You ou utilisés avec
              autorisation. Toute reproduction est interdite sans accord
              préalable.
            </p>
            <p>
              Les massages proposés sont des <strong>massages bien-être</strong>{" "}
              et ne s&apos;apparentent en aucun cas à des soins médicaux ou
              thérapeutiques.
            </p>
          </article>
        </div>
        <p className="tfy-visually-hidden">
          Mentions légales détaillées Time for You : responsable de traitement
          des données, finalités de collecte, base légale, durée de
          conservation, droits d&apos;accès, de rectification et de
          suppression, contact pour toute demande relative aux données
          personnelles. Les informations complètes devront être renseignées
          selon la réglementation en vigueur.
        </p>
      </div>
    </section>
  );
};


