import { projects } from '@/app/assets/projectsData';
import ProjectList from '@/app/components/ProjectList';

export const metadata = {
  title: 'Projects',
  description: '',
};

type Props = {};

console.log(projects);

const Projects = (props: Props) => {
  return <ProjectList />;
};

export default Projects;
