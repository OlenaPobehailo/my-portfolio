import Icon from '../Icon/Icon';
import css from './Socials.module.css';

type Props = {};

const Socials = (props: Props) => {
  return (
    <ul className={css.socials}>
      <li>
        <a
          className={css.link}
          href="https://github.com/OlenaPobehailo"
          target="_blank"
          rel="noreferrer"
        >
          <Icon name="icon-github" className={css.icon} />
        </a>
      </li>
      <li>
        <a
          className={css.link}
          href="https://www.linkedin.com/in/olena-pobehailo/"
          target="_blank"
          rel="noreferrer"
        >
          <Icon name="icon-linkedin" className={css.icon} />
        </a>
      </li>
      <li>
        <a
          className={css.link}
          href="https://t.me/OlenapP365"
          target="_blank"
          rel="noreferrer"
        >
          <Icon name="icon-telegram" className={css.icon} />
        </a>
      </li>
      <li>
        <a
          className={css.link}
          href="mailto:olena.pobehailo@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <Icon name="icon-mail" className={css.icon} />
        </a>
      </li>
    </ul>
  );
};

export default Socials;
