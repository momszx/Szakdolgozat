import * as actionTypes from '../actions/actionsTypes';
import {updateObject} from "../utility";

const initialState = {
    error: '',
    loading: true,
    facultyId:0,
    scienceId:0
};
const setScience = (state, action) => {
    return updateObject(state, {
        scienceId: action.id,
        loading: false
    });
}
const setFaculty = (state, action) => {
    return updateObject(state, {
        facultyId: action.id,
        loading: false
    });
}

const ListReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_SCIENCE_ID:
            return setScience(state,action)
        case actionTypes.SET_FACULTY_ID:
            return setFaculty(state,action)
        default:
            return state
    }
};
export default ListReducer;