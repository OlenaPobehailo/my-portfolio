import Container from '@/app/components/Container';
import { projects } from '@/app/assets/projectsData';
import Card from '@/app/components/Card';
import css from './page.module.css';
export const metadata = {
  title: 'Projects',
  description: '',
};

type Props = {};

console.log(projects);

const Projects = (props: Props) => {
  return (
    <ul className={css.projectList}>
      {projects.map(item => (
        <li key={item.id}>
          <Card key={item.id} project={item} />
        </li>
      ))}
    </ul>
  );
};

export default Projects;
