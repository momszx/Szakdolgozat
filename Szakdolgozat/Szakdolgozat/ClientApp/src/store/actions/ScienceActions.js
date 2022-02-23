import * as actionTypes from './actionsTypes';

export const fetchScience = (id) => {
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
    console.log(requestOptions)
    return dispatch => {
        dispatch(fetchScienceStart())
        fetch('/Science/', requestOptions).then(response => response.json()).then(data => {
            dispatch(fetchScienceSuccess(data))
        })
    }
}
export const fetchScienceStart = () => {
    return {
        type: actionTypes.FETCH_SCIENCE_START
    };
};
export const fetchScienceSuccess = (science) => {
    return {
        type: actionTypes.FETCH_SCIENCE_SUCCESS,
        science: science
    };
};