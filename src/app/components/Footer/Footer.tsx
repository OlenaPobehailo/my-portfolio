import Socials from '../Socials';
import css from './Footer.module.css';

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className={css.footer}>
        <Socials />
    </div>
  );
};

export default Footer;
