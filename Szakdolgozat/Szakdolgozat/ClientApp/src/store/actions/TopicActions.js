import * as actionTypes from './actionsTypes';
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
