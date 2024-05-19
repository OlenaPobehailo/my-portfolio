'use client';

import { useState } from 'react';
import css from './Filter.module.css';

type Props = {
  technologies: string[];
  handleFilter: (selectedTechnology: string) => void;
};

const Filter = ({ technologies, handleFilter }: Props) => {
  const [selectedTechnology, setSelectedTechnology] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setSelectedTechnology(value);
    handleFilter(value);
  };

  return (
    <div className={css.filter}>
      <label htmlFor="technology" className={css.label}>
        Filter by Technology:
      </label>
      <select
        className={css.select}
        id="technology"
        value={selectedTechnology}
        onChange={handleChange}
      >
        <option value="" className={css.option}>
          All
        </option>
        {technologies
          .filter(tech => tech !== '')
          .map(tech => (
            <option key={tech} value={tech} className={css.option}>
              {tech}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Filter;
