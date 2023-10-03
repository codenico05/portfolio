import styles from './Navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>Logo</h1>
      <div className={styles.links}>
        <Link className={styles.link} href={'/'}>
          Home
        </Link>
        <Link className={styles.link} href={'/'}>
          Blog
        </Link>
        <div className={styles.link}>About</div>
      </div>
    </nav>
  );
}
