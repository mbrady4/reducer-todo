import React from 'react';
import ToDo from './todo/ToDo.js';

const ToDoList = ({tasks, modifyTaskList}) => {

    return (
        <div>
            {tasks.map( (task) => {
                return <ToDo task={task} modifyTaskList={modifyTaskList} key={task.id}/>
            })}
        </div>
    )
}

export default ToDoList;