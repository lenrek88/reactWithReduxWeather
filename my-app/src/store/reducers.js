import {ACTION_CHANGE_CURRENT_VALUE, ACTION_CHANGE_LIKED} from '../index'

const initialState = {
    currentValue: 'Moscow',
    liked: ['']
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_CHANGE_CURRENT_VALUE:
            return {...state, currentValue: action.payload};
        case ACTION_CHANGE_LIKED:
            return {...state, liked: action.payload};
    };
    return state
};