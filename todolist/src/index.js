import React from 'react';
import ReactDOM from 'react-dom';
import Todolist from './Todolist';
import AntdTodolistRedux from './AntdTodolistRedux';
import AntdTodolist from './AntdTodolist';
import AntdTodolistThunk from './AntdTodolistThunk';
import AntdTodolistSaga from './AntdTodolistSaga';
// ReactDOM.render(<Todolist />, document.getElementById('root'));
// ReactDOM.render(<AntdTodolistRedux />, document.getElementById('root'));
// ReactDOM.render(<AntdTodolist />, document.getElementById('root'));
// ReactDOM.render(<AntdTodolistThunk />, document.getElementById('root'));
ReactDOM.render(<AntdTodolistSaga />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
