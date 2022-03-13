import * as actionTypes from '../actions/actionsTypes';
import {updateObject} from "../utility";

const initialState = {
    error: '',
    loading: true,
    noteComment:[],
    viewNote: {
        subjectId:"",
        name:"",
        noteWrite:"",
        id:"",
        uid:"",
    }
};
const fetchNoteCommentSuccess = (state, action) => {
    return updateObject(state, {
        noteComment: action.noteComment,
        loading: false
    });
}
const fetchNoteCommentStart = (state, action) => {
    return updateObject(state, {
        loading: true
    });
}
const setNote = (state, action) => {
  return updateObject(state,{
      viewNote:action.note
  })
}

const NoteCommentReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_NOTE_COMMENT_SUCCESS:
            return fetchNoteCommentSuccess(state,action)
        case actionTypes.FETCH_NOTE_COMMENT_START:
            return fetchNoteCommentStart(state,action)
        case actionTypes.SET_NOTE:
            return setNote(state,action)
        default:
            return state
    }
};
export default NoteCommentReducer;