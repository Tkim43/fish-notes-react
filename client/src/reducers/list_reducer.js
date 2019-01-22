import types from '../actions/types';

const DEFAULT_STATE = {
    all: [],
    single: {},
    auth: false
};

export default (state=DEFAULT_STATE, action) => {
    switch(action.type){
        case types.GET_ALL_LIST_DATA:
            console.log("List reducer", action);
            return {...state};
        default:
            return state;
    }
}

