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
    return dispatch => {
        dispatch(fetchScienceStart())
        dispatch(setFacultyId(id))
        fetch('/Science/', requestOptions).then(response => response.json()).then(data => {
            dispatch(fetchScienceSuccess(data))
        })
    }
}
export const setFacultyId=(id)=> {
    return{
        type:actionTypes.SET_FACULTY_ID,
        id:id
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