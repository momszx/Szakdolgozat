import * as actionTypes from '../actions/actionsTypes';
import {updateObject} from "../utility";

const initialState = {
    error: '',
    loading: true,
    subject:[]
};
const fetchSubjectSuccess = (state, action) => {
    return updateObject(state, {
        subject: action.subject,
        loading: false
    });
}
const fetchSubjectStart = (state, action) => {
    return updateObject(state, {
        loading: true
    });
}


const SubjectReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_SUBJECT_SUCCESS:
            return fetchSubjectSuccess(state,action)
        case  actionTypes.FETCH_SUBJECT_START:
            return  fetchSubjectStart(state,action)
        default:
            return state
    }
};
export default SubjectReducer;