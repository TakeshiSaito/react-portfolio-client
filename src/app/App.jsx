import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {Route, Routes} from "react-router-dom";
import {LangProvider} from "../context/LangContext";
import {Home} from "../pages/home";
import {Headermain} from "../header";
import {Socialicons} from "../components/socialicons";
import {About} from "../pages/about";
import {Portfolio} from "../pages/portfolio";
import {Blog} from "../pages/blog";
import {BlogPost} from "../pages/blog/BlogPost";

function App() {
    return (
        <LangProvider>
        <div className="App">
            <Headermain/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path={"/about"} element={<About/>}/>
                <Route path={"/portfolio"} element={<Portfolio/>}/>
                <Route path={"/blog"} element={<Blog/>}/>
                <Route path={"/blog/:id"} element={<BlogPost/>}/>
                <Route path="*" element={<Home/>}/>
            </Routes>
            <Socialicons/>
        </div>
        </LangProvider>
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
