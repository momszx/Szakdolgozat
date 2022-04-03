import * as actionTypes from './actionsTypes';
import axios from "../../axiosBase";


export const fetchEmployeeSuccess = (employees) => {
    return {
        type: actionTypes.FETCH_LIST_EMPLOYEE,
        employees: employees
    }
}
export const EmployeeFail = (error) => {
    return {
        type: actionTypes.EMPLOYEE_FAIL,
        error: error
    };
};
export const fetchEmployeeStart = () => {
    return {
        type: actionTypes.FETCH_EMPLOYEE_START
    };
};

export const fetchEmployee = () => {
    return dispatch => {
        dispatch(fetchEmployeeStart())
        fetch('/Employee')
            .then(response => response.json())
            .then(data => {
                dispatch(fetchEmployeeSuccess(data))
            })
            .catch(err => {
                dispatch(EmployeeFail(err));
            })
    }
}
export const addEmployeeStart = () => {
    return {
        type: actionTypes.ADD_EMPLOYEE_START
    }
}
export const addEmployeeSuccess = () => {
    return {
        type: actionTypes.ADD_EMPLOYEE
    }
}
export const addEmployee = (employee) => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let raw =JSON.stringify({
        "id":0,
        "name":employee.name,
        "address":employee.address
    })
    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    return dispatch => {
        dispatch(addEmployeeStart())
        fetch('/Employee', requestOptions)
            .then(response => response.text())
            .then(result => {
                if (result === 200) {
                    dispatch(addEmployeeSuccess());
                } else EmployeeFail(result);
            })
            .catch(err => {
                dispatch(EmployeeFail(err));
            })
        setTimeout(() => {  dispatch(fetchEmployee()) }, 1000);
    }
}
export const updateEmployeeSuccess = () => {
    return {
        type: actionTypes.UPDATE_EMPLOYEE
    }
}
export const updateEmployeeStart = () => {
    return {
        type: actionTypes.UPDATE_EMPLOYEE_START
    }
}
export const updateEmployee = (employee) => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let raw =JSON.stringify({
        "id":employee.id,
        "name":employee.name,
        "address":employee.address
    })
    let requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    return dispatch => {
        dispatch(updateEmployeeStart())
        fetch('Employee', requestOptions)
            .then(response => response.text())
            .then(result => {
                if (result === 200) {
                    dispatch(updateEmployeeSuccess());
                } else EmployeeFail(result.meta.code);
            })
            //.then(dispatch(fetchEmployee()))
            .catch(err => {
                dispatch(EmployeeFail(err));
            })
        setTimeout(() => {  dispatch(fetchEmployee()) }, 1000);
    }
}
export const removeEmployeeSuccess = () => {
    return {
        type: actionTypes.REMOVE_EMPLOYEE
    }
}
export const removeEmployeeStart = () => {
    return {
        type: actionTypes.REMOVE_EMPLOYEE_START
    }
}
export const removeEmployee = (id) => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let raw =JSON.stringify({
        "id":id,
        "name":"",
        "address":""
    })
    let requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    return dispatch => {

        dispatch(removeEmployeeStart())
        fetch('Employee', requestOptions)

            .then(response => response.text())
            .then(result => {
                if (result === 200) {
                    dispatch(removeEmployeeSuccess());
                } else EmployeeFail(result.meta.code);
            })
            //.then(dispatch(fetchEmployee()))
            .catch(err => {
                dispatch(EmployeeFail(err));
            })
        setTimeout(() => {  dispatch(fetchEmployee()) }, 1000);
    }
}
