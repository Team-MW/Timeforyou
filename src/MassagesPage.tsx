import React from "react";
import { Navigation } from "./components/Navigation";
import { Massages } from "./components/sections/Massages";
import { Footer } from "./components/sections/Footer";
import heroImg from "./images/hommemassage.jpg";
import "./styles.css";

export const MassagesPage: React.FC = () => {
  return (
    <div className="tfy-root">
      <Navigation activeSection="massages" />
      <header className="tfy-subhero">
        <div className="tfy-subhero-media">
          <img src={heroImg} alt="Massage bien-être" />
        </div>
        <div className="tfy-subhero-content">
          <p className="tfy-hero-eyebrow">Massages bien-être · Soin du corps</p>
          <h1>Massages &amp; soins proposés</h1>
          <p className="tfy-subhero-intro">
            Une palette de massages pensés pour accompagner toutes les étapes de
            la vie : relaxation profonde, récupération, légèreté, maternité,
            âge d&apos;or, post-opératoire…
          </p>
          <a href="/#reservation" className="tfy-btn tfy-btn-primary">
            Prendre rendez-vous
          </a>
        </div>
      </header>
      <main>
        <Massages />
      </main>
      <Footer />
    </div>
  );
};


