import * as actionTypes from './actionsTypes';

export const fetchFaculty = () => {
    return dispatch => {
        dispatch(fetchFacultyStart())
        fetch('/Faculty/').then(response => response.json()).then(data => {
            dispatch(fetchFacultySuccess(data))
        })
    }
}
export const fetchFacultyStart = () => {
    return {
        type: actionTypes.FETCH_FACULTY_START
    };
};
export const fetchFacultySuccess = (faculty) => {
    return {
        type: actionTypes.FETCH_FACULTY_SUCCESS,
        faculty:faculty
    };
};