import React, { useState } from 'react';

const ToDoForm = ({modifyTaskList}) => {

    const [taskText, setTaskText] = useState('');

    const handleChanges = (e) => {
        setTaskText(e.target.value);
    };

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            modifyTaskList({ type:"ADD_TASK", payload: taskText});
            setTaskText('');
            }
        }>
        <label>
        <input type='text'
                name='task'
                placeholder='Add Task...'
                value={taskText}
                onChange={handleChanges}
                />
        </label>
        <button type='submit'>Add Task</button>
        </form>
        
    )
}

export default ToDoForm;