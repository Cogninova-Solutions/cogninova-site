'use client'

import { Values } from "@/components/services/Values";
import { PagesLayout } from "@/components/common";
import { NextPageWithLayout } from "@/types/index";
import { Customers } from "@/components/home-page/Customers";
import { Medlinkfeatures } from "@/components/medlinkfeatures"

const seoTitle = "MedLink | Cogninova Solutions";

const MedLink: NextPageWithLayout = () => {
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
                                    MedLink
                                </div>
                                <h2 className="main-title fw-500 tx-dark">
                                    Automating patient communication so you can focus on what matters the most.
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-5" data-aos="fade-left">
                            <img 
                            src="/images/gallery/medlink_image.jpg" 
                            alt="MedLink" 
                            className="img-fluid"
                        />
            </div>
                    </div>
                    <div className="row">
                        <div>
                            <div  data-aos="fade-left">
                                <p className="text-lg tx-dark">
                                    MedLink is a solution that automatically sends laboratory reports automatically upon verification to the patients. The application utilizes state of the art encryption algorithms to ensure patient data confidentiality; and follows the latest guidelines of CAP and JCI.
                                    <br />
                                    <br />
                                    MedLink’s top feature is patient and application data security. The software utilizes state of the art encryption algorithms to ensure that the patient reports are secure and only viewable by the right person. The software also saves its own encrypted configurations on a secure database so no one can view or alter the domain data except the authorized users.
                                    <br />
                                    <br />
                                    MedLink Utilizes the power of cloud to provide your application with constant support. New updates that enhance application security and performance stability are pushed regularly to ensure that you always get the latest and greatest from your software. If the application was customized to meet your needs, you still get your own updates.                                </p>
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

            <div className="fancy-feature-fiftyOne position-relative mt-200">
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
                                            Why Choose MedLink?
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-md-center">
                                <Medlinkfeatures/>
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


MedLink.getLayout = function getLayout(page: React.ReactElement) {
    return <PagesLayout seoTitle={seoTitle}>{page}</PagesLayout>;
};

export default MedLink;
