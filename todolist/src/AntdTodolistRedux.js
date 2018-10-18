import React , { Component } from  'react';
import { Button ,Input, List} from 'antd';
import store from './store';
import  'antd/dist/antd.css';
import {getInputChangeAction,getAddItemAction,getDeleteItemAction} from './store/actionCreator';
// import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './store/actionTypes';


// const data = [
//     'Racing car sprays burning fuel into crowd.',
//     'Japanese princess to wed commoner.',
//     'Australian walks 100km after outback crash.',
//     'Man charged over missing wedding girl.',
//     'Los Angeles battles huge wildfires.',
// ];

class AntdTodolistRedux extends Component{

    constructor(props){
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);

        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        console.log(store.getState());
        this.state = store.getState();

        store.subscribe(this.handleStoreChange);
    }
    render(){
        return(
            <div style={{marginTop :'10px', marginLeft:'10px'}}>
                <Input placeholder ='todo info' style = {{ width: '400px'}} value={this.state.inputvalue}
                 onChange = {this.handleInputChange} />
                <Button type="primary" onClick={this.handleBtnClick}> commit </Button>
                <List
                    bordered
                    style = {{ marginTop:'10px', width:'300px'}}
                    // dataSource={data}
                    // dataSource={[]}
                    dataSource = {this.state.list}
                    renderItem={(item,index) => (<List.Item onClick = {this.handleItemDelete.bind(this,index)}>{item}</List.Item>)}
                />
            </div>
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
export default AntdTodolistRedux;