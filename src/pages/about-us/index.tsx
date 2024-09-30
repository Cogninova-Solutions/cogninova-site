'use client'

import { Values } from "@/components/services/Values";
import { PagesLayout } from "@/components/common";
import { NextPageWithLayout } from "@/types/index";
import { Customers } from "@/components/home-page/Customers";

const seoTitle = "About Us | Cogninova Solutions";

const AboutUs: NextPageWithLayout = () => {
    return (
        <>

            <meta name="keywords" content="Cogninova, Solutions, Cogninova Solutions, Development, Mobile, Software, IT, Technology, About Us"></meta>
            <meta name="description" content="About Us" />

            {/* 
			=============================================
				Feature Section Fifty One
			============================================== 
			*/}
            <div className="fancy-feature-fiftyOne position-relative mt-200">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7" data-aos="fade-right">
                            <div className="title-style-five mb-65 md-mb-40">
                                <div className="sc-title-two fst-italic position-relative">
                                    More About us.
                                </div>
                                <h2 className="main-title fw-500 tx-dark">
                                    We provide world class services to our clients.
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-8 col-lg-9 ms-auto">
                            <div className="ps-xxl-5" data-aos="fade-left">
                                <h6 className="mb-30">Our History &amp; Goal.</h6>
                                <p className="text-lg tx-dark">
                                    Cogninova solutions is a pioneering software house established in 2024 in the United Arab Emirates aiming at building software solutions that elevate businesses and maximizes their efficiency.
                                    <br />
                                    We are driven by a passion for innovation and a commitment to empowering businesses across all industries, to achieve new levels of efficiency and success through intelligent software solutions.
                                    <br />
                                    <br />
                                    At Cogninova, we believe in the transformative power of technology and its ability to address the most pressing challenges across various industries. We are committed to fostering long-term partnerships with our clients, providing ongoing support, and ensuring their software solutions continue to adapt and evolve alongside their business needs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <img
                    src="/images/shape/shape_171.svg"
                    alt="shape"
                    className="lazy-img shapes shape-one"
                />
            </div>

            <div className="fancy-feature-thirtySix mt-190 lg-mt-140">
                <div className="container">
                    <div className="wrapper position-relative">
                        <div className="row">
                            <div className="col-lg-6">
                                <div
                                    className="title-style-one text-center text-lg-start mb-40 md-mb-20"
                                    data-aos="fade-right"
                                >
                                    <h2 className="main-title fw-500 tx-dark m0">
                                        Our Customers
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-md-center">
                            <Customers />
                        </div>
                        {/* /.row */}
                    </div>
                    <img
                    src="/images/shape/shape_189.svg"
                    alt="shape"
                    className="lazy-img shapes shape-one"
                    />
                </div>
                {/* /.container */}
            </div>

            <div className="fancy-feature-fiftyOne position-relative mt-200">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7" data-aos="fade-right">
                            <div className="title-style-five mb-65 md-mb-40">
                                <h2 className="main-title fw-500 tx-dark">
                                    Vision &amp; Mission
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-8 col-lg-9 ms-auto">
                            <div className="ps-xxl-5" data-aos="fade-left">
                                <h6 className="mb-30">Vision</h6>
                                <p className="text-lg tx-dark">
                                    To be the trusted software solutions partner, empowering businesses to thrive in the digital age through innovative and efficient technology. To break down our vision, we work to:
                                </p>
                                <ul>
                                    <li>Be a trusted Software Solutions Partner: This emphasizes building strong, reliable relationships with clients. Cogninova goes beyond simply selling software; they aim to be a long-term advisor and collaborator.</li>
                                    <li>Empower Businesses to Thrive: The focus isn&apos;t just on selling software, but on the positive impact it has on businesses. Cogninova wants their solutions to be instrumental in a company&apos;s success.</li>
                                    <li>Be on top of the Digital Age: This acknowledges the ever-changing technological landscape and positions Cogninova as a company that stays ahead of the curve.</li>
                                    <li>Provide Innovative and Efficient Technology: This highlights two key aspects of Cogninova&apos;s solutions. They are not only cutting-edge but also designed to streamline processes and maximize productivity.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div><p><br /></p></div>
                    <div className="row">
                        <div className="col-xl-8 col-lg-9 ms-auto">
                            <div className="ps-xxl-5" data-aos="fade-left">
                                <h6 className="mb-30">Mission</h6>
                                <p className="text-lg tx-dark">
                                    We craft intelligent software solutions that are agile and scalable, enabling our clients to achieve their goals and unlock new potential.
                                </p>
                                <ul>
                                    <li>Intelligent Software Solutions: This signifies that Cogninova&apos;s software goes beyond basic functionality. It incorporates elements of artificial intelligence, machine learning, or data analytics to provide insights and automation</li>
                                    <li>Agile and Scalable: This emphasizes the adaptability of your solutions. They can be tailored to specific needs and grow alongside a client&apos;s business</li>
                                    <li>Enable Clients to Achieve Goals: This clarifies that the ultimate purpose of your software is to help clients reach their desired outcomes</li>
                                    <li>Unlock New Potential: This suggests that your solutions not only address existing needs but also empower clients to discover and pursue new opportunities.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="fancy-feature-thirtySix mt-190 lg-mt-140">
                    <div className="container">
                        <div className="wrapper position-relative">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div
                                        className="title-style-one text-center text-lg-start mb-40 md-mb-20"
                                        data-aos="fade-right"
                                    >
                                        <h2 className="main-title fw-500 tx-dark m0">
                                            Our Values
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-md-center">
                                <Values />
                            </div>
                            {/* /.row */}
                        </div>
                    </div>
                    {/* /.container */}
                </div>
            </div>
        </>
    );
};


AboutUs.getLayout = function getLayout(page: React.ReactElement) {
    return <PagesLayout seoTitle={seoTitle}>{page}</PagesLayout>;
};

export default AboutUs;
