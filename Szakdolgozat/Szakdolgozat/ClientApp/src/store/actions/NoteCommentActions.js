import * as actionTypes from './actionsTypes';

export  const fetchNoteComment=(id)=>{
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let raw = JSON.stringify({
        "id": id,
        "name": '',
    })
    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    return dispatch=>{
        dispatch(fetchNoteCommentStart())
        fetch('/NoteComment',requestOptions).then(response=>response.json()).then(data=>{
            dispatch(fetchNoteCommentSuccess(data))
        })
    }
}
export  const fetchNoteCommentStart=()=>{
    return{
        type:actionTypes.FETCH_NOTE_COMMENT_START
    };
}
export  const fetchNoteCommentSuccess=(NoteComment)=>{
    return{
        type:actionTypes.FETCH_NOTE_COMMENT_SUCCESS,
        NoteComment:NoteComment
    }
}