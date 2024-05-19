import React, { useState } from 'react';
import { projects } from '@/app/assets/projectsData';
import css from './ProjectList.module.css';
import Card from '../Card';

type Props = {};

const ProjectList = (props: Props) => {
  return (
    <ul className={css.projectList}>
      {projects.map(item => (
        <li key={item.id}>
          <Card project={item} />
        </li>
      ))}
    </ul>
  );
};

export default ProjectList;
