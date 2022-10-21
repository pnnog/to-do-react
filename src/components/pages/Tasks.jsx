import { useState, useEffect } from 'react';
import TasksCard from '../card/TasksCard';
import styles from './styles/Tasks.module.css';
import Header from '../layout/Header';

function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/tasks', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((respo) => respo.json())
      .then((data) => setTasks(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.tasks_container}>
      <Header title="Todas as tarefas" />
      <section>
        {tasks.length > 0 && (
          <div>
            {tasks.map((task) => (
              <TasksCard
                name={task.name}
                status={task.status}
                id={task.id}
                key={task.id}
                category={task.category}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Tasks;
