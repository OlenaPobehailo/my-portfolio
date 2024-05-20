'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import css from './Navbar.module.css';

const Navbar = () => {
  const pathname = usePathname();
  const [activePath, setActivePath] = useState('');

  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  return (
    <nav className={css.nav}>
      <ul className={css.list}>
        <li>
          <Link href="/" className={activePath === '/' ? css.active : ''}>
            About me
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className={activePath === '/projects' ? css.active : ''}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="/contacts"
            className={activePath === '/contacts' ? css.active : ''}
          >
            Contacts
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
