import * as actionTypes from '../actions/actionsTypes';
import {updateObject} from "../utility";

const initialState = {
    error: '',
    loading: true,
    permission:[]
};
const fetchPermissionSuccess = (state, action) => {
    return updateObject(state, {
        permission: action.userList,
        loading: false
    });
}
const fetchPermissionStart = (state, action) => {
    return updateObject(state, {
        loading: true
    });
}


const PermissionReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_PERMISSION_START:
            return fetchPermissionStart(state,action)
        case actionTypes.FETCH_PERMISSION_SUCCESS:
            return fetchPermissionSuccess(state,action)
        default:
            return state
    }
};
export default PermissionReducer;