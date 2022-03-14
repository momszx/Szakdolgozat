import * as actionTypes from '../actions/actionsTypes';
import {updateObject} from "../utility";

const initialState = {
    error: '',
    loading: true,
    topic:[]
};
const fetchTopicSuccess = (state, action) => {
    return updateObject(state, {
        topic: action.topic,
        loading: false
    });
}
const fetchTopicStart = (state, action) => {
    return updateObject(state, {
        loading: true
    });
}
const TopicReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_TOPIC_SUCCESS:
            return fetchTopicSuccess(state,action)
        case actionTypes.FETCH_TOPIC_START:
            return fetchTopicStart(state,action)
        default:
            return state
    }
};
export default TopicReducer;