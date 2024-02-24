import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import AppRoutes from "./app/App";
import './index.css';
import {meta} from "./content_option";
import {Helmet, HelmetProvider} from "react-helmet-async";
// import stillheader from "assets/still-header.jpg";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <HelmetProvider>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>{meta.title}</title>
                <meta name="description" content={meta.description}/>
                <meta name="title" content="About | Takeshi's Portfolio"/>
                <meta property="og:title" content="About | Takeshi's Portfolio"/>
                <meta property="og:type" content="website"/>
                <meta property="og:image" content={`${process.env.PUBLIC_URL}/site-icon.jpg`}/>
                <meta property="og:description" content="Saito's portfolio site"/>
                <meta property="og:site_name" content="Takeshi Saito's Portfolio"/>
                <meta property="og:locale" content="en_US"/>
                <meta name="twitter:site" content="@TakeshiSaito_TA"/>
                <meta name="twitter:card" content={`${process.env.PUBLIC_URL}/still-header.jpg`}/>
                {/*<meta name="twitter:image" content={stillheader}/>*/}
            </Helmet>
            <BrowserRouter>
                <AppRoutes/>
            </BrowserRouter>
        </HelmetProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
