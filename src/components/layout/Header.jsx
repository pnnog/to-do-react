import styles from './styles/Header.module.css';

function Header({ title }) {
  return (
    <header className={styles.header_container}>
      <h1>{title}</h1>
    </header>
  );
}

export default Header;
