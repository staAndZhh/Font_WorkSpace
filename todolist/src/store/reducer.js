import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionTypes';

const defaultState = {
    inputvalue : '',
    list: []
}
export default (state  = defaultState,action) =>{
    if (action.type === CHANGE_INPUT_VALUE){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputvalue = action.value;
        return newState;
    }
    if (action.type === ADD_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputvalue);
        newState.inputvalue = "";
        return newState;
    }
    if (action.type === DELETE_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState;
    }


    console.log(state,action)
    return state;
}