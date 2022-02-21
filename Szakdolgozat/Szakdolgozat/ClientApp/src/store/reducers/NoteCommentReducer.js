import * as actionTypes from '../actions/actionsTypes';
import {updateObject} from "../utility";

const initialState = {
    error: '',
    loading: true,
    noteComment:[]
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


const NoteCommentReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_NOTE_COMMENT_SUCCESS:
            return fetchNoteCommentSuccess(state,action)
        case actionTypes.FETCH_NOTE_COMMENT_START:
            return fetchNoteCommentStart(state,action)
        default:
            return state
    }
};
export default NoteCommentReducer;