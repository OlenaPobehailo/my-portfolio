import { projects } from '@/app/assets/projectsData';
import Container from '@/app/components/Container';
import ProjectList from '@/app/components/ProjectList';

export const metadata = {
  title: 'Projects',
  description:
    'Explore a diverse range of projects showcasing full-stack development skills. Each project highlights proficiency in technologies like React, Next.js, Node.js, and MongoDB.',
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
