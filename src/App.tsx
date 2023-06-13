// styles
import styles from './App.module.css';

// hook 
import { useState } from 'react';

// componentes
import Footer from './components/Footer';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

// interface 
import { ITask } from './interfaces/Task';

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([]); 


  return (
    <div className="App">
        <Header/>
        <main className={styles.main}>
            <div className="form">
                <h2>O que voce vai fazer?</h2>
                <TaskForm btnText="Criar Tarefa" taskList={taskList} setTaskList={setTaskList}/>
            </div>
            <div className="lista">
               <h2>Suas tarefas:</h2>
              <TaskList/>
            </div>
        </main>
        <Footer/>
    </div>
  );
}

export default App;
