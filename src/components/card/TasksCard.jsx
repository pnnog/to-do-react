import { BsCheck2Circle } from 'react-icons/bs';
import Button from '../formulario/Button';

import styles from './TasksCard.module.css';

function TasksCard({ name, status }) {
  return (
    <div className={styles.card_container}>
      <div className={styles.texts_container}>
        <div className={styles.title}>
          <p>{name}</p>
        </div>
        <div className={styles.subtitle}>
          <p>{status}</p>
        </div>
      </div>

      <Button text={<BsCheck2Circle />} />
    </div>
  );
}

export default TasksCard;
