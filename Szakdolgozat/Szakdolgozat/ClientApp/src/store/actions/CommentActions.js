import * as actionTypes from './actionsTypes';

export  const fetchComment=(strResult)=>{
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
        dispatch(fetchCommentStart())
        dispatch(setTopic(strResult))
        fetch('/Comment',requestOptions).then(response=>response.json()).then(data=>{
            dispatch(fetchCommentSuccess(data))
        })
    }
}
export  const fetchCommentStart=()=>{
    return{
        type:actionTypes.FETCH_COMMENT_START
    };
}
export  const fetchCommentSuccess=(comment)=>{
    return{
        type:actionTypes.FETCH_COMMENT_SUCCESS,
        comment:comment
    }
}
export const setTopic=(strResult)=>{
    console.log(strResult)
    return{
        type:actionTypes.SET_TOPIC,
        topic:strResult
    }
}