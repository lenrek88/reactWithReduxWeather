import {ACTION_CHANGE_CURRENT_VALUE, ACTION_CHANGE_LIKED} from '../index'

export const changeCurrentValue = (newCurrentValue) => {
    return {
        type: ACTION_CHANGE_CURRENT_VALUE,
        payload: newCurrentValue
    };
};

export const changeLiked = (newLiked) => {
    return {
        type: ACTION_CHANGE_LIKED,
        payload: newLiked
    }
}