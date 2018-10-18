import React ,{ Component } from 'react';
import {connect} from 'react-redux';

// class TodoList extends Component{
//     constructor(props){
//         super(props);
//
//         // this.state = store.getState();
//     }
//
//     render(){
//
//         const { inputValue, list, changeInputValue, handleClick, handleItemDelete}  = this.props;
//         return(
//             <div>
//             <div>
//                 {/*<input value = {this.state.inputValue}></input>*/}
//                 {/*<input value = {this.props.inputValue}*/}
//                 {/*onChange={this.changeInputValue.bind(this)}*/}
//
//                 {/*<input value = {this.props.inputValue}*/}
//                        {/*onChange={this.props.changeInputValue}*/}
//                 {/*></input>*/}
//
//                 <input value = {inputValue}
//                        onChange={changeInputValue}
//                 ></input>
//
//                 {/*<button*/}
//                     {/*onClick = {this.props.handleClick}*/}
//                 {/*>commit</button>*/}
//
//                 <button
//                     onClick = {handleClick}
//                 >commit</button>
//             </div>
//             <ul>
//             {/*<li> dell</li>*/}
//                 {
//                     this.props.list.map(
//                         (item,index)=>{
//                             return <li key = {index}
//                                        onClick={
//                                            ()=> handleItemDelete(index)
//                                        }
//                             >{item}</li>
//                         }
//                     )
//                 }
//             </ul>
//
//             </div>
//         )
//     }
//     //
//     // changeInputValue(e){
//     //     console.log(e.target.value);
//     // }
//
// }

// const mapStateToProps = (state) =>{
//     return {
//         inputValue:state.inputValue,
//         list:state.list
//
//     }
// }
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         changeInputValue(e){
//             const action = {
//                 type: 'change_input_value',
//                 value:e.target.value
//             }
//             dispatch(action);
//         },
//
//         handleClick(){
//             const action = {
//                 type:'add_item'
//             }
//             dispatch(action);
//         },
//
//     }
// }
//
// export default connect(mapStateToProps,mapDispatchToProps)(TodoList);


// 无状态组件
const TodoList =(props) =>{


    const { inputValue, list, changeInputValue, handleClick, handleItemDelete }  = props;


        return(
            <div>
                <div>

                    <input value = {inputValue}
                           onChange={changeInputValue}
                    ></input>


                    <button
                        onClick = {handleClick}
                    >commit</button>
                </div>
                <ul>
                    {
                        list.map(
                            (item,index)=>{
                                return <li key = {index}
                                           onClick={
                                               ()=> handleItemDelete(index)
                                           }
                                >{item}</li>
                            }
                        )
                    }
                </ul>

            </div>
        )

}


const mapStateToProps = (state) =>{
    return {
        inputValue:state.inputValue,
        list:state.list

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e){
            const action = {
                type: 'change_input_value',
                value:e.target.value
            }
            dispatch(action);
        },

        handleClick(){
            const action = {
                type:'add_item'
            }
            dispatch(action);
        },
        handleItemDelete(index){
            console.log(index);
            const action = {
                type:'delete_item',
                index
            }
            dispatch(action);
        }

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);