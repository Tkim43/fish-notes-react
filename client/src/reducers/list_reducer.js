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
        case types.GET_LIST_DATA:
            return {data: action.payload.data.userInfo}
        case types.ADD_LIST_DATA:
            return {...state};
        case 'UPDATE_TIME':
            return {time: new Date().toLocaleTimeString().slice(0,5) + " " + new Date().toLocaleTimeString().slice(-2), date: new Date().toLocaleDateString()}
        default:
            return state;
    }
}

