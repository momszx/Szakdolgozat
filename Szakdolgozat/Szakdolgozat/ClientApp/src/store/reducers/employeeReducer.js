import * as actionTypes from '../actions/actionsTypes';
import {updateObject} from "../utility";

const initialState = {
    employees: [],
    error: '',
    loading: true
};
const fetchEmployeeSuccess = (state, action) => {
    return updateObject(state, {
        employees: action.employees,
        loading: false
    });
}
const fetchEmployeeFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    })
}
const fetchEmployeeStart = (state, action) => {
    return updateObject(state, {
        loading: true
    })
}
const addEmployeeStart = (state, action) => {
    return updateObject(state, {
        loading: true
    })
}
const addEmployeeSuccess = (state, action) => {
    return updateObject(state, {
        loading: false
    });
}
const updateEmployeeStart = (state, action) => {
    return updateObject(state, {
        loading: true
    })
}
const updateEmployeeSuccess = (state, action) => {
    return updateObject(state, {
        loading: false
    })
}
const removeEmployeeStart = (state, action) => {
    return updateObject(state, {
        loading: true
    })
}
const removeEmployeeSuccess = (state, action) => {
    return updateObject(state, {
        loading: false
    })
}

const employeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_LIST_EMPLOYEE:
            return fetchEmployeeSuccess(state, action)
        case actionTypes.ADD_EMPLOYEE:
            return addEmployeeSuccess(state, action)
        case actionTypes.UPDATE_EMPLOYEE:
            return updateEmployeeSuccess(state, action)
        case actionTypes.REMOVE_EMPLOYEE:
            return removeEmployeeSuccess(state, action)
        case actionTypes.EMPLOYEE_FAIL:
            return fetchEmployeeFail(state, action)
        case actionTypes.FETCH_EMPLOYEE_START:
            return fetchEmployeeStart(state, action)
        case actionTypes.ADD_EMPLOYEE_START:
            return addEmployeeStart(state, action)
        case actionTypes.UPDATE_EMPLOYEE_START:
            return updateEmployeeStart(state, action)
        case actionTypes.REMOVE_EMPLOYEE_START:
            return removeEmployeeStart(state, action)
        default:
            return state
    }
};
export default employeeReducer;