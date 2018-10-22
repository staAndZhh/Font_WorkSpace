import React,{Component} from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { actionCreators } from './store';

import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    Addition,
    Button,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem
} from './style';


class Header extends Component {

    getListArea = () =>{
        const { focused, list, page, handleMouseEnter, handleMouseLeave, mouseIn,handleChangePage,totalPage} = this.props;
        const newList = list.toJS();
        const pageList = []

        if(newList.length){
            for (let i=(page-1)*10;i<page*10;i++){
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }
        if (focused || mouseIn ){
            return (
                <SearchInfo onMouseEnter = {handleMouseEnter}
                            onMouseLeave = {handleMouseLeave}
                >
                    <SearchInfoTitle> search
                        <SearchInfoSwitch onClick = {()=>handleChangePage(page,totalPage,this.spinIcon)}>换一批</SearchInfoSwitch>
                        <i ref={(icon)=>{this.spinIcon = icon}}  className="iconfont spin">&#xe636;</i>

                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                        {/*{list.map(*/}
                            {/*(item,key) =>{*/}
                                {/*return (<SearchInfoItem key={item}>{item}</SearchInfoItem>)*/}
                            {/*}*/}
                        {/*)}*/}

                    </SearchInfoList>
                </SearchInfo>
            );
        } else {
            return null;
        }
    }

    render() {
        const { focused, list, handleInputFocus, handleInputBlur  } = this.props;
        return (
            <HeaderWrapper>
                <Link to='/'>
                    <Logo/>
                </Link>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>登陆</NavItem>
                    <NavItem className='right'>
                        <i className="iconfont">&#xe851;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? 'focused': ''}
                                onFocus={(list)=>handleInputFocus(list)}
                                onBlur={handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>
                            &#xe614;
                        </i>
                        {this.getListArea(focused)}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className='writting'>
                        <i className="iconfont">&#xe615;</i>
                        写文章
                    </Button>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

// const  getListArea = (show) =>{
//     if (show){
//         return (
//             <SearchInfo>
//                 <SearchInfoTitle> search
//                     <SearchInfoSwitch>换一批</SearchInfoSwitch>
//                 </SearchInfoTitle>
//                 <SearchInfoList>
//                     <SearchInfoItem>教育</SearchInfoItem>
//                     <SearchInfoItem>教育</SearchInfoItem>
//                     <SearchInfoItem>教育</SearchInfoItem>
//                     <SearchInfoItem>教育</SearchInfoItem>
//                 </SearchInfoList>
//             </SearchInfo>
//         );
//     } else {
//         return null;
//     }
// }


// const Header = (props) =>{
//     return (
//             <HeaderWrapper>
//                 <Logo/>
//                 <Nav>
//                     <NavItem className='left active'>首页</NavItem>
//                     <NavItem className='left'>下载App</NavItem>
//                     <NavItem className='right'>登陆</NavItem>
//                     <NavItem className='right'>
//                         <i className="iconfont">&#xe636;</i>
//                     </NavItem>
//                     <SearchWrapper>
//                         <CSSTransition
//                             in={props.focused}
//                             timeout={200}
//                             classNames="slide"
//                         >
//                             <NavSearch
//                                 className={props.focused ? 'focused': ''}
//                                 onFocus={props.handleInputFocus}
//                                 onBlur={props.handleInputBlur}
//                             ></NavSearch>
//                         </CSSTransition>
//                         <i className={props.focused ? 'focused iconfont': 'iconfont'}>
//                             &#xe614;
//                         </i>
//                         {getListArea(props.focused)}
//                     </SearchWrapper>
//                 </Nav>
//                 <Addition>
//                     <Button className='writting'>
//                         <i className="iconfont">&#xe615;</i>
//                         写文章
//                     </Button>
//                     <Button className='reg'>注册</Button>
//                 </Addition>
//             </HeaderWrapper>
//         )
// }


const MapStateToProps = (state)=>{

        return {
            // focused: state.get('header').get('focused'),
            focused: state.getIn(['header','focused']),
            list: state.getIn(['header','list']),
            page: state.getIn(['header','page']),
            totalPage: state.getIn(['header','totalPage']),
            mouseIn:state.getIn(['header','mouseIn']),
            login:state.getIn([''])
        }
}

const MapDispatchToProps = (dispatch)=>{
        return {
            handleInputFocus(list) {
                (list.size === 0) && dispatch(actionCreators.getList());
                dispatch(actionCreators.SearchFocus());

            },

            handleInputBlur() {
                // const action = {
                //     type:'search_blur',
                // }
                const action = actionCreators.SearchBlur();
                dispatch(action);
            },
            handleMouseEnter(){
                dispatch(actionCreators.mouseEnter());
            },
            handleMouseLeave(){
                dispatch(actionCreators.mouseLeave());
            },
            handleChangePage(page,totalPage,spin){

                let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
                if(originAngle){
                    originAngle = parseInt(originAngle,10);
                }else {
                    originAngle = 0;
                }
                spin.style.transform = "rotate("+ (originAngle+360)+"deg)";

                if (page < totalPage){
                    dispatch(actionCreators.changePage(page+1));
                }
                else{
                    dispatch(actionCreators.changePage(1));
                }
            }
        }
}

export default connect(MapStateToProps,MapDispatchToProps)(Header);