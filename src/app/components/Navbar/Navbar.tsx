import Link from 'next/link';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About me</Link>
      </li>
      <li>
        <Link href="/projects">Projects</Link>
      </li>
      <li>
        <Link href="/contacts">Contacts</Link>
      </li>
    </ul>
  );
};

export default Navbar;
