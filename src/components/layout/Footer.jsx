import { FaHeart } from 'react-icons/fa';
import styles from './styles/Footter.module.css';

function Footer() {
  return (
    <footer className={styles.footer_container}>
      <div className={styles.footer_content}>
        <p>
          Desenvolvido com <FaHeart /> por{' '}
          <span>
            <a href="https://github.com/pnnog" target="_blank" rel="noreferrer">
              pnnog
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
