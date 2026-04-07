import React from "react";
import "./style.css";
import {Helmet, HelmetProvider} from "react-helmet-async";
import Typewriter from "typewriter-effect";
import {introdata, meta, blogposts} from "../../content_option";
import {Link} from "react-router-dom";
import {Container} from "react-bootstrap";

export const Home = () => {
    const latestPosts = blogposts.slice(0, 3);
    
    return (
        <HelmetProvider>
            <section id="home" className="home">
                <Helmet>
                    <meta charSet="utf-8"/>
                    <title> {meta.title}</title>
                    <meta name="description" content={meta.description}/>
                </Helmet>
                <div className="intro_sec d-block d-lg-flex align-items-center">
                    <div
                        className="h_bg-image order-1 order-lg-2 h-100 "
                        style={{backgroundImage: `url(${introdata.home_img_url})`}}
                    ></div>
                    <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
                        <div className="align-self-center">
                            <div className="intro mx-auto">
                                <h2 className="mb-1x">{introdata.title}</h2>
                                <h1 className="fluidz-48 mb-1x">
                                    <Typewriter
                                        options={{
                                            strings: [
                                                introdata.animated.first,
                                                introdata.animated.second,
                                                introdata.animated.third,
                                            ],
                                            autoStart: true,
                                            loop: true,
                                            deleteSpeed: 10,
                                        }}
                                    />
                                </h1>
                                <p className="mb-1x">{introdata.description}</p>
                                <p className="mb-1x">E-mail : {introdata.e_mail}</p>
                                <div className="intro_btn-action pb-5">
                                    <Link to="/portfolio" className="text_2">
                                        <div id="button_p" className="ac_btn btn ">
                                            My Portfolio
                                            <div className="ring one"></div>
                                            <div className="ring two"></div>
                                            <div className="ring three"></div>
                                        </div>
                                    </Link>
                                    <Link to="/blog">
                                        <div id="button_posts" className="ac_btn btn">
                                            Posts
                                            <div className="ring one"></div>
                                            <div className="ring two"></div>
                                            <div className="ring three"></div>
                                        </div>
                                    </Link>
                                    <Link to="/about">
                                        <div id="button_h" className="ac_btn btn">
                                            About Me
                                            <div className="ring one"></div>
                                            <div className="ring two"></div>
                                            <div className="ring three"></div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="latest_posts_section">
                <Container>
                    <div className="latest_posts_header">
                        <h2>Latest Blog Posts</h2>
                        <Link to="/blog" className="text_2">
                            <div id="button_blog" className="ac_btn btn">
                                View All Posts
                                <div className="ring one"></div>
                                <div className="ring two"></div>
                                <div className="ring three"></div>
                            </div>
                        </Link>
                    </div>
                    <div className="latest_posts_grid">
                        {latestPosts.map((post) => (
                            <Link to={`/blog`} key={post.id} className="latest_post_link">
                                <article className="latest_post_card">
                                    <span className="latest_post_category">{post.category}</span>
                                    <h3 className="latest_post_title">{post.title}</h3>
                                    <p className="latest_post_meta">{post.date} · {post.readTime} read</p>
                                </article>
                            </Link>
                        ))}
                    </div>
                </Container>
            </section>
        </HelmetProvider>
    )
}
