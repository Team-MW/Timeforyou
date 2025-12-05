import React from "react";

const massages = [
  {
    title: "Massages seniors",
    description:
      "Des gestes doux et adaptés pour soulager les tensions, stimuler la circulation et apporter du confort au quotidien.",
  },
  {
    title: "Massages étudiants",
    description:
      "Une parenthèse de calme pour relâcher le stress des études, des écrans et du rythme soutenu.",
  },
  {
    title: "Massages tradition",
    description:
      "Des massages corps entier inspirés des techniques traditionnelles pour une détente globale.",
  },
  {
    title: "Massage femmes enceintes",
    description:
      "Un accompagnement tout en douceur pour soulager le dos, les jambes lourdes et favoriser le lien avec bébé.",
  },
  {
    title: "Post opératoire",
    description:
      "Un toucher attentif pour soutenir la récupération, limiter les tensions et favoriser le confort après une opération.",
  },
  {
    title: "Massage cou, épaules, tête",
    description:
      "Idéal pour libérer les tensions liées au stress, aux écrans et aux mauvaises postures.",
  },
  {
    title: "Maderothérapie",
    description:
      "Une technique utilisant des outils en bois pour stimuler la circulation et lisser les tissus.",
  },
  {
    title: "Massages pierres chaudes",
    description:
      "La chaleur douce des pierres volcaniques pour détendre en profondeur les muscles et l&apos;esprit.",
  },
  {
    title: "Massage hindou essentiel",
    description:
      "Un rituel inspiré des traditions indiennes pour harmoniser le corps et l&apos;esprit.",
  },
  {
    title: "Méthode Renata (drainant)",
    description:
      "Un drainage manuel précis pour stimuler la circulation lymphatique et favoriser une sensation de légèreté.",
  },
];

export const Massages: React.FC = () => {
  return (
    <section id="massages" className="tfy-section tfy-section-alt" data-reveal>
      <div className="tfy-section-inner">
        <h2>Massages &amp; soins proposés</h2>
        <p className="tfy-section-intro">
          Une palette de massages pensés pour répondre à différentes étapes de
          vie, envies et besoins. N&apos;hésitez pas à demander conseil pour
          choisir le soin le plus adapté.
        </p>
        <div className="tfy-massages-grid">
          {massages.map((massage) => (
            <article key={massage.title} className="tfy-massage-card">
              <h3>{massage.title}</h3>
              <p>{massage.description}</p>
            </article>
          ))}
        </div>
        <p className="tfy-section-note">
          Liste à valider et compléter avec Émilie selon les massages exacts
          proposés et leurs durées.
        </p>
      </div>
    </section>
  );
};



