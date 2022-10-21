/* eslint-disable react/destructuring-assignment */
// Encapsula outros componentes passando alguma característica.
// Classes customizadas
import styles from './styles/Container.module.css';

function Container(props) {
  // eslint-disable-next-line react/destructuring-assignment
  return (
    <div className={`${styles.container} ${styles[props.customClass]}`}>
      {props.children}
    </div>
  );
}
export default Container;
