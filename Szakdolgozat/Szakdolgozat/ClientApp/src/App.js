import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./containers/Faculty/FacultyView";
import _404 from "./containers/404";
import NavBar from "./containers/NavBar";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Login from "./containers/Login";
import Footer from "./containers/Footer";
import ScienceView from "./containers/Science/ScienceView";
import SubjectView from "./containers/Subject/SubjectView";
import NoteReducer from "./store/reducers/NoteReducer";
import QuestionView from "./containers/Question/QuestionView";
import PermissionView from "./containers/Permission/PermissionView";
import UserView from "./containers/User/UserView";

function App() {
    return (
        <>
            <NavBar/>
                <Routes>
                    <Route exact path="/" element={<Home/>}>
                    </Route>
                    <Route exact path="/login" element={<Login/>}>
                    </Route>
                    <Route  path="/science" element={<ScienceView/>}>
                    </Route>
                    <Route exact path="/subject" element={<SubjectView/>}>
                    </Route>
                    <Route exact path="/note" element={<NoteReducer/>}>
                    </Route>
                    <Route exact path="/question" element={<QuestionView/>}>
                    </Route>
                    <Route exact path="/permission" element={<PermissionView/>}>
                    </Route>
                    <Route exact path="/user" element={<UserView/>}>
                    </Route>
                    <Route exact path="/*" element={<_404/>}>
                    </Route>
                </Routes>
            <Footer/>
        </>
    );
}

export default App;
