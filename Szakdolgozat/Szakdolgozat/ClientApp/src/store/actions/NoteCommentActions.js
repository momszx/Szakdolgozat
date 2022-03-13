import * as actionTypes from './actionsTypes';

export  const fetchNoteComment=(strResult)=>{
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let raw = JSON.stringify({
        "id": strResult.id,
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
        dispatch(setNote(strResult))
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
export const setNote=(strResult)=>{
    console.log(strResult)
    return{
        type:actionTypes.SET_NOTE,
        note:strResult
    }
}