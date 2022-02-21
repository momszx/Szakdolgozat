import * as actionTypes from '../actions/actionsTypes';
import {updateObject} from "../utility";

const initialState = {
    error: '',
    loading: true,
    question: []
};
const fetchQuestionSuccess = (state, action) => {
    return updateObject(state, {
        question: action.question,
        loading: false
    });
}
const fetchQuestionStart = (state, action) => {
    return updateObject(state, {
        loading: true
    });
}


const QuestionReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_QUESTION_START:
            return fetchQuestionStart(state, action)
        case actionTypes.FETCH_QUESTION_SUCCESS:
            return fetchQuestionSuccess(state, action)
        default:
            return state
    }
};
export default QuestionReducer;