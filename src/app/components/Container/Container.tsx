import { ReactNode } from 'react';
import css from './Container.module.css';

type Props = {
  children: ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className={css.container}>{children}</div>;
};

export default Container;
