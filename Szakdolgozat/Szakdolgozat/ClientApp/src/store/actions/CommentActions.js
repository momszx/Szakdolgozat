import * as actionTypes from './actionsTypes';

export  const fetchComment=(strResult,needSet,userId)=>{
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let raw = JSON.stringify({
        "id": strResult.id,
        "userId":userId,
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
        if(needSet){
            dispatch(setTopic(strResult))
        }
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
    return{
        type:actionTypes.SET_TOPIC,
        topic:strResult
    }
}
export const addComment=(strResult)=>{
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let raw = JSON.stringify({
        "uid": strResult.uid,
        "topicId": strResult.topicId,
        "userId": strResult.userId,
        "text": strResult.text,
    })
    let requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    let  temp={
        "id":strResult.topicId,
        "uid":strResult.uid
    }
    return dispatch=>{
        fetch('/Comment',requestOptions).then(response=>response.json()).then(data=>{
            setTimeout(function(){
                dispatch(fetchComment(temp,false))
            }, 100)
        })
    }
}
export  const updateComment=(strResult)=>{
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let raw = JSON.stringify({
        "id": strResult.id,
        "uid": strResult.uid,
        "topicId": strResult.topicId,
        "userId": strResult.userId,
        "text": strResult.text,
    })
    let requestOptions = {
        method: 'PATCH',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    let  temp={
        "id":strResult.topicId,
        "uid":strResult.uid
    }
    return dispatch=>{
        fetch('/Comment',requestOptions).then(response=>response.json()).then(data=>{
            setTimeout(function(){
                dispatch(fetchComment(temp,false))
            }, 100)
        })
    }
}
export  const deleteComment=(strResult)=>{
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let raw = JSON.stringify({
        "id": strResult.id,
        "uid": strResult.uid,
    })
    let requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    let  temp={
        "id":strResult.topicId,
        "uid":strResult.uid
    }
    return dispatch=>{
        fetch('/Comment',requestOptions).then(response=>response.json()).then(data=>{
            setTimeout(function(){
                dispatch(fetchComment(temp,false))
            }, 100)
        })
    }
}