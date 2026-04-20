import React from "react";
import "./style.css";
import {Link} from "react-router-dom";
import {logotext} from "../content_option";
import {useLang} from "../context/LangContext";

export const Headermain = () => {
    const { lang, switchLang } = useLang();

    return (
        <>
            <header className="fixed-top site__header">
                <div className="d-flex align-items-center justify-content-between">
                    <Link className="navbar-brand nav_ac" to="/">
                        {logotext}
                    </Link>
                    <div className="header_lang_toggle">
                        <button
                            className={`header_lang_btn${lang === 'ja' ? ' active' : ''}`}
                            onClick={() => switchLang('ja')}
                        >
                            JA
                        </button>
                        <button
                            className={`header_lang_btn${lang === 'en' ? ' active' : ''}`}
                            onClick={() => switchLang('en')}
                        >
                            EN
                        </button>
                    </div>
                </div>
            </header>
            <div className="br-top"></div>
            <div className="br-bottom"></div>
            <div className="br-left"></div>
            <div className="br-right"></div>
        </>
    )
}
