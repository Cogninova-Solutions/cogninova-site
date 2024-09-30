'use client'

import { ContactBlock, Map } from "@/components/contact";
import { PagesLayout } from "@/components/common";
import { NextPageWithLayout } from "@/types/index";

const seoTitle = "Contact Us | Cogninova Solutions";

const ContactUs: NextPageWithLayout = () => {
    return (
        <>
            <meta name="keywords" content="Cogninova, Solutions, Cogninova Solutions, Development, Mobile, Software, IT, Technology, Contact Us"></meta>
            <meta name="description" content="Contact Us" />

            <div className="fancy-feature-fiftyOne position-relative mt-250 lg-mt-150">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 text-center m-auto" data-aos="fade-up">
                            <div className="title-style-five mb-65 lg-mb-40">
                                <div className="sc-title-two fst-italic position-relative d-inline-block">
                                    Contact info
                                </div>
                                <h2 className="main-title fw-500 tx-dark">Get in Touch.</h2>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /.container */}

            </div>

            {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
            <div className="contact-section-one mt-60 lg-mt-30">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <ContactBlock />
                    </div>
                </div>
                <Map />
            </div>

            {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
        </>
    );
}

ContactUs.getLayout = function getLayout(page: React.ReactElement) {
    return <PagesLayout seoTitle={seoTitle}>{page}</PagesLayout>;
};

export default ContactUs;
