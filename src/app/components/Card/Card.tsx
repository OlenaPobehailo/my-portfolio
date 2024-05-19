'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import css from './Card.module.css';
import Modal from '../Modal';
import ProjectDetails from '../ProjectDetails';

export type Project = {
  id: number;
  projectName: string;
  about: string;
  image: string;
  type: string;
  repo: string;
  livePage: string;
  technology: string[];
  description: string;
};

type CardProps = {
  project: Project;
};

const Card = ({ project }: CardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={css.card}>
        <div className={css.imageWrapper}>
          <Image
            src={project.image}
            alt={project.projectName}
            width="900"
            height="600"
          />
        </div>
        <div className={css.info}>
          <div style={{ flexGrow: 1 }}>
            <h2>{project.projectName}</h2>
            <p className={css.type}>{project.type}</p>
            <p className={css.description}>{project.about}</p>

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
              <button className={css.detailsButton} onClick={openModal}>
                <span>Details</span>
              </button>
            </span>

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

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <ProjectDetails project={project} />
        </Modal>
      )}
    </>
  );
};

export default Card;
