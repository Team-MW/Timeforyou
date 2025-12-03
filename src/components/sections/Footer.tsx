import React from "react";
import footerImage from "../../images/Capture.png";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="tfy-footer">
      <div className="tfy-footer-inner">
        <div className="tfy-footer-brand">
          <img
            src={footerImage}
            alt="Time for You - visuel"
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
            <div className="tfy-footer-socials">
              <a
                href="https://www.instagram.com/timeforyou.tfu"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram Time for You"
              >
                <span className="tfy-footer-social-icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="4"
                      y="4"
                      width="16"
                      height="16"
                      rx="5"
                      ry="5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="3.4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <circle cx="17" cy="7" r="0.9" fill="currentColor" />
                  </svg>
                </span>
                <span>@timeforyou.tfu</span>
              </a>
              <a
                href="https://www.instagram.com/madame.massage"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram madame.massage"
              >
                <span className="tfy-footer-social-icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="4"
                      y="4"
                      width="16"
                      height="16"
                      rx="5"
                      ry="5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="3.4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <circle cx="17" cy="7" r="0.9" fill="currentColor" />
                  </svg>
                </span>
                <span>@madame.massage</span>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Page Facebook Time for You"
              >
                <span className="tfy-footer-social-icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 8h2V5.5A20 20 0 0 0 13.6 5C11.5 5 10 6.3 10 8.8V11H8v3h2v5h3v-5h2.3L16 11h-3v-2.1C13 8.3 13.4 8 14 8Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span>Time for You</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="tfy-footer-bottom">
        <span>© {currentYear} Time for You. Tous droits réservés.</span>
        <span>
          Site vitrine réalisée par{" "}
          <a
            href="https://microdidact.com/"
            target="_blank"
            rel="noreferrer"
          >
            Microdidact
          </a>
          .
        </span>
      </div>
    </footer>
  );
};


