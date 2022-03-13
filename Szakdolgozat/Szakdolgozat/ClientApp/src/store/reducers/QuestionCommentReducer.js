import * as actionTypes from '../actions/actionsTypes';
import {updateObject} from "../utility";

const initialState = {
    error: '',
    loading: true,
    questionComment:[],
    viewQuestion:''
};
const fetchQuestionCommentSuccess = (state, action) => {
    return updateObject(state, {
        questionComment: action.questionComment,
        loading: false
    });
}
const fetchQuestionCommentStart = (state, action) => {
    return updateObject(state, {
        loading: true
    });
}
const setQuestionComment=(state, action)=>{
    return updateObject(state,{
        viewQuestion:action.question
    })
}

const QuestionCommentReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_QUESTION_COMMENT_START:
            return fetchQuestionCommentStart(state,action)
        case actionTypes.FETCH_QUESTION_COMMENT_SUCCESS:
            return fetchQuestionCommentSuccess(state,action)
        case  actionTypes.SET_QUESTION:
            return setQuestionComment(state,action)
        default:
            return state
    }
};
export default QuestionCommentReducer;