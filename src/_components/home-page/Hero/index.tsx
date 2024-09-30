import React from "react";

export function Hero() {

    return (
        <div className="hero-banner-ten position-relative zn2">
            <div className="container">
                <div className="row">
                    <div
                        className="col-lg-9 col-md-10 m-auto text-center"
                        data-aos="fade-up"
                    >
                        <h1 className="hero-heading fw-500 tx-dark">
                            Elevating Businesses through <span>Smart &amp; Intuitive</span> Solutions.
                        </h1>
                        <p className="text-lg tx-dark mt-45 mb-50 lg-mt-30 lg-mb-40">
                            We drive success through digital transformation.
                        </p>
                    </div>
                </div>
            </div>
            {/* End .container */}

            <img
                src="/images/assets/ils_11.png"
                alt="ilustration"
                className="lazy-img illustration-one"
                data-aos="fade-left"
            />
            <img
                src="/images/assets/ils_12.png"
                alt="ilustration"
                className="lazy-img illustration-two"
                data-aos="fade-right"
            />
        </div>
    );
};
