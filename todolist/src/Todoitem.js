import React, {Component} from 'react';
class TodoItem extends Component {
    constructor(props){
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.content !== this.props.content){
            return true;
        } else {
            return false;
        }
    }

     render(){
        const {content}  = this.props ;
         return(
             <div
                 onClick={this.handleItemClick}
             > {content}</div>
         )
     }

    handleItemClick(){
        // this.props.delteItem(this.props.index);
        const { deleteItem, index } = this.props;
        deleteItem(index);
    }
 }

 export default TodoItem;

