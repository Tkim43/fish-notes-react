import types from './types';
import axios from 'axios';

// export function getListData(){
//     const resp = axios.get('/api/test');
//     return{
//         type: types.GET_ALL_LIST_DATA,
//         payload: resp
//     }
// }

export function updateTime(){
    return(
        {type:'UPDATE_TIME',
         payload: new Date().toLocaleTimeString()}
    )
}