import React, { Component } from 'react';
import TodoItem from './Todoitem';
import  axios from 'axios';

class Todolist extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue:'',
      list:[]
    }
    this.handleBtnChange = this.handleBtnChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);

  }

  componentDidMount(){
    axios.get('/api/todolist').then(
        (res)=>{
          alert('succ');
          this.setState(()=>{
            return{
              list:[...res.data]
            }
          })
        }
    ).catch(
        ()=>{
          alert('error')
        }
    )
  }
  render() {
    return (
      <div>
          <div>
            <label htmlFor="insertArea">please input </label>
              <input
                  id = "insertArea"
                  value = {this.state.inputValue}
          onChange={this.handleInputChange}>

              </input>
              <button onClick={this.handleBtnChange}> 提交</button>
          </div>

          <ul>
          {this.getTodoItem()}
          </ul>
      </div>
    );
  }

    getTodoItem(){
       return( this.state.list.map(
            (item,index)=>{

                return(
                    <TodoItem
                        key = {item}
                        content = {item}
                        index = {index}
                        deleteItem = {this.handleItemDelete}
                    />
                )})
       )

    }
    handleInputChange(e){
      this.setState(
          {
              inputValue:e.target.value
          }
      )
    }

    handleBtnChange(){
      this.setState(
          ()=>{
            const list  = [...this.state.list,this.state.inputValue];
            return ({
                inputValue:'',
                list:list
            })
          }
      )
    }

    handleItemDelete(index){
      //   const list = [...this.state.list];
      //   list.splice(index,1);
      //   this.setState(
      //       () =>(
      //           {list}
      //       )
      // )
        this.setState(
            (preState) => {
              const list = [... preState.list];
              list.splice(index,1);
              return {list}
            }
        )
    }
}

export default Todolist;
