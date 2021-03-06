import types from '../actions/types';

const DEFAULT_STATE = {
    all: [],
    single: {},
    auth: false,
    time: new Date().toLocaleTimeString().slice(0,5) + " "+  new Date().toLocaleTimeString().slice(-2),
    date: new Date().toLocaleDateString(),
    data: {}
};

export default (state=DEFAULT_STATE, action) => {
    switch(action.type){
        case types.UPDATE_FISH_DATA:
            return{...state, data: action.payload}
        case types.DELETE_FISH_DATA:
            return{...state}
        case types.GET_LIST_DATA:
            return {...state, data: action.payload.data.userInfo}
        case types.ADD_LIST_DATA:
            return {...state};
        case types.UPDATE_TIME:
            return {...state, time: new Date().toLocaleTimeString().slice(0,5) + " " + new Date().toLocaleTimeString().slice(-2), date: new Date().toLocaleDateString()}
        default:
            return state;
    }
}

