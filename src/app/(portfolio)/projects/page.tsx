import { projects } from '@/app/assets/projectsData';
import Container from '@/app/components/Container';
import ProjectList from '@/app/components/ProjectList';

export const metadata = {
  title: 'Projects',
  description:
    'Browse through a collection of web development projects, including responsive websites, web applications, and e-commerce solutions. Discover how cutting-edge technologies and best practices are applied to deliver high-quality results.',
};

type Props = {};

const Projects = (props: Props) => {
  return (
    <Container>
      <ProjectList />
    </Container>
  );
};

export default Projects;
