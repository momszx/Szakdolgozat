import * as actionTypes from './actionsTypes';
import {fetchSubjectStart, fetchSubjectSuccess} from "./SubjectActions";

export const registration = (user) => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let raw = JSON.stringify({
        username: user.username,
        password: user.password,
    })
    let requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    return dispatch => {

        fetch('/Auth/', requestOptions).then(response => response.json()).then(data => {
            if (data.uId == "WRONG_LOGIN_INFO") {
                alert("Hibás bejelentkezési adatok")
            } else if (data.uId == "WRONG_LOGIN_INFO") {
                alert("Már létező felhasználó,kérlek válasz másik felhasználó nevet")
            } else {
                dispatch(loginSuccess(data))
            }
        })
    }
}
export const login = (user) => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let raw = JSON.stringify({
        username: user.username,
        password: user.password,
    })
    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    return dispatch => {
        dispatch(loginStart())
        fetch('/Auth/', requestOptions).then(response => response.json()).then(data => {
            if (data.uId == "WRONG_LOGIN_INFO") {
                alert("Hibás bejelentkezési adatok")
            } else {
                dispatch(loginSuccess(data))
            }
        })
    }
}
export const logout = (id,uid) => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let raw = JSON.stringify({
        id: id,
        uId: uid
    })
    let requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    return dispatch => {
        dispatch(logoutStart())
        fetch('/Auth/', requestOptions).then(response => response.json()).then(data => {
            if (data.uId != "WRONG_LOGIN_INFO") {
                dispatch(logoutSuccess())
            }
        })
    }
}
export const loginSuccess = (user) => {
    return {
        type: actionTypes.LOGIN_USER_SUCCESS,
        user: user
    }
}
export const loginStart = () => {
    return {
        type: actionTypes.LOGIN_USER_START,
    }
}
export const logoutSuccess = () => {
    return {
        type: actionTypes.LOGOUT_USER_SUCCESS,
    }
}
export const logoutStart = () => {
    return {
        type: actionTypes.LOGOUT_USER_START,
    }
}