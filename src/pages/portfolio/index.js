import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Helmet, HelmetProvider} from "react-helmet-async";
import {dataportfolio, meta} from "../../content_option";
import "./style.css";

export const Portfolio = () => {
    return (
        <HelmetProvider>
            <Container className="About-header">
                <Helmet>
                    <meta charSet="utf-8"/>
                    <title> Portfolio | {meta.title} </title>{" "}
                    <meta name="description" content={meta.description}/>
                    <meta name="description" content={meta.description}/>
                    <meta name="title" content="About | Takeshi`s Portfolio"/>
                    <meta property="og:title" content="About | Takeshi`s Portfolio"/>
                    <meta property="og:image" content={`${process.env.PUBLIC_URL}/site-icon.jpg`}/>
                    <meta property="og:description" content="Saito`s portfolio site"/>
                    <meta property="og:site_name" content="Takeshi Saito`s Portfolio"/>
                    <meta property="og:locale" content="en_US"/>
                    <meta name="twitter:site" content="@TakeshiSaito_TA"/>
                    <meta name="twitter:card" content="summary_large_image"/>
                    <meta name="twitter:image" content={`${process.env.PUBLIC_URL}/still-header.jpg`}/>
                </Helmet>
                <Row className="mb-5 mt-3 pt-md-3">
                <Col lg="8">
                        <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
                        <hr className="t_border my-4 ml-0 text-left"/>
                    </Col>
                </Row>
                <div className="mb-5 po_items_ho">
                    {dataportfolio.map((data, i) => {
                        return (
                            <div key={i} className="po_item">
                                <img src={data.img} alt=""/>
                                <div className="content">
                                    <p>{data.description}</p>
                                    <a href={data.link}>view project</a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </HelmetProvider>
    )
}