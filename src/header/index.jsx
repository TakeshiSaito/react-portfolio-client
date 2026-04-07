import React from "react";
import "./style.css";
import {Link} from "react-router-dom";
import {logotext} from "../content_option";

export const Headermain = () => {
    return (
        <>
            <header className="fixed-top site__header">
                <div className="d-flex align-items-center justify-content-between">
                    <Link className="navbar-brand nav_ac" to="/">
                        {logotext}
                    </Link>
                </div>
            </header>
            <div className="br-top"></div>
            <div className="br-bottom"></div>
            <div className="br-left"></div>
            <div className="br-right"></div>
        </>
    )
}
