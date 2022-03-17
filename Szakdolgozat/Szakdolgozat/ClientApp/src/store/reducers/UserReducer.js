import * as actionTypes from '../actions/actionsTypes';
import {updateObject} from "../utility";

const initialState = {
    error: '',
    loading: true,
    username:'',
    coin:0,
    uid:'',
    id:''
};
const fetch = (state, action) => {
    return updateObject(state, {
        loading: false
    });
}
const loginStart = (state,action) => {
    return updateObject(state, {
        loading: true
    });
}
const loginSuccess = (state,action) => {
    console.log(action.user)
    return updateObject(state, {
        loading: false,
        username:action.user.username,
        coin:action.user.coin,
        uid:action.user.uid,
        id:action.user.id
    });
}
const logoutStart = (state,action) => {
    return updateObject(state, {
        loading: true
    });
}
const logoutSuccess = (state,action) => {
    return updateObject(state, {
        loading: false,
        username:'',
        coin:'',
        uid:'',
        id:''
    });
}


const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_USER_START:
            return loginStart(state,action)
        case actionTypes.LOGIN_USER_SUCCESS:
            return loginSuccess(state,action)
        case actionTypes.LOGOUT_USER_START:
            return logoutStart(state,action)
        case actionTypes.LOGOUT_USER_SUCCESS:
            return logoutSuccess(state,action)
        default:
            return state
    }
};
export default UserReducer;