import { takeEvery ,put} from 'redux-saga/effects';
import {GET_INIT_LIST_SAGE} from './actionTypes';
import {initListAction} from './actionCreator';

import axios from 'axios';

function* getInitList() {
    try{
        const res = yield axios.get('/list.json');
        const action = initListAction(res.data);
        yield put(action);
    } catch (e) {
        console.log('error');
         const res ={
            data:[1,2,3]};
        const action = initListAction(res.data);
        yield put(action);
    }


}
// generator 函数
function * todoSagas (){
    yield takeEvery(GET_INIT_LIST_SAGE, getInitList);
}

export  default  todoSagas;