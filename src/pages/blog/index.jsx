import React, { useEffect } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { blogposts, meta } from "../../content_option";
import { Link } from "react-router-dom";
import { useLang } from "../../context/LangContext";
import "./style.css";

export const Blog = () => {
    const { lang } = useLang();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <HelmetProvider>
            <Container className="About-header">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title> Blog | {meta.title}</title>
                    <meta name="description" content="Technical blog posts about CG pipelines, Python development, and production engineering." />
                </Helmet>
                <Row className="mb-5 mt-3 pt-md-3">
                    <Col lg="8">
                        <h1 className="display-4 mb-4">Blog</h1>
                        <hr className="t_border my-4 ml-0 text-left" />
                    </Col>
                </Row>
                <div className="blog_list">
                    {blogposts.map((post) => {
                        const content = post[lang] || post.ja || post.en;
                        const isOnlyLang = !(post.ja && post.en);
                        const onlyLangLabel = post.ja ? 'JA only' : 'EN only';
                        return (
                            <article key={post.id} className="blog_card">
                                <div className="blog_card_header">
                                    <span className="blog_category">{content.category}</span>
                                    <span className="blog_date">{post.date}</span>
                                </div>
                                <h2 className="blog_title">
                                    {content.title}
                                    {isOnlyLang && (
                                        <span className="lang_only_badge">{onlyLangLabel}</span>
                                    )}
                                </h2>
                                <p className="blog_excerpt">{content.excerpt}</p>
                                <div className="blog_card_footer">
                                    <span className="blog_readtime">{content.readTime} read</span>
                                    <Link to={`/blog/${post.id}`} className="blog_readmore">
                                        Read More
                                    </Link>
                                </div>
                            </article>
                        );
                    })}
                </div>
                <Row className="mt-5 mb-5">
                    <Col className="text-center">
                        <Link to="/" className="text_2">
                            <div className="ac_btn btn">
                                Back to Home
                                <div className="ring one"></div>
                                <div className="ring two"></div>
                                <div className="ring three"></div>
                            </div>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </HelmetProvider>
    );
};
