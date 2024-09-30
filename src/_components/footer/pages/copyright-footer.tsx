import Link from 'next/link'
import PropTypes from "prop-types";
const links = [
    {
        title: "Contact Us",
        href: "/contact",
    },
];

const icons = [

    {
        icon: "fab fa-linkedin-in",
        href: "https://www.linkedin.com/company/cogninova-solutions",
    }
];

const LinkItem = ({ title, href }: { title: string, href: string }) => {
    return (
        <li>
            <Link href={href}>{title}</Link>
        </li>
    );
};

LinkItem.propTypes = {
    title: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
};
const IconItem = ({ icon, href }: { icon: string, href: string }) => {
    return (
        <li>
            <Link href={href} target="_blank" rel="noopener noreferrer">
                <i className={icon} />
            </Link>
        </li>
    );
};

IconItem.propTypes = {
    icon: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
};

export function CopyrightFooter() {
    return (
        <div className="bottom-footer lg-pb-20 position-relative">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 order-lg-0 mt-15">
                        <ul className="d-flex justify-content-center justify-content-lg-start footer-nav style-none">
                            {links.map((link, index) => (
                                <LinkItem key={index} title={link.title} href={link.href} />
                            ))}
                        </ul>
                    </div>
                    <div className="col-lg-4 order-lg-2 mt-15">
                        <ul className="d-flex justify-content-center justify-content-lg-end social-icon style-none">
                            {icons.map((icon, index) => (
                                <IconItem key={index} icon={icon.icon} href={icon.href} />
                            ))}
                        </ul>
                    </div>
                    <div className="col-lg-4 order-lg-1 mt-15">
                        <p className="copyright text-center m0">
                            Copyright © {new Date().getFullYear()}{" "}
                            Cogninova Solutionss
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
