import React from "react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="tfy-footer">
      <div className="tfy-footer-inner">
        <div className="tfy-footer-brand">
          <img
            src="/logo petit blanc@4x.png"
            alt="Time for You"
            className="tfy-footer-logo"
          />
          <p>Massages bien-être · Seniors · Étudiants · Femmes enceintes</p>
        </div>
        <div className="tfy-footer-cols">
          <div>
            <h4>Contact</h4>
            <p>Téléphone : 06 00 00 00 00</p>
            <p>Email : contact@timeforyou.fr</p>
          </div>
          <div>
            <h4>Infos légales</h4>
            <p>Numéro SIRET : à compléter</p>
            <p>Mentions légales à intégrer ici</p>
          </div>
          <div>
            <h4>Réseaux sociaux</h4>
            <p>Instagram : @timeforyou</p>
            <p>Facebook : Time for You</p>
          </div>
        </div>
      </div>
      <div className="tfy-footer-bottom">
        <span>© {currentYear} Time for You. Tous droits réservés.</span>
        <span>Site vitrine réalisé en React.</span>
      </div>
    </footer>
  );
};


