import Navigation from '../Navigation/Navigatin.js';
import styles from './Appbar.module.css';

export default function Appbar() {
  return (
    <header className={styles.header}>
      <Navigation />
    </header>
  );
}