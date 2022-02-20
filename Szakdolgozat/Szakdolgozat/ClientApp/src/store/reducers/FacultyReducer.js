import * as actionTypes from '../actions/actionsTypes';
import {updateObject} from "../utility";

const initialState = {
    faculty: [],
    error: '',
    loading: true
};
const fetchFacultySuccess = (state, action) => {
    return updateObject(state, {
        faculty: action.faculty,
        loading: false
    });
}
const fetchFacultyStart = (state, action) => {
    return updateObject(state, {
        loading: true
    });
}


const FacultyReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_FACULTY_START:
            return fetchFacultyStart(state, action)
        case actionTypes.FETCH_FACULTY_SUCCESS:
            return fetchFacultySuccess(state, action)
        default:
            return state
    }
};
export default FacultyReducer;