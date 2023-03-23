import React, { useState } from 'react';
import Todo from './components/Todo';
import Form from './components/Form';
import { Container } from '@mui/material';
import { nanoid } from 'nanoid';

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

  function toggleStatus(id) {
    const updated = tasks.map(task => {
      if (id === task.id){
        return {...task, status: !task.status}
      }
      return task;
    })
    setTasks(updated);
  }

  const taskList = tasks.map((task) => 
  <Todo id = {task.id} name={task.name} status={task.status} key = {task.id} toggleStatus={toggleStatus}/>);  
  function addTask(name) {
    const newTask = { id : `${nanoid()}` , name, status : false}
    setTasks([...tasks, newTask]);
  }
  const taskListStatus = tasks.map(e => e.status);
  // eslint-disable-next-line no-sequences
  const unfinishCounter = taskListStatus.reduce((count, item) => (count[item] = count[item] + 1 || 1, count),{}).false === undefined ? 0 : taskListStatus.reduce((count, item) => (count[item] = count[item] + 1 || 1, count),{}).false
  const noun = unfinishCounter !== 1 ? 'tasks' : 'task'
  const taskleft = `${unfinishCounter} ${noun} left`
  return (
    <Container className="App">
      <header className="App-header">        
        <h1>
          Toooo Dooo
        </h1>       
      </header>
      <Form addTask={addTask} />
      <h2>{taskleft}</h2>
      <ul className='todo-list stack-large stack-exception'>
        {taskList}
      </ul>
    </Container>
  );
}

export default App;
