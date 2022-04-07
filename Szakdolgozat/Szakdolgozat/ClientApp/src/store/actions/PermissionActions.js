import * as actionTypes from './actionsTypes';

export const fetchPermission = () => {
    return dispatch => {
        dispatch(fetchPermissionStart())
        fetch('/Perm/').then(response => response.json()).then(data => {
            dispatch(fetchPermissionSuccess(data))
        })
    }
}
export const fetchPermissionStart = () => {
    return {
        type: actionTypes.FETCH_PERMISSION_START
    };
};
export const fetchPermissionSuccess = (userList) => {
    return {
        type: actionTypes.FETCH_PERMISSION_SUCCESS,
        userList:userList
    };
};