import Link from "next/link"
import { Layout } from "@/components/common";
import { Footer } from "@/components/home-page/footer";
import { FeatureBlock, Hero, IntroAbout, MobileAppBanner, Service, Testimonial, WhyChoose } from "@/components/home-page";
import { Block, Partners } from "@/components/services"
import { NextPageWithLayout } from "@/types/index";
import { Customers } from "@/components/home-page/Customers";

const seoTitle = "Cogninova Solutions | Building Smart and Intuitive Solutions";

const Home: NextPageWithLayout = () => {
    return (
        <>
        <meta name="keywords" content="Cogninova, Solutions, Cogninova Solutions, Development, Mobile, Software, IT, Technology"></meta>
        <meta name="description" content="Home Page" />

            <Hero />

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
                                        Discover all our Services.
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-md-center">
                            <Service />
                        </div>
                        {/* /.row */}

                        <div className="text-center md-mt-50">
                            <Link
                                href="/services"
                                className="btn-twentyTwo fw-500 tran3s"
                                data-aos="fade-left"
                            >
                                View all Services
                            </Link>
                        </div>
                    </div>
                </div>
                {/* /.container */}
            </div>

            <div className="fancy-feature-thirtySeven mt-225 lg-mt-120">
                <div className="container">
                    <div className="row">
                        <div
                            className="col-lg-6 ms-auto order-lg-last"
                            data-aos="fade-left"
                        >
                            <div className="ps-lg-5 ms-xxl-3">
                                <div className="title-style-one mb-40">
                                    <div className="sc-title text-uppercase">Why Choose Us</div>
                                    <h2 className="main-title fw-500 tx-dark m0">
                                        What makes us the best.
                                    </h2>
                                </div>
                                <WhyChoose />
                                {/* /.accordion-style-five */}
                            </div>
                        </div>
                        {/* End .col-6 */}

                        <div className="col-xxl-5 col-lg-6 order-lg-first">
                            <Block />
                        </div>
                    </div>
                </div>
                {/* /.container */}
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
            <br />
            {/*
                =====================================================
                    Footer
                =====================================================
                */}
            <div className="footer-style-ten theme-basic-footer zn2 position-relative">
                <div className="container">
                    <div className="inner-wrapper">
                        <div className="row justify-content-between">
                            <div className="col-lg-3 footer-intro mb-40">
                                <div className="logo">
                                    <Link href="/">
                                        <img src="/images/logo/Cogninova_logo.png" alt="logo" width={250} />
                                    </Link>
                                </div>
                                <p className="text-white opacity-50 fs-15 m0 d-none d-lg-block">
                                    © {new Date().getFullYear()} - {new Date().getFullYear() + 1}{" "}
                                    Cogninova Solutions.
                                </p>
                            </div>
                            <Footer />
                        </div>
                    </div>
                    {/* /.inner-wrapper */}
                </div>
                {/* End .container */}
                <img
                    src="/images/assets/ils_13.png"
                    alt="illustration"
                    className="lazy-img illustration-one"
                    data-aos="fade-left"
                />
                <img
                    src="/images/assets/ils_14.png"
                    alt="illustration"
                    className="lazy-img illustration-two"
                    data-aos="fade-right"
                />
            </div>
            {/* /.footer-style-ten */}
        </>
    );
}

Home.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout seoTitle={seoTitle}>{page}</Layout>;
};

export default Home;
