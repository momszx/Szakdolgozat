import * as actionTypes from './actionsTypes';
import {fetchComment} from "./CommentActions";
export const fetchTopic=(id)=>{
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
        dispatch(fetchTopicStart())
        fetch('/Topic',requestOptions).then(response=>response.json()).then(data=>{
            dispatch(fetchTopicSuccess(data))
        })
    }
}
export  const fetchTopicStart=()=>{
    return{
        type:actionTypes.FETCH_TOPIC_START
    };
}
export  const fetchTopicSuccess=(topic)=>{
    return{
        type:actionTypes.FETCH_TOPIC_SUCCESS,
        topic:topic
    }
}
export const addTopic=(strResult)=>{
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let raw = JSON.stringify({
        "name": strResult.name,
        "uid": strResult.uid,
        "subjectId":strResult.subjectId,
        "text": strResult.text,
        "userId": strResult.userId,
        "themeType": strResult.themeType,
    })
    let requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    return dispatch=>{
        fetch('/Topic',requestOptions).then(response=>response.json()).then(data=>{
            setTimeout(function(){
                dispatch(fetchTopic(strResult.topicId))
            }, 100)
        })
    }
}
export const updateTopic=(strResult)=>{
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let raw = JSON.stringify({
        "id": strResult.id,
        "name": strResult.name,
        "uid": strResult.uid,
        "subjectId":strResult.subjectId,
        "text": strResult.text,
        "userId": strResult.userId,
        "themeType": strResult.themeType,
    })
    let requestOptions = {
        method: 'PATCH',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    return dispatch=>{
        fetch('/Topic',requestOptions).then(response=>response.json()).then(data=>{
            setTimeout(function(){
                dispatch(fetchTopic(strResult.topicId))
            }, 100)
        })
    }
}
export const deleteTopic=(strResult)=>{
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
    return dispatch=>{
        fetch('/Topic',requestOptions).then(response=>response.json()).then(data=>{
            setTimeout(function(){
                dispatch(fetchTopic(strResult.topicId))
            }, 100)
        })
    }
}
