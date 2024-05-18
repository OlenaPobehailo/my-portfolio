'use client';

import Image from 'next/image';
import { useState } from 'react';
import css from './Card.module.css';

type Project = {
  id: Number;
  projectName: string;
  about: string;
  image: string;
  type: string;
  repo: string;
  livePage: string;
  technology: string[];
};

type Props = {
  project: Project;
};

const Card = ({ project }: Props) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleToggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className={css.card}>
      <Image
        src={project.image}
        alt={project.projectName}
        width="900"
        height="600"
      />
      <div className={css.info}>
        <div style={{ flexGrow: 1 }}>
          <h2>{project.projectName}</h2>
          <p className={css.type}>{project.type}</p>
          <p className={css.description}>
            {showFullDescription
              ? project.about
              : `${project.about.slice(0, 100)}...`}
            {!showFullDescription && (
              <button onClick={handleToggleDescription}>
                Show more details
              </button>
            )}
            {showFullDescription && (
              <button onClick={handleToggleDescription}>Show less</button>
            )}
          </p>

          <div className={css.technologies}>
            <span>Tech stack: </span>
            <ul>
              {project.technology.map((item, index) => (
                <li key={item}>
                  {item}
                  {index < project.technology.length - 1 && ','}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={css.links}>
          <span>
            <a
              href={project.livePage}
              target="_blank"
              rel="noreferrer"
              aria-label="Live Preview"
            >
              <span>Live</span>
            </a>
          </span>
          <span>
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              aria-label="View Code"
            >
              <span>Code</span>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
