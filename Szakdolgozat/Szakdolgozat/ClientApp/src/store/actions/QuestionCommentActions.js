import * as actionTypes from './actionsTypes';

export  const fetchQuestionComment=(id)=>{
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
        dispatch(fetchQuestionCommentStart())
        fetch('/QuestionComment',requestOptions).then(response=>response.json()).then(data=>{
            dispatch(fetchQuestionCommentSuccess(data))
        })
    }
}
export  const fetchQuestionCommentStart=()=>{
    return{
        type:actionTypes.FETCH_NOTE_COMMENT_START
    };
}
export  const fetchQuestionCommentSuccess=(QuestionComment)=>{
    return{
        type:actionTypes.FETCH_NOTE_COMMENT_SUCCESS,
        QuestionComment:QuestionComment
    }
}