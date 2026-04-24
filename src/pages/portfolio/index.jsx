import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Helmet, HelmetProvider} from "react-helmet-async";
import {dataportfolio, meta} from "../../content_option";
import "./style.css";

export const Portfolio = () => {
    const [loadedImages, setLoadedImages] = React.useState({});

    const handleImageReady = (imagePath) => {
        setLoadedImages((current) => (
            current[imagePath]
                ? current
                : {...current, [imagePath]: true}
        ));
    };

    return (
        <HelmetProvider>
            <Container className="About-header">
                <Helmet>
                    <meta charSet="utf-8"/>
                    <title> About | {meta.title}</title>
                    <meta name="description" content={meta.description}/>
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
                            <div
                                key={data.link ?? data.img ?? i}
                                className={`po_item ${loadedImages[data.img] ? "is-loaded" : ""}`}
                            >
                                {!loadedImages[data.img] && <div className="po_item__skeleton" aria-hidden="true"/>}
                                <img
                                    src={data.img}
                                    alt={data.description}
                                    loading="lazy"
                                    onLoad={() => handleImageReady(data.img)}
                                    onError={() => handleImageReady(data.img)}
                                />
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
