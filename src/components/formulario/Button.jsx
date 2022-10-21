import styles from './styles/Button.module.css';

function Button({ onClick, text }) {
  return (
    <div className={styles.btn_container}>
      <button type="button" onClick={onClick}>
        {text}
      </button>
    </div>
  );
}

export default Button;
