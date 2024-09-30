import Link from 'next/link'
import { FooterBody } from './footer-body';
import { CopyrightFooter } from './copyright-footer';

export function PagesFooter() {
    return (
        <div className="footer-style-eleven theme-basic-footer position-relative">
            <div className="bg-wrapper position-relative">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xl-2 footer-intro mb-40">
                            <div className="logo">
                                <Link href="/">
                                    <img src="/images/logo/Cogninova_logo.png" alt="brand" />
                                </Link>
                            </div>
                            <p className="text-dark opacity-50 fs-15 m0 d-none d-lg-block">
                                    © {new Date().getFullYear()} - {new Date().getFullYear() + 1}{" "}
                                    Cogninova Solutions.
                            </p>
                        </div>
                        {/* End .col */}

                        <FooterBody />

                        {/* End .col-xl-4 */}
                    </div>
                    {/* End .row */}
                </div>
                {/* /.container */}
            </div>
            {/* /.bg-wrapper */}
            <CopyrightFooter />
        </div>
    );
};
