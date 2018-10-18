import React , { Component } from  'react';
import store from './store/index';
import  'antd/dist/antd.css';
import {getInputChangeAction,getAddItemAction,getDeleteItemAction,initListAction} from './store/actionCreator';
import  AntdTodoListUI from './AntdTodoListUI';
import axios from "axios";
// import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './store/actionTypes';


// const data = [
//     'Racing car sprays burning fuel into crowd.',
//     'Japanese princess to wed commoner.',
//     'Australian walks 100km after outback crash.',
//     'Man charged over missing wedding girl.',
//     'Los Angeles battles huge wildfires.',
// ];

class AntdTodolist extends Component{

    constructor(props){
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);


        this.handleBtnClick = this.handleBtnClick.bind(this);

        this.handleItemDelete = this.handleItemDelete.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        console.log(store.getState());
        this.state = store.getState();

        store.subscribe(this.handleStoreChange);
    }
    render(){
        return(
            <AntdTodoListUI
            inputValue = {this.state.inputValue}
            handleBtnClick = {this.handleBtnClick}
            handleInputChange = {this.handleInputChange}

            list = {this.state.list}
            handleItemDelete = {this.handleItemDelete}
            />
        )
    }
    componentDidMount(){
        axios.get('/api/todolist').then(
            (res)=>{
                // alert('succ');
                // this.setState(()=>{
                //     return{
                //         list:[...res.data]
                //     }
                // })
                const data = res.data;
                const action = initListAction(data);
                store.dispatch(action);
            }
        ).catch(
            ()=>{
                alert('error')
                const data = [1,2];
                const action = initListAction(data);
                store.dispatch(action);
            }
        )
    }

    handleInputChange(e){
        // const action = {
        //     type:CHANGE_INPUT_VALUE,
        //     value:e.target.value
        // }
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
        console.log(e.target.value);
    }
    handleBtnClick(){
        // const action = {
        //     type:ADD_TODO_ITEM
        // };
        const action = getAddItemAction();
        store.dispatch(action);
    }
    handleItemDelete(index){
        console.log(index);
        // const action = {
        //     type: DELETE_TODO_ITEM,
        //     index
        // }
        const action = getDeleteItemAction(index);
        store.dispatch(action);
    }
    handleStoreChange(){
        console.log('store change');
        this.setState(store.getState());
    }
}
export default AntdTodolist;