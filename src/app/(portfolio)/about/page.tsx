import Container from '@/app/components/Container';
import Image from 'next/image';
import css from './page.module.css';

export const metadata = {
  title: 'About me',
  description: '',
};

type Props = {};

const About = (props: Props) => {
  return (
    <Container>
      <div className={css.info}>
        <div className={css.imageWrapper}>
          <Image
            className={css.image}
            src="/images/photo-mono.jpg"
            width="800"
            height="800"
            alt=""
          />
        </div>
        <div className={css.infoWrapper}>
          <h1 className="hidden">Olena Pobehailo</h1>
          <h2 className="hidden">Fullstack Developer</h2>
          <p>
            Over my extensive tenure as a lead engineer,specializing in metal
            science, I&apos;ve learned to quickly and effectively tackle various
            tasks, analyze extensive information, pay meticulous attention to
            details, collaborate effectively within a team, maintain composure
            under time constraints, and, crucially, consistently seek new
            knowledge.
          </p>

          <p>
            Now, I am an enthusiastic Front-end developer committed to
            continuous learning.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default About;
