import * as actionTypes from '../actions/actionsTypes';
import {updateObject} from "../utility";

const initialState = {
    error: '',
    loading: true,
    comment:[],
    viewTopic: {
        subjectId:"",
        name:"",
        noteWrite:"",
        id:"",
        uid:"",
    }
};
const fetchCommentSuccess = (state, action) => {
    return updateObject(state, {
        comment: action.comment,
        loading: false
    });
}
const fetchCommentStart = (state, action) => {
    return updateObject(state, {
        loading: true
    });
}
const setTopic = (state, action) => {
  return updateObject(state,{
      viewTopic:action.topic
  })
}

const CommentReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_COMMENT_SUCCESS:
            return fetchCommentSuccess(state,action)
        case actionTypes.FETCH_COMMENT_START:
            return fetchCommentStart(state,action)
        case actionTypes.SET_TOPIC:
            return setTopic(state,action)
        default:
            return state
    }
};
export default CommentReducer;