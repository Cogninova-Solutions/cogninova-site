export function Block() {
    return (
        <>
            <div className="row align-items-end" data-aos="fade-up">
                <div className="col-md-5 col-sm-4">
                    <img
                        src="/images/shape/shape_136.svg"
                        alt="shape"
                        className="lazy-img d-none d-sm-inline-block"
                    />
                </div>
                <div className="col-md-7 col-sm-8" data-aos="fade-down">
                    <div className="block-wrapper block-one">
                        <h3 style={{ color: "#FFAE10" }}>Satisfaction</h3>
                        <p>We have highest levels of customer satisfaction.</p>
                    </div>
                    {/* /.block-wrapper */}
                </div>
            </div>
            {/* End .row */}

            <div className="row gx-xxl-5" data-aos="fade-down">
                <div className="col-sm-7" data-aos="fade-down">
                    <div className="block-wrapper block-two position-relative mt-50 sm-mt-30">
                        <h3 style={{ color: "#9650EF" }}>
                            Curious &amp; <br />
                            Innovative
                        </h3>
                        <p>
                            Working with the latest and greatest technologies to achieve the best results.
                        </p>
                        <img
                            src="/images/shape/shape_138.svg"
                            alt="sahpe"
                            className="lazy-img shapes shape-one"
                        />
                    </div>
                    {/* /.block-wrapper */}
                </div>
                {/* End .col */}

                <div className="col-sm-5" data-aos="fade-up">
                    <div className="block-wrapper block-three mt-50 sm-mt-30">
                        <h3 style={{ color: "#00BDE6" }}>
                            <span>We Care</span>
                        </h3>
                        <p>We treat your business as our own!</p>
                    </div>
                    {/* /.block-wrapper */}
                    <img
                        src="/images/shape/shape_137.svg"
                        alt="shape"
                        className="lazy-img mt-30 ms-auto me-auto d-none d-sm-inline-block"
                    />
                </div>
            </div>
        </>
    );
};
