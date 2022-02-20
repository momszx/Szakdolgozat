import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./containers/Faculty";
import _404 from "./containers/404";
import NavBar from "./containers/NavBar";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Login from "./containers/Login";
import Footer from "./containers/Footer";

function App() {
    return (
        <>
            <NavBar/>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home/>}>
                    </Route>
                    <Route exact path="/login" element={<Login/>}>
                    </Route>
                    <Route exact path="/*" element={<_404/>}>
                    </Route>
                </Routes>
            </Router>
            <Footer/>
        </>
    );
}

export default App;
