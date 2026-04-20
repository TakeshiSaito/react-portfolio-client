import {Helmet, HelmetProvider} from "react-helmet-async";
import {Col, Container, Row} from "react-bootstrap";
import {
    dataabout,
    meta, careers,
    technologies,
    certifications,
} from "../../content_option";
import "./style.css";
import {Avatar} from "@mui/material";
import React from "react";
import {FaGitAlt} from "react-icons/fa";
import {
    SiAutodeskmaya,
    SiCplusplus,
    SiGithubactions,
    SiHoudini,
    SiPython,
    SiUnity,
    SiUnrealengine,
} from "react-icons/si";
import {TbBrandCSharp} from "react-icons/tb";

const technologyIcons = {
    Python: SiPython,
    "Unreal Engine": SiUnrealengine,
    "Autodesk Maya": SiAutodeskmaya,
    Houdini: SiHoudini,
    Unity: SiUnity,
    "C#": TbBrandCSharp,
    "C++": SiCplusplus,
    Git: FaGitAlt,
    "GitHub Actions": SiGithubactions,
};

export const About = () => {
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
                        <h1 className="display-4 mb-4">Takeshi Saito</h1>
                        <hr className="t_border my-4 ml-0 text-left"/>
                    </Col>
                </Row>
                <Row className="sec_sp">
                    <Col lg="5">
                        <h3 className="color_sec py-4">{dataabout.title}</h3>
                    </Col>
                    <Col lg="7" className="d-flex align-items-center">
                        <div>
                            <Avatar
                                alt="Takeshi Saito"
                                src="/icon-saito.jpg"
                                sx={{width: 256, height: 256}}
                                style={{marginBottom: '50px'}}/>
                            {dataabout.aboutme.split('\n').map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </Col>
                </Row>
                <Row className="sec_sp">
                    <Col lg="5">
                        <h3 className="color_sec py-4">Experienced Technologies</h3>
                    </Col>
                    <Col lg="7">
                        <div className="technology-grid">
                        {technologies.map((data, i) => {
                            const Icon = technologyIcons[data.name];
                            return (
                                <div className="technology-card" key={i}>
                                    <div className="technology-icon">
                                        <Icon aria-hidden="true"/>
                                    </div>
                                    <span className="technology-name">{data.name}</span>
                                </div>
                            );
                        })}
                        </div>
                    </Col>
                </Row>
                <Row className="sec_sp">
                    <Col lg="5">
                        <h3 className="color_sec py-4">Careers</h3>
                    </Col>
                    <Col lg="7">
                        {careers.map((data, i) => {
                            return (
                                <div className="service_ py-4" key={i}>
                                    <h5 className="service__title">{data.title}</h5>
                                    <p className="service_desc">{data.description}</p>
                                </div>
                            );
                        })}
                    </Col>
                </Row>
                <Row className="sec_sp">
                    <Col lg="5">
                        <h3 className="color_sec py-4">Certifications</h3>
                    </Col>
                    <Col lg="7">
                        {certifications.map((data, i) => {
                            return (
                                <div className="service_ py-3" key={i}>
                                    <h5 className="service__title">{data.title}</h5>
                                    <p className="service_desc">{data.date}</p>
                                </div>
                            );
                        })}
                    </Col>
                </Row>
            </Container>
        </HelmetProvider>
    )
}
