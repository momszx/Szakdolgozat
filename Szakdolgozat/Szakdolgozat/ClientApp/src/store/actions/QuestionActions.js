import * as actionTypes from './actionsTypes';

export const fetchQuestion = (id) => {
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
    return dispatch => {
        dispatch(fetchQuestionStart())
        fetch('/Question/', requestOptions).then(response => response.json()).then(data => {
            dispatch(fetchQuestionSuccess(data))
        })
    }
}
export const fetchQuestionStart = () => {
    return {
        type: actionTypes.FETCH_QUESTION_START
    };
};
export const fetchQuestionSuccess = (question) => {
    return {
        type: actionTypes.FETCH_QUESTION_SUCCESS,
        question: question
    };
};