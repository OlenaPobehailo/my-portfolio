import { Project } from '../Card/Card';
import css from './ProjectDetails.module.css';
import Image from 'next/image';

type Props = { project: Project };

const ProjectDetails = ({ project }: Props) => {
  return (
    <div className={css.details}>
      <div className={css.imageWrapper}>
        <Image
          src={project.image}
          alt={project.projectName}
          width="900"
          height="600"
        />
      </div>
      <div className={css.info}>
        <div>
          <h2>{project.projectName}</h2>
          <p className={css.type}>{project.type}</p>
          <p className={css.description}>{project.description}</p>

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

export default ProjectDetails;
