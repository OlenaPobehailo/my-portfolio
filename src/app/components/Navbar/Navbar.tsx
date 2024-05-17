'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import css from './Navbar.module.css';

const Navbar = () => {
  const pathname = usePathname();
  const [activePath, setActivePath] = useState('');
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  const handleToggleMobileMenu = () => {
    setToggleMobileMenu(!toggleMobileMenu);
  };

  return (
    <nav className={css.nav}>
      <div className={css.burgerMenu} onClick={handleToggleMobileMenu}>
        <HiMenu className={css.menuIcon} />
      </div>

      {toggleMobileMenu && (
        <div className={css.mobileMenu}>
          <HiX onClick={handleToggleMobileMenu} className={css.closeIcon} />
          <ul>
            <li>
              <Link href="/" className={activePath === '/' ? css.active : ''} onClick={handleToggleMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={activePath === '/about' ? css.active : ''}
                onClick={handleToggleMobileMenu}
              >
                About me
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className={activePath === '/projects' ? css.active : ''}
                onClick={handleToggleMobileMenu}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/contacts"
                className={activePath === '/contacts' ? css.active : ''}
                onClick={handleToggleMobileMenu}
              >
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      )}

      <ul className={`${css.list} ${toggleMobileMenu ? css.hideDesktopMenu : ''}`}>
        <li>
          <Link href="/" className={activePath === '/' ? css.active : ''}>
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={activePath === '/about' ? css.active : ''}
          >
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
