import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./containers/Faculty/FacultyView";
import _404 from "./containers/404";
import NavBar from "./containers/NavBar";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Login from "./containers/LoginView";
import Footer from "./containers/Footer";
import ScienceView from "./containers/Science/ScienceView";
import SubjectView from "./containers/Subject/SubjectView";
import PermissionView from "./containers/Permission/PermissionView";
import UserView from "./containers/User/UserView";
import SubjectDetailsView from "./containers/Subject/SubjectDetailsView";
import QuestionDetailsView from "./containers/Question/QuestionDetailsView";
import NoteDetailsView from "./containers/Note/NoteDetailsView";

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
                    <Route exact path="/permission" element={<PermissionView/>}>
                    </Route>
                    <Route exact path="/user" element={<UserView/>}>
                    </Route>
                    <Route exact path="/subjectDetails" element={<SubjectDetailsView/>}>
                    </Route>
                    <Route exact path="/noteDetails" element={<NoteDetailsView/>}>
                    </Route>
                    <Route exact path="/questionDetails" element={<QuestionDetailsView/>}>
                    </Route>
                    <Route exact path="/*" element={<_404/>}>
                    </Route>
                </Routes>
            <Footer/>
        </>
    );
}

export default App;
