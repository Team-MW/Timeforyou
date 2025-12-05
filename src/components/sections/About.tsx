import React from "react";

export const About: React.FC = () => {
  return (
    <section id="a-propos" className="tfy-section" data-reveal>
      <div className="tfy-section-inner tfy-section-split">
        <div>
          <h2>À propos de Time for You</h2>
          <p>
            Time for You est un espace de massage bien-être imaginé pour prendre
            soin de chaque corps avec douceur, écoute et bienveillance. Ici, on
            prend le temps de vous accueillir, d&apos;échanger et de créer un
            soin qui vous ressemble.
          </p>
          <p>
            Seniors, étudiants, femmes enceintes, personnes en
            post-opératoire ou simplement fatiguées du quotidien : chaque
            massage est adapté à vos besoins, à votre rythme et à votre
            histoire.
          </p>
        </div>
        <div className="tfy-about-card">
          <h3>Votre praticienne</h3>
          <p>
            Diplômée en massages bien-être et formée à différentes techniques
            (traditionnelles et spécifiques), Émilie vous accompagne vers une
            détente profonde et durable.
          </p>
          <p className="tfy-about-highlight">
            “Un moment suspendu, pour revenir à soi et se reconnecter à son
            corps.”
          </p>
        </div>
      </div>
    </section>
  );
};



