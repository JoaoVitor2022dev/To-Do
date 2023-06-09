// styles 
import { ITask } from "../interfaces/Task";

// interface 
import styles from "../components/TaskList.module.css";

interface Props {
    taskList: ITask[],
    handleDelete(id: number): void
} 

const TaskList = ({ taskList, handleDelete }: Props) => {

   console.log(taskList.length);
   
return( 
    <>
      {taskList.length > 0 ? (
       taskList.map((task) => (
         <div key={task.id} className={styles.task}>
            <div className={styles.details}>
               <h4>{task.title}</h4>
               <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div className={styles.actions}>
               <i className="bi bi-pencil"></i>
               <i className="bi bi-trash" onClick={() => handleDelete(task.id)}></i>
            </div>
         </div>
      ))
    ): (
        <p>Nao há tarefas cadastradas!</p>
      )
    }
    </>
 ); 
}

export default TaskList;