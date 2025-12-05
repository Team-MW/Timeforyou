import React from "react";
import { Navigation } from "./components/Navigation";
import { Mentions } from "./components/sections/Mentions";
import { Footer } from "./components/sections/Footer";

export const MentionsPage: React.FC = () => {
  return (
    <div className="tfy-root">
      <Navigation />
      <main>
        <Mentions />
      </main>
      <Footer />
    </div>
  );
};


