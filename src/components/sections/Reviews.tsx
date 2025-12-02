import React, { useEffect, useState } from "react";

const reviews = [
  {
    name: "Camille",
    text: "Un vrai moment de pause. Je suis ressortie légère, détendue et apaisée. Merci pour la douceur et l'écoute.",
  },
  {
    name: "Jean, 72 ans",
    text: "Les massages sont adaptés à mon âge et à mes douleurs. Je me sens vraiment en confiance.",
  },
  {
    name: "Sarah (future maman)",
    text: "Le massage prénatal m'a fait un bien fou, autant physiquement qu'émotionnellement.",
  },
];

export const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 7000);
    return () => window.clearInterval(id);
  }, []);

  const current = reviews[currentIndex];

  return (
    <section id="avis" className="tfy-section tfy-section-alt" data-reveal>
      <div className="tfy-section-inner">
        <h2>Avis</h2>
        <p className="tfy-section-intro">
          Les mots de celles et ceux qui ont déjà pris un temps pour eux chez
          Time for You.
        </p>
        <div className="tfy-review-highlight">
          <p className="tfy-review-highlight-text">“{current.text}”</p>
          <p className="tfy-review-highlight-name">— {current.name}</p>
          <div className="tfy-review-dots">
            {reviews.map((review, index) => (
              <button
                key={review.name}
                className={
                  index === currentIndex
                    ? "tfy-review-dot tfy-review-dot--active"
                    : "tfy-review-dot"
                }
                aria-label={`Voir l'avis de ${review.name}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
        <div className="tfy-reviews-grid">
          {reviews.map((review) => (
            <article key={review.name} className="tfy-review-card">
              <p className="tfy-review-text">“{review.text}”</p>
              <p className="tfy-review-name">— {review.name}</p>
            </article>
          ))}
        </div>
        <p className="tfy-section-note">
          Vous pourrez également intégrer les avis directement depuis Google ou
          Planity une fois la page publiée.
        </p>
      </div>
    </section>
  );
};


