import { GrFormAdd } from 'react-icons/gr';
import styles from './FormCreateTask.module.css';

function FormCreateTask({ handleOnChange, id, placeholder }) {
  return (
    <form className={styles.form}>
      <label htmlFor="newtask">
        <input
          onChange={handleOnChange}
          type="text"
          name={id}
          id={id}
          placeholder={placeholder}
        />
      </label>

      <button type="button">
        <GrFormAdd />
      </button>
    </form>
  );
}

export default FormCreateTask;
