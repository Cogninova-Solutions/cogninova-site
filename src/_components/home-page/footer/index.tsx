const links = [
    {
        id: 1,
        title: "Links",
        column: "col-lg-2 col-md-3 col-sm-6 mb-30",
        items: [
            { label: "Home", href: "/" },
            { label: "About", href: "/about-us" },
            { label: "Our Services", href: "/services" },
            { label: "Contact us", href: "/contact-us" }
        ],
    },
    {
        id: 2,
        title: "Our Services",
        column: "col-lg-3 col-md-4 col-sm-6 mb-30",
        items: [
            { label: "Business Process Automation", href: "/services"},
            { label: "Mobile Development", href: "/services"},
            { label: "Custom Solution Development", href: "/services"}
        ],
    },
];

const socialIcons = [
    {
        iconClass: "fab fa-linkedin-in",
        link: "https://www.linkedin.com/company/cogninova-solutions",
    },
];

export function Footer() {
    return (
        <>
            {links.map((link) => (
                <div className={link.column} key={link.id}>
                    <h5 className="footer-title text-white fw-500">{link.title}</h5>
                    <ul className="footer-nav-link style-none">
                        {link.items.map((item, i) => (
                            <li key={i}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}

            <div className="col-xl-3 col-lg-4 col-md-5 mb-30">
                <h5 className="footer-title text-white fw-500">Address</h5>
                <p className="text-white opacity-75 mb-35">
                SFFO0845 Compass Building, Al Shohada Road, Al Hamra Industrial Zone-FZ, Ras Al Khaimah, UAE
                </p>
                <ul className="d-flex social-icon style-none">
                    {socialIcons.map((icon, index) => (
                        <li key={index}>
                            <a href={icon.link} target="_blank" rel="noopener noreferrer">
                                <i className={icon.iconClass} />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
