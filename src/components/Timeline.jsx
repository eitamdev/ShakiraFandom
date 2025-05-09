import React, { useState, useEffect } from "react";
import "./Timeline.css";

const events = [
  {
    year: 1977,
    title: "Naissance",
    description: "Shakira Isabel Mebarak Ripoll naît le 2 février à Barranquilla, en Colombie.",
  },
  {
    year: 1985,
    title: "Première chanson",
    description: "À l'âge de 8 ans, elle écrit sa première chanson intitulée 'Tus gafas oscuras', dédiée à son père.",
  },
  {
    year: 1991,
    title: "Débuts musicaux : *Magia*",
    description: "Shakira sort son premier album à l'âge de 13 ans, composé de chansons écrites depuis ses 8 ans.",
  },
  {
    year: 1993,
    title: "Deuxième album : *Peligro*",
    description: "Sortie de son deuxième album, qui reste peu connu du grand public.",
  },
  {
    year: 1995,
    title: "Percée avec *Pies Descalzos*",
    description: "L'album qui la révèle en Amérique latine, avec des hits comme 'Estoy Aquí'.",
  },
  {
    year: 1998,
    title: "Confirmation : *¿Dónde Están los Ladrones?*",
    description: "Album acclamé mêlant rock latino et influences orientales, produit par Emilio Estefan.",
  },
  {
    year: 1999,
    title: "Premier Grammy Award",
    description: "Remporte le Grammy Award du Meilleur Album Pop Latin pour 'MTV Unplugged'.",
  },
  {
    year: 2001,
    title: "Crossover international : *Laundry Service*",
    description: "Premier album en anglais avec les tubes 'Whenever, Wherever' et 'Underneath Your Clothes'.",
  },
  {
    year: 2005,
    title: "*Fijación Oral Vol. 1*",
    description: "Album en espagnol avec le hit 'La Tortura' en duo avec Alejandro Sanz.",
  },
  {
    year: 2006,
    title: "*Oral Fixation Vol. 2*",
    description: "Version anglaise avec le tube mondial 'Hips Don't Lie' en featuring avec Wyclef Jean.",
  },
  {
    year: 2009,
    title: "*She Wolf*",
    description: "Album électro-pop avec des titres comme 'She Wolf' et 'Did It Again'.",
  },
  {
    year: 2010,
    title: "*Sale el Sol*",
    description: "Retour aux sources avec des sonorités latines, incluant 'Loca' et 'Rabiosa'.",
  },
  {
    year: 2010,
    title: "Hymne de la Coupe du Monde : *Waka Waka*",
    description: "Chanson officielle de la Coupe du Monde 2010, devenant un hit planétaire.",
  },
  {
    year: 2011,
    title: "Reconnaissance internationale",
    description: "Nommée Personnalité de l'année par la Latin Recording Academy et Chevalier de l'Ordre des Arts et des Lettres en France.",
  },
  {
    year: 2014,
    title: "Album éponyme : *Shakira*",
    description: "Inclut des collaborations avec Rihanna ('Can't Remember to Forget You') et Blake Shelton.",
  },
  {
    year: 2017,
    title: "*El Dorado*",
    description: "Album à succès avec des titres comme 'Chantaje' en duo avec Maluma.",
  },
  {
    year: 2020,
    title: "Super Bowl Halftime Show",
    description: "Performance mémorable aux côtés de Jennifer Lopez lors de la mi-temps du Super Bowl.",
  },
  {
    year: 2022,
    title: "Séparation avec Gerard Piqué",
    description: "Annonce de la fin de sa relation avec le footballeur espagnol Gerard Piqué.",
  },
  {
    year: 2023,
    title: "Collaboration avec Bizarrap : *BZRP Music Sessions #53*",
    description: "Titre explosif abordant sa séparation avec Gerard Piqué, devenant viral.",
  },
  {
    year: 2024,
    title: "Nouvel album : *Las Mujeres Ya No Lloran*",
    description: "Premier album en 7 ans, abordant des thèmes de résilience et d'empowerment.",
  },
  {
    year: 2025,
    title: "Tournée mondiale : *Las Mujeres Ya No Lloran World Tour*",
    description: "Tournée mondiale en cours, avec des concerts prévus en Amérique du Nord et en Europe.",
  },
];

const Timeline = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const timelineHeight = document.querySelector('.timeline').offsetHeight;
    const scrollPosition = window.scrollY;
    const progress = (scrollPosition / (timelineHeight - window.innerHeight)) * 100;
    setScrollProgress(Math.min(Math.max(progress, 0), 100));
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="timeline-container">
      <h2>📅 Timeline de Shakira</h2>
      <div className="timeline">
        {events.map((event, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <span className="timeline-year">{event.year}</span>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${scrollProgress}%` }}></div>
      </div>
    </div>
  );
};

export default Timeline;
