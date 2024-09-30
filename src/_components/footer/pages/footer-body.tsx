const columns = [
    {
        title: "Links",
        links: [
            { label: "Home", url: "/" },
            { label: "About", url: "/about-us" },
            { label: "Our Services", url: "/services" },
            { label: "Contact Us", url: "/contact-us" }
        ],
    },
    {
        title: "Our Services",
        links: [
            { label: "Business Process Automation", url:"/services" },
            { label: "Mobile Development", url:"/services" },
            { label: "Custom Software Development", url:"/services" }
        ],
    }
];

export function FooterBody() {
    return (
        <>
            {columns.map((column, index) => (
                <div className="col-xl-2 col-lg-3 col-sm-5 mb-30" key={index}>
                    <h5 className="footer-title tx-dark fw-normal">{column.title}</h5>
                    <ul className="footer-nav-link style-none">
                        {column.links.map((link, index) => (
                            <li key={index}>
                                <a href={link.url}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}

            <div className="col-xl-3 col-lg-4 col-md-5 mb-30">
                <h5 className="footer-title tx-dark fw-normal">Address</h5>
                <p className="footer-nav-link style-none">
                SFFO0845 Compass Building, Al Shohada Road, Al Hamra Industrial Zone-FZ, Ras Al Khaimah, UAE
                </p>
            </div>
        </>
    );
};
