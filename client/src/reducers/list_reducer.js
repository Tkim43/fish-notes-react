import types from '../actions/types';

const DEFAULT_STATE = {
    all: [],
    single: {},
    auth: false,
    time: new Date().toLocaleTimeString(),
    date: new Date().toLocaleDateString(),
};

export default (state=DEFAULT_STATE, action) => {
    switch(action.type){
        case types.GET_ALL_LIST_DATA:
            console.log("List reducer", action);
            return {...state};
        case 'UPDATE_TIME':
            return {time: new Date().toLocaleTimeString(), date: new Date().toLocaleDateString()}
        default:
            return state;
    }
}

