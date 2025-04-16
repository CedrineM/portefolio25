import React, { useState, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt, FaFileDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import axios from "axios";
import "./Archive.css";
import dossierMockup from "../../assets/img/DossierMockupSE.png";
import dossierPDF from "../../assets/DossierProjetSE.pdf";

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
const GITHUB_USERNAME = "CedrineM"; // Remplacez par votre nom d'utilisateur GitHub

const Archive = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const headers = GITHUB_TOKEN
          ? { Authorization: `Bearer ${GITHUB_TOKEN}` }
          : {};

        const response = await axios.get(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=created&direction=desc&per_page=100`,
          { headers }
        );

        const projectsData = await Promise.all(
          response.data.map(async (repo) => {
            try {
              const languagesResponse = await axios.get(repo.languages_url, {
                headers,
              });

              return {
                year: new Date(repo.created_at).getFullYear(),
                title: repo.name,
                description: repo.description,
                builtWith: Object.keys(languagesResponse.data),
                links: {
                  github: repo.html_url,
                  external: repo.homepage,
                },
              };
            } catch (err) {
              console.error(
                `Erreur lors de la récupération des langages pour ${repo.name}:`,
                err
              );
              return {
                year: new Date(repo.created_at).getFullYear(),
                title: repo.name,
                description: repo.description,
                builtWith: [],
                links: {
                  github: repo.html_url,
                  external: repo.homepage,
                },
              };
            }
          })
        );

        setProjects(projectsData);
        setLoading(false);
      } catch (err) {
        console.error("Erreur lors de la récupération des projets:", err);
        setError(
          err.response?.status === 403
            ? "Limite de requêtes GitHub atteinte. Veuillez réessayer plus tard."
            : "Erreur lors de la récupération des projets. Veuillez vérifier votre connexion et réessayer."
        );
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <main className="main__archive">
        <section className="archive">
          <div className="archive__header">
            <Link to="/" className="archive-link">
              <span className="archive-link__arrow">
                <HiArrowLeft size={20} />
              </span>
              <span className="archive-link__text">Cédrine MILESI</span>
            </Link>
            <h1 className="archive__title">Chargement des projets...</h1>
          </div>
        </section>
      </main>
    );
  }

  if (error) {
    return (
      <main className="main__archive">
        <section className="archive">
          <div className="archive__header">
            <Link to="/" className="archive-link">
              <span className="archive-link__arrow">
                <HiArrowLeft size={20} />
              </span>
              <span className="archive-link__text">Cédrine MILESI</span>
            </Link>
            <h1 className="archive__title">Erreur</h1>
            <p className="archive__error">{error}</p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="main__archive">
      <section className="archive">
        <div className="archive__header">
          <Link to="/" className="archive-link">
            <span className="archive-link__arrow">
              <HiArrowLeft size={20} />
            </span>
            <span className="archive-link__text">Cédrine MILESI</span>
          </Link>
          <h1 className="archive__title">Tous les Projets</h1>
        </div>

        <table className="archive__table">
          <thead>
            <tr>
              <th>Année</th>
              <th>Projet</th>
              <th>Technologies</th>
              <th>Liens</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={index}>
                <td className="archive__year">{project.year}</td>
                <td className="archive__title-cell">
                  {project.title}
                  {project.description && (
                    <p className="archive__description">
                      {project.description}
                    </p>
                  )}
                </td>
                <td className="archive__built-with">
                  {project.builtWith.join(" · ")}
                </td>
                <td className="archive__links">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="archive__link"
                      title="GitHub Repository"
                    >
                      <FaGithub />
                    </a>
                  )}
                  {project.links.external && (
                    <a
                      href={project.links.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="archive__link"
                      title="Live Demo"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="archive__project-dossier">
          <div className="project-dossier__content">
            <h2 className="project-dossier__title">
              Dossier du projet Sell'Élégance
            </h2>
            <h3 className="project-dossier__subtitle">
              Évaluation de fin de formation RNCP Concepteur Designer UI
            </h3>
            <p className="project-dossier__description">
              Le dossier du projet Sell'Élégance a été élaboré dans le cadre de
              l'évaluation finale pour l'obtention du titre RNCP Concepteur
              Designer UI. Ce projet complet illustre une maîtrise des
              compétences en design UI/UX, en conception graphique, et en
              stratégie de communication visuelle.
            </p>
            <a
              href={dossierPDF}
              target="_blank"
              rel="noopener noreferrer"
              className="project-dossier__link"
            >
              <FaFileDownload />
              <span>Télécharger le dossier complet</span>
            </a>
          </div>
          <div className="project-dossier__image">
            <img src={dossierMockup} alt="Mockup du dossier Sell'Élégance" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Archive;
