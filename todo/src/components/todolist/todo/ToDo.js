import React from 'react';
import './ToDo.css';

const ToDo = ({task, modifyTaskList}) => {
    return (
        <div>
        { task.completed
            ? <button className='complete' 
                      onClick={() => modifyTaskList({type: 'TOGGLE_COMPLETE', payload: task.id})}>{task.item}</button>
            : <button onClick={() => modifyTaskList({type: 'TOGGLE_COMPLETE', payload: task.id})}>{task.item}</button>
        }
        </div>
    )
}

export default ToDo;