import * as actionTypes from '../actions/actionsTypes';
import {updateObject} from "../utility";

const initialState = {
    error: '',
    loading: true,
    questionComment:[]
};
const fetchFacultySuccess = (state, action) => {
    return updateObject(state, {
        questionComment: action.questionComment,
        loading: false
    });
}
const fetchFacultyStart = (state, action) => {
    return updateObject(state, {
        loading: true
    });
}


const QuestionCommentReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_QUESTION_COMMENT_START:
            return fetchFacultyStart(state,action)
        case actionTypes.FETCH_QUESTION_COMMENT_SUCCESS:
            return fetchFacultySuccess(state,action)
        default:
            return state
    }
};
export default QuestionCommentReducer;