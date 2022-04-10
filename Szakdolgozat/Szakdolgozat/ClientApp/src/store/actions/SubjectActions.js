import * as actionTypes from './actionsTypes';

export const fetchSubject = (id) => {
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
        dispatch(fetchSubjectStart())
        dispatch(setScienceId(id))
        fetch('/Subject/', requestOptions).then(response => response.json()).then(data => {
            dispatch(fetchSubjectSuccess(data))
        })
    }
}
export const setScienceId=(id)=> {
    return{
        type:actionTypes.SET_SCIENCE_ID,
        id:id
    }
}
export const fetchSubjectStart = () => {
    return {
        type: actionTypes.FETCH_SUBJECT_START
    };
};
export const fetchSubjectSuccess = (subject) => {
    return {
        type: actionTypes.FETCH_SUBJECT_SUCCESS,
        subject: subject
    };
};