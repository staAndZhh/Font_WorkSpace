import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM ,INIT_LIST_AX, GET_INIT_LIST,GET_INIT_LIST_SAGE} from './actionTypes';
import axios from 'axios';

export const getInputChangeAction = (value) => (
    {
        type:CHANGE_INPUT_VALUE,
        value
    }
)

export const getAddItemAction = (value) => (
    {
        type:ADD_TODO_ITEM,
    }
)

export const getDeleteItemAction = (index) => (
    {
        type:DELETE_TODO_ITEM,
        index
    }
)
export const initListAction = (data) => (
    {
        type:INIT_LIST_AX,
        data
    }
)

export const getTodoList = ()=>{
    return (dispatch)=>{
        axios.get('./list.json').then(
            (res)=>{
                const data = res.data;
                console.log(data);
                const action = initListAction(data);
                dispatch(action);
            }
        )
    }
}

export const getInitListSaga = () => (
    {
        type:GET_INIT_LIST_SAGE
    }
)