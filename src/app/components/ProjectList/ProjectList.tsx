'use client';

import { useState } from 'react';
import { projects } from '@/app/assets/projectsData';
import css from './ProjectList.module.css';
import Card from '../Card';
import Filter from '../Filter/Filter';

type Props = {};

const ProjectList = (props: Props) => {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const technologies = Array.from(
    new Set(projects.flatMap(project => project.technology))
  );

  const handleFilter = (selectedTechnology: string) => {
    if (selectedTechnology) {
      const filtered = projects.filter(project =>
        project.technology.includes(selectedTechnology)
      );
      setFilteredProjects(filtered);
    } else {
      setFilteredProjects(projects);
    }
  };

  console.log(technologies);

  return (
    <>
      <Filter
        technologies={['', ...technologies]}
        handleFilter={handleFilter}
      />

      <ul className={css.projectList}>
        {filteredProjects.map(item => (
          <li key={item.id}>
            <Card project={item} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProjectList;
