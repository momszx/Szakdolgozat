import * as actionTypes from '../actions/actionsTypes';
import {updateObject} from "../utility";

const initialState = {
    error: '',
    loading: true,
    science:[]
};
const fetchScienceSuccess = (state, action) => {
    return updateObject(state, {
        science: action.science,
        loading: false
    });
}
const fetchScienceStart = (state, action) => {
    return updateObject(state, {
        loading: true
    });
}


const ScienceReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_SCIENCE_SUCCESS:
            return fetchScienceSuccess(state,action)
        case  actionTypes.FETCH_SCIENCE_START:
            return fetchScienceStart(state,action)
        default:
            return state
    }
};
export default ScienceReducer;