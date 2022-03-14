import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import {Provider} from "react-redux";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import employeeReducer from './store/reducers/employeeReducer'
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';
import facultyReducer from "./store/reducers/FacultyReducer";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import UserReducer from "./store/reducers/UserReducer";
import SubjectReducer from "./store/reducers/SubjectReducer";
import ScienceReducer from "./store/reducers/ScienceReducer";
import PermissionReducer from "./store/reducers/PermissionReducer";
import TopicReducer from "./store/reducers/TopicReducer";
import CommentReducer from "./store/reducers/CommentReducer";
import {BrowserRouter} from "react-router-dom";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    employee: employeeReducer,
    faculty: facultyReducer,
    user: UserReducer,
    subject: SubjectReducer,
    science: ScienceReducer,
    permission: PermissionReducer,
    topic: TopicReducer,
    comment: CommentReducer,
});

const loadState = () => {
    try {
        const serializedState = localStorage.getItem("state");
        if (serializedState === null) {
            return undefined
        }
        return JSON.parse(serializedState)
    } catch (e) {
        return undefined
    }
}
const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("state", serializedState)
    } catch (e) {

    }
}
const persistedState = loadState();
const store = createStore(
    rootReducer,/*persistedState,*/composeEnhancers(applyMiddleware(thunk))
)
ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
