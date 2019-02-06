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

export function addListData(species, location, total){
    const resp = axios.patch(`/api/add_species/${species}/location/${location}/total/${total}`);
    console.log("resp", resp);
    return{
        type: types.ADD_LIST_DATA,
        payload: resp
    }
}

export function getListData(){
    const resp = axios.get(`/api/statistics`)
    return{
        type: types.GET_LIST_DATA,
        payload: resp
    }
}