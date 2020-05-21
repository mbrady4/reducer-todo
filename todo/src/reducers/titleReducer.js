import React from 'react';

export const initialState = [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}]

export const taskReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TASK':
            console.log('Task Added');
            return [ ...state, { 
                item: action.payload,
                completed: false,
                id: new Date()
             } ]
        case 'TOGGLE_COMPLETE':
            const tempTasks = JSON.parse(JSON.stringify(state));
            for (var i in tempTasks) {
                if (tempTasks[i].id === action.payload) {
                  tempTasks[i].completed = !tempTasks[i].completed;
                  break;
                }
            };
            return tempTasks;
        case 'CLEAR_COMPLETE':
            const unComplete = state.filter(task => task.completed !== true);
            return unComplete
        default: 
            return state
    }
};

