import * as actionTypes from './actionsTypes';
export const fetchNote=(id)=>{
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
        dispatch(fetchNoteStart())
        fetch('/Note',requestOptions).then(response=>response.json()).then(data=>{
            dispatch(fetchNoteSuccess(data))
        })
    }
}
export  const fetchNoteStart=()=>{
    return{
        type:actionTypes.FETCH_NOTE_START
    };
}
export  const fetchNoteSuccess=(note)=>{
    return{
        type:actionTypes.FETCH_NOTE_SUCCESS,
        note:note
    }
}
