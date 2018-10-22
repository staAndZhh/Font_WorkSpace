import * as constants from './actionTypes';
import { fromJS } from 'immutable';
import axios from 'axios';
// export const SearchFocus = () =>(
//     {type:'search_focus'}
// )
// export const SearchBlur = () =>(
//     {type:'search_blur'}
// )
export const changeList = (data) =>(
    {   type:constants.CHANGE_LIST,
        data:fromJS(data),
        totalPage:Math.ceil(data.length/10)
    }
)

export const SearchFocus = () =>(
    {type:constants.SEARCH_FOCUS}
)
export const SearchBlur = () =>(
    {type:constants.SEARCH_BLUR}
)

export const mouseEnter = () =>(
    {type:constants.NOUSE_ENTER}
)
export const mouseLeave = () =>(
    {type:constants.MOUSE_LEAVE}
)
export const changePage =(page) =>(
    {type:constants.CHANGE_PAGE,
        page
    }
)
export const getList = ()=>{
    return (dispath)=>{
        // console.log(123);
        axios.get('./api/headerList.json').then(
            (res)=>{
                const data = res.data;
                console.log(res.data);
                dispath(changeList(data.data));
            }
        ).catch(
            ()=>{
                console.log('error');
            }
        )
    }
}