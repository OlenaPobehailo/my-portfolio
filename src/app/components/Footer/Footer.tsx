import Socials from '../Socials';
import css from './Footer.module.css';

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className={css.footer}>
      <Socials />
      <p className={css.copyright}>&copy; 2024 Olena Pobehailo</p>
    </div>
  );
};

export default Footer;
