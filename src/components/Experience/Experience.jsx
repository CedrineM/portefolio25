import { useEffect, useRef, useState } from "react";
import { HiArrowRight } from "react-icons/hi";
import CV from "../../assets/CV_Cédrine_MILESI.pdf";

import "./Experience.css";

const timelineData = [
  {
    id: 1,
    type: "formation",
    date: "2025",
    title:
      "Concepteur Développeur d'Applications - Titre RNCP de niveau 6 (Bac+3/4)",
    location: "Le Reacteur",
    status: "En cours - recherche d'Alternance",
    description: "Formation intensive en développement web et mobile",
    skills: ["HTML/CSS", "JavaScript", "React", "Node.js", "React Native"],
  },
  {
    id: 2,
    type: "experience",
    date: "Avril 2025",
    title: "Lead Développeuse - Projet MVP GiftSquad",
    location: "Le Reacteur",
    description:
      "Application mobile pour organiser des événements cadeaux (Secret Santa, anniversaires, Noël). Développement des fonctionnalités de gestion des participants et des listes de souhaits. Coordination et prise de décisions techniques.",
    skills: [
      "React Native",
      "Mobile Development",
      "Team Leadership",
      "Project Management",
    ],
  },
  {
    id: 3,
    type: "formation",
    date: "2024",
    title: "Formation Gratuite",
    location: "Le Reacteur",
    description: "Formation aux fondamentaux du développement web",
    skills: ["HTML/CSS", "JavaScript"],
  },
  {
    id: 4,
    type: "experience",
    date: "Septembre - Novembre 2024",
    title: "Stage Webdesigner",
    location: "Bien dans ta com",
    description: `Refonte du logo et du site de la mairie de Cléry 
      <a className="experience__description-link" href="https://www.clery.fr" target="_blank" rel="noopener noreferrer">
        (www.clery.fr)
      </a>
     . Création d'un visuel de papier cadeau pour Noël. Initiation au SEO.`,
    skills: ["Web Design", "SEO", "Logo Design", "UI/UX"],
  },
  {
    id: 5,
    type: "formation",
    date: "2024",
    title:
      "Concepteur(rice) Designer UI / WebDesigner - Titre RNCP niveau 6 (Bac+3/4) - Validé",
    location: "M2I formation",
    description:
      "Formation complète en développement web et design. Apprentissage des langages web, CMS, référencement et outils de design.",
    skills: [
      "HTML/CSS",
      "PHP",
      "JavaScript",
      "jQuery",
      "WordPress",
      "SEO",
      "Suite Adobe",
      "Figma",
      "After Effects",
    ],
  },
  {
    id: 5,
    type: "experience",
    date: "2017–2024",
    title:
      "École Pratique des Hautes Études – Master Biologie Santé Écologie (Spécialité : Signalisation et Systèmes Intégrés en Biologie)",
    description:
      "Après mon master, j’ai travaillé 5 ans dans la recherche scientifique : 1 an au Centre International de Recherche sur le Cancer, 3 ans en virologie (virus respiratoires), puis 1 an comme ingénieure de production, où j’ai participé au développement et à la gestion de la production de capteurs pour le système SecretCells.",
    skills: [
      "Travail d’équipe",
      "Organisation",
      "Logique",
      "Recherche scientifique",
      "Virologie",
    ],
  },
  // Ajoutez vos autres expériences et formations ici
];

// Fonction pour rendre le HTML en toute sécurité
const createMarkup = (htmlContent) => {
  return { __html: htmlContent };
};

const Experience = () => {
  const observerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("timeline-item--visible");
          setIsVisible(true);
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersect, options);

    const items = document.querySelectorAll(".timeline-item");
    items.forEach((item) => observerRef.current.observe(item));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <section id="experience" className="experience">
      <div className="experience__header">
        <span className="experience__number">02.</span>
        <h2 className="experience__title">Expériences et Formations</h2>
      </div>
      <div className={`timeline ${isVisible ? "visible" : ""}`}>
        <div className="timeline__line"></div>
        {timelineData.map((item) => (
          <div
            key={item.id}
            className={`timeline-item timeline-item--${item.type}`}
          >
            <div className="timeline-item__content">
              <div className="timeline-item__date">{item.date}</div>
              <div className="timeline-item__marker"></div>
              <h3 className="timeline-item__title">
                {item.title}
                {item.status && (
                  <span className="timeline-item__status">
                    {" "}
                    ({item.status})
                  </span>
                )}
              </h3>
              <div className="timeline-item__location">{item.location}</div>
              <p
                className="timeline-item__description"
                dangerouslySetInnerHTML={createMarkup(item.description)}
              />
              <div className="timeline-item__skills">
                {item.skills.map((skill, index) => (
                  <span key={index} className="timeline-item__skill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <a
        href={CV}
        target="_blank"
        rel="noopener noreferrer"
        className="cv-link"
      >
        <span className="cv-link__text">Télécharger mon CV</span>
        <span className="cv-link__arrow">
          <HiArrowRight size={20} />
        </span>
      </a>
    </section>
  );
};

export default Experience;
