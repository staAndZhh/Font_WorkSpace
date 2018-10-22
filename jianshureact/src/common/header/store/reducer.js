import * as constants from './actionTypes';
import { fromJS } from 'immutable';
const defaultState = fromJS(
    {
        focused: false,
        mouseIn: false,
        list:[],
        page:1,
        totalPage:1
    }
);

export default (state = defaultState,action)=>{

    // if(action.type === constants.SEARCH_FOCUS){
    //     // return {
    //     //     focused:true
    //     // };
    //     return state.set('focused',true);
    // }
    // if(action.type === constants.SEARCH_BLUR){
    //     return state.set('focused',false);
    // }
    // if(action.type === constants.CHANGE_LIST){
    //     return state.set('list',action.data);
    // }
    // return state;
    switch (action.type) {
        case constants.SEARCH_BLUR:
            return state.set('focused',true);
        case constants.SEARCH_FOCUS:
            return state.set('focused',false);
        case constants.NOUSE_ENTER:
            return state.set('mouseIn',true);
        case constants.MOUSE_LEAVE:
            return state.set('mouseIn',false);
        case constants.CHANGE_PAGE:
            return state.set('page',action.page)
        case constants.CHANGE_LIST:
            // return state.set('list',action.data).set('totalPage',action.totalPage);
            return state.merge({
                list:action.data,
                totalPage:action.totalPage
            })
        default:
            return state;
    }

}