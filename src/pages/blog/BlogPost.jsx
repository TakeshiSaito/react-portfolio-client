import React, { useEffect } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { blogposts, meta } from "../../content_option";
import { Link, useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import "./style.css";

export const BlogPost = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const post = blogposts.find(p => p.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!post) {
        return (
            <HelmetProvider>
                <Container className="About-header">
                    <Row className="mb-5 mt-3 pt-md-3">
                        <Col lg="8">
                            <h1 className="display-4 mb-4">Post Not Found</h1>
                            <p>The blog post you are looking for does not exist.</p>
                            <Link to="/blog" className="blog_readmore">Back to Blog</Link>
                        </Col>
                    </Row>
                </Container>
            </HelmetProvider>
        );
    }

    const currentIndex = blogposts.findIndex(p => p.id === parseInt(id));
    const prevPost = currentIndex < blogposts.length - 1 ? blogposts[currentIndex + 1] : null;
    const nextPost = currentIndex > 0 ? blogposts[currentIndex - 1] : null;

    return (
        <HelmetProvider>
            <Container className="About-header">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{post.title} | {meta.title}</title>
                    <meta name="description" content={post.excerpt} />
                </Helmet>
                
                <article className="blog_post">
                    <Row className="mb-4 mt-3 pt-md-3">
                        <Col lg="10">
                            <Link to="/blog" className="blog_back_link">
                                <span className="blog_back_arrow">←</span> Back to Blog
                            </Link>
                        </Col>
                    </Row>

                    <Row className="mb-4">
                        <Col lg="10">
                            <header className="blog_post_header">
                                <div className="blog_post_meta">
                                    <span className="blog_category">{post.category}</span>
                                    <span className="blog_date">{post.date}</span>
                                    <span className="blog_readtime">{post.readTime} read</span>
                                </div>
                                <h1 className="blog_post_title">{post.title}</h1>
                                <p className="blog_post_excerpt">{post.excerpt}</p>
                            </header>
                            <hr className="t_border my-4 ml-0 text-left" />
                        </Col>
                    </Row>

                    <Row>
                        <Col lg="10">
                            <div className="blog_post_content">
                                <ReactMarkdown
                                    components={{
                                        code({ node, inline, className, children, ...props }) {
                                            const match = /language-(\w+)/.exec(className || '');
                                            return !inline && match ? (
                                                <SyntaxHighlighter
                                                    style={vscDarkPlus}
                                                    language={match[1]}
                                                    PreTag="div"
                                                    {...props}
                                                >
                                                    {String(children).replace(/\n$/, '')}
                                                </SyntaxHighlighter>
                                            ) : (
                                                <code className={className} {...props}>
                                                    {children}
                                                </code>
                                            );
                                        },
                                        h2: ({ children }) => <h2 className="blog_content_h2">{children}</h2>,
                                        h3: ({ children }) => <h3 className="blog_content_h3">{children}</h3>,
                                        p: ({ children }) => <p className="blog_content_p">{children}</p>,
                                        ul: ({ children }) => <ul className="blog_content_ul">{children}</ul>,
                                        li: ({ children }) => <li className="blog_content_li">{children}</li>,
                                        strong: ({ children }) => <strong className="blog_content_strong">{children}</strong>,
                                    }}
                                >
                                    {post.content}
                                </ReactMarkdown>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-5">
                        <Col lg="10">
                            <hr className="t_border my-4 ml-0 text-left" />
                            <nav className="blog_post_nav">
                                <div className="blog_post_nav_item blog_post_nav_prev">
                                    {prevPost && (
                                        <Link to={`/blog/${prevPost.id}`}>
                                            <span className="blog_post_nav_label">Previous Post</span>
                                            <span className="blog_post_nav_title">{prevPost.title}</span>
                                        </Link>
                                    )}
                                </div>
                                <div className="blog_post_nav_item blog_post_nav_next">
                                    {nextPost && (
                                        <Link to={`/blog/${nextPost.id}`}>
                                            <span className="blog_post_nav_label">Next Post</span>
                                            <span className="blog_post_nav_title">{nextPost.title}</span>
                                        </Link>
                                    )}
                                </div>
                            </nav>
                        </Col>
                    </Row>

                    <Row className="mt-5 blog_post_bottom_buttons">
                        <Col className="text-center">
                            <Link to="/blog" className="text_2">
                                <div className="ac_btn btn">
                                    Back to Blog
                                    <div className="ring one"></div>
                                    <div className="ring two"></div>
                                    <div className="ring three"></div>
                                </div>
                            </Link>
                        </Col>
                    </Row>
                </article>
            </Container>
        </HelmetProvider>
    );
};
