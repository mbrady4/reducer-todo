import React from 'react';
import { useReducer } from 'react';
import titleReducer from './reducers/titleReducer.js';
// import formReducer from './reducers/formReducer.js';
import { taskReducer, initialState } from './reducers/titleReducer.js'
import ToDoForm from './components/todoform/ToDoForm.js';
import ToDoList from './components/todolist/todolist.js';
import './App.css';

function App() {

  const [taskList, modifyTaskList] = useReducer(taskReducer, initialState)
  // const [formValues, modifyForm] = useReducer(formReducer, initialState)

  return (
    <div className="App">
      {/* <h1>{taskList[0].item}</h1> */}
      <ToDoList tasks={taskList} modifyTaskList={modifyTaskList} />
      <ToDoForm modifyTaskList={modifyTaskList} />
      <button onClick={() => modifyTaskList({type: 'CLEAR_COMPLETE'})}>
        Clear Complete
      </button>
    </div>
  );
}

export default App;
