'use client'
import { PagesLayout } from "@/components/common";
import { Block, Service } from "@/components/services";
import { NextPageWithLayout } from "@/types/index";

const seoTitle = "Our Services | Cogninova Solutions";

const Services: NextPageWithLayout = () => {
    const features = [
        { text: 'Consulting Services for your business automation.' },
        { text: 'Robust Software Building' },
        { text: 'Support for the software we build.' },
    ];

    return (
        <>

            <meta name="keywords" content="Cogninova, Solutions, Cogninova Solutions, Development, Mobile, Software, IT, Technology, Services"></meta>
            <meta name="description" content="Our Services" />

            <div className='fancy-feature-fiftyOne position-relative mt-200'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xxl-7 col-lg-6' data-aos='fade-right'>
                            <div className='title-style-five mb-45 md-mb-10'>
                                <div className='sc-title-two fst-italic position-relative'>
                                    Our Services
                                </div>
                                <h2 className='main-title fw-500 tx-dark'>
                                    Our Provided Services.
                                </h2>
                            </div>
                        </div>
                    </div>
                    {/* End .row */}

                    <div className='row gx-xxl-5'>
                        <Service />
                    </div>
                    {/* /.row */}
                </div>
                {/* /.container */}
            </div>
            {/* /.fancy-feature-fiftyOne */}

            {/* 
			=============================================
				Feature Section Thirty Seven
			============================================== 
			*/}
            <div className='fancy-feature-thirtySeven mt-225 lg-mt-120'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-lg-6'>
                            <div
                                className='block-style-four pe-xxl-5 me-xxl-4 md-mb-70'
                                data-aos='fade-right'
                            >
                                <div className='title-style-six'>
                                    <div className='sc-title-two text-uppercase'>WHY US</div>
                                    <h2 className='main-title fw-500 tx-dark'>
                                        We are unstoppable.
                                    </h2>
                                </div>
                                {/* /.title-style-ten */}
                                <p className='fs-20 pt-20 pb-30 lg-pt-10 lg-pb-20'>
                                    We are technology agnostics, we tailor the technology as per your needs, and build a software that makes
                                    your business bloom!
                                </p>
                                <ul className='style-none list-item'>
                                    {features.map((feature, index) => (
                                        <li key={index}>{feature.text}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        {/* End .col */}

                        <div className='col-xxl-5 col-lg-6 ms-auto'>
                            <Block />
                        </div>
                        {/* End .col */}
                    </div>
                </div>
                {/* /.container */}
            </div>

        </>
    );
}
Services.getLayout = function getLayout(page: React.ReactElement) {
    return <PagesLayout seoTitle={seoTitle}>{page}</PagesLayout>;
};

export default Services;
