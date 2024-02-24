import {Helmet, HelmetProvider} from "react-helmet-async";
import {Col, Container, Row} from "react-bootstrap";
import {
    dataabout,
    meta, careers,
    // worktimeline,
    skills,
    // services,
} from "../../content_option";
import "./style.css";
import {Avatar} from "@mui/material";

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
                        <Avatar alt="Remy Sharp" src={`${process.env.PUBLIC_URL}/icon-saito.jpg`}/>
                        <hr className="t_border my-4 ml-0 text-left"/>
                    </Col>
                </Row>
                <Row className="sec_sp">
                    <Col lg="5">
                        <h3 className="color_sec py-4">{dataabout.title}</h3>
                    </Col>
                    <Col lg="7" className="d-flex align-items-center">
                        <div>
                            <p>{dataabout.aboutme}</p>
                        </div>
                    </Col>
                </Row>
                <Row className="sec_sp">
                    <Col lg="5">
                        <h3 className="color_sec py-4">Top Skills</h3>
                    </Col>
                    <Col lg="7">
                        {skills.map((data, i) => {
                            return (
                                <div key={i}>
                                    <h3 className="progress-title">{data.name}</h3>
                                    <div className="progress">
                                        <div
                                            className="progress-bar"
                                            style={{
                                                width: `${data.value}%`,
                                            }}
                                        >
                                            <div className="progress-value">{data.value}%</div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </Col>
                </Row>
                <Row className="sec_sp">
                    <Col lang="5">
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
            </Container>
        </HelmetProvider>
    )
}
