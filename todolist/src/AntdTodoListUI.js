import React , { Component } from  'react';
import { Button ,Input, List} from 'antd';
// import  'antd/dist/antd.css';

// 无状态组件
const AntdTodoListUI = (props) =>{

    return(
        <div style={{marginTop :'10px', marginLeft:'10px'}}>
            <Input placeholder ='todo info'
                   style = {{ width: '400px'}}
                // value={this.state.inputvalue}
                   value={props.inputvalue}
                // onChange = {this.handleInputChange}
                   onChange = {props.handleInputChange}
            />

            <Button type="primary"
                // onClick={this.handleBtnClick}
                    onClick={props.handleBtnClick}
            > commit </Button>
            <List
                bordered
                style = {{ marginTop:'10px', width:'300px'}}
                // dataSource={data}
                // dataSource={[]}
                // dataSource = {this.state.list}
                dataSource = {props.list}
                renderItem={(item,index) => (
                    <List.Item
                        // onClick = {this.handleItemDelete.bind(this,index)}>
                        onClick ={(index) => {
                            props.handleItemDelete(index)
                        }
                        }>
                        {item}</List.Item>)}
            />
        </div>
    )
}
export default AntdTodoListUI;

// class AntdTodoListUI extends Component{
//
//     render(){
//         return(
//             <div style={{marginTop :'10px', marginLeft:'10px'}}>
//                 <Input placeholder ='todo info'
//                        style = {{ width: '400px'}}
//                        // value={this.state.inputvalue}
//                        value={this.props.inputvalue}
//                        // onChange = {this.handleInputChange}
//                        onChange = {this.props.handleInputChange}
//                 />
//
//                 <Button type="primary"
//                         // onClick={this.handleBtnClick}
//                         onClick={this.props.handleBtnClick}
//                 > commit </Button>
//                 <List
//                     bordered
//                     style = {{ marginTop:'10px', width:'300px'}}
//                     // dataSource={data}
//                     // dataSource={[]}
//                     // dataSource = {this.state.list}
//                     dataSource = {this.props.list}
//                     renderItem={(item,index) => (
//                         <List.Item
//                             // onClick = {this.handleItemDelete.bind(this,index)}>
//                             onClick ={(index) => {
//                                 this.props.handleItemDelete(index)
//                             }
//                             }>
//                             {item}</List.Item>)}
//                 />
//             </div>
//         )
//     }
//
// }
// export default AntdTodoListUI;