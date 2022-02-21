import * as actionTypes from '../actions/actionsTypes';
import {updateObject} from "../utility";

const initialState = {
    error: '',
    loading: true,
    note:[]
};
const fetchNoteSuccess = (state, action) => {
    return updateObject(state, {
        note: action.note,
        loading: false
    });
}
const fetchNoteStart = (state, action) => {
    return updateObject(state, {
        loading: true
    });
}


const NoteReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_NOTE_SUCCESS:
            return fetchNoteSuccess(state,action)
        case actionTypes.FETCH_NOTE_START:
            return fetchNoteStart(state,action)
        default:
            return state
    }
};
export default NoteReducer;