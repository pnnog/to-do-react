import { Link } from 'react-router-dom';
import { FaCircleNotch } from 'react-icons/fa';
import styles from './styles/NavBar.module.css';

import FormCreateTask from '../formulario/FormCreateTask';

function NavBar() {
  return (
    <div className={styles.navBar_container}>
      <div className={styles.navBar_content}>
        <header>
          <h1>
            Bem vindo, <span>Paulo</span>
          </h1>
        </header>

        <nav>
          <ul className={styles.list}>
            <li>
              <FaCircleNotch />
              <Link to="/">Home</Link>
            </li>
            <li>
              <FaCircleNotch />
              <Link to="/pendentes">Pendentes</Link>
            </li>
            <li>
              <FaCircleNotch />
              <Link to="/concluidas">Concluídas</Link>
            </li>
            <li>
              <FaCircleNotch />
              <Link to="/all">Todas</Link>
            </li>
          </ul>
        </nav>

        <FormCreateTask placeholder="Crie uma nova task" />
      </div>
    </div>
  );
}

export default NavBar;
