import Image from 'next/image';
import css from './page.module.css';

export default function Home() {
  return (
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
      <div className={css.infoWrapper}>
        <p className={css.welcome}>Hi and welcome!</p>
        <h1>I&apos;m Olena Pobehailo</h1>
        <h2>Fullstack Developer</h2>
        <p>
          During a long period of work as a lead engineer, specializing in metal
          science, I&apos;ve learned how to solve various tasks quickly and
          efficiently, analyze large amounts of information, pay close attention
          to detail, work flawlessly in a team, maintain composure under time
          constraints, and most importantly, always look for new knowledge.
        </p>
        <p>
          Now, I am an enthusiastic Fullstack developer committed to continuous
          learning.
        </p>
      </div>
    </div>
  );
}
