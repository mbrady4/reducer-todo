import React from 'react';

export const initialFormValues = ''

export const formReducer = (state, action) => {
    switch(action.type) {
        case 'UPDATE':
            return { state }
    }
    return state
}