import Image from 'next/image';
import Icon from './components/Icon/Icon';
import css from './page.module.css';
import Container from './components/Container';

export default function Home() {
  return (
    <Container>
      <div className={css.info}>
        <div className={css.imageWrapper}>
          <Image
            className={css.image}
            src="/images/photo-mono.jpg"
            width="600"
            height="800"
            alt=""
          />
        </div>
        <div className={css.welcome}>
          <p>Hi and welcome!</p>
          <h1>I&apos;m Olena Pobehailo</h1>
          <h2>Fullstack Developer</h2>
        </div>
        <div className={css.infoWrapper}>
          <p>
            Having worked for many years as a lead engineer specializing in
            materials science, I&apos;ve become proficient in solving various
            tasks quickly and efficiently, analyzing large amounts of
            information, paying close attention to detail, working effectively
            in a team, maintaining composure under time constraints, and always
            seeking new knowledge.
          </p>
          <p>
            Now, I am an enthusiastic Fullstack developer committed to
            continuous learning. While I don&apos;t have commercial experience
            yet, I have worked on several educational projects that showcase my
            skills. I have hands-on experience with front-end technologies such
            as HTML, CSS, and JavaScript, including frameworks like React,
            Next.js. On the back-end, I&apos;ve worked with Node.js, along with
            databases MongoDB and framework Express.js. My projects include
            building responsive web applications, implementing authentication
            systems, and integrating RESTful APIs for data retrieval and
            manipulation.
          </p>
        </div>

        <div className={css.skillsWrapper}>
          <h3>Tech stack</h3>
          <p>Use now:</p>
          <ul className={css.list}>
            <li className={css.item}>
              <Icon name="icon-html5" className={css.icon} />
              <p>HTML5</p>
            </li>
            <li className={css.item}>
              <Icon name="icon-css3" className={css.icon} />
              <p>CSS3</p>
            </li>
            <li className={css.item}>
              <Icon name="icon-sass" className={css.icon} />
              <p>SASS</p>
            </li>
            <li className={css.item}>
              <Icon name="icon-javascript" className={css.icon} />
              <p>JavaScript</p>
            </li>
            <li className={css.item}>
              <Icon name="icon-react" className={css.icon} />
              <p>React</p>
            </li>
            <li className={css.item}>
              <Icon name="icon-redux" className={css.icon} />
              <p>Redux</p>
            </li>
            <li className={css.item}>
              <Icon name="icon-typescript" className={css.icon} />
              <p>TypeScript</p>
            </li>
            <li className={css.item}>
              <Icon name="icon-nodejs" className={css.icon} />
              <p>Node.js</p>
            </li>
            <li className={css.item}>
              <Icon name="icon-mongodb" className={css.icon} />
              <p>MongoDB</p>
            </li>
            <li className={css.item}>
              <Icon name="icon-express" className={css.icon} />
              <p>Express.js</p>
            </li>
          </ul>

          <p>Learn now:</p>
          <ul className={css.list}>
            <li className={css.item}>
              <Icon name="icon-nextjs" className={css.icon} />
              <p>Next.js</p>
            </li>
            <li className={css.item}>
              <Icon name="icon-tailwind" className={css.icon} />
              <p>Tailwind</p>
            </li>
            <li className={css.item}>
              <Icon name="icon-react" className={css.icon} />
              <p>React Native</p>
            </li>
            <li className={css.item}>
              <Icon name="icon-wordpress" className={css.icon} />
              <p>WordPress</p>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
}
