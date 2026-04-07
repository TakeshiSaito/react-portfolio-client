import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Home} from "../pages/home";
import {Headermain} from "../header";
import {Socialicons} from "../components/socialicons";
import {About} from "../pages/about";
import {Portfolio} from "../pages/portfolio";
import {Blog} from "../pages/blog";

function App() {
    return (
        <div className="App">
            <Headermain/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path={"/about"} element={<About/>}/>
                <Route path={"/portfolio"} element={<Portfolio/>}/>
                <Route path={"/blog"} element={<Blog/>}/>
                <Route path="*" element={<Home/>}/>
            </Routes>
            <Socialicons/>
        </div>
    );
}

function AppRoutes() {
    return (
        <div className="s_c">
            <App/>
        </div>
    );
}

export default AppRoutes;
