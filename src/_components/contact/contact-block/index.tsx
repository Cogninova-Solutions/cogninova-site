export function ContactBlock() {
    const addressBlocks = [
        {
            icon: "/images/icon/icon_147.svg",
            title: "Our Address",
            content: "SFFO0845 Compass Building, Al Shohada Road, Al Hamra Industrial Zone-FZ, Ras Al Khaimah, UAE",
            delay: "100",
        },
        {
            icon: "/images/icon/icon_148.svg",
            title: "Contact Info",
            content: "Drop us an email at",
            link: "info@cogninovasolutions.com",
            delay: "200",
        }
    ];

    return (
        <>
            {addressBlocks.map((block, index) => (
                <div
                    className="col-md-4"
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={block.delay}
                >
                    <div className="address-block-two text-center mb-40">
                        <div className="icon rounded-circle d-flex align-items-center justify-content-center m-auto">
                            <img src={block.icon} alt="icon" />
                        </div>
                        <h5 className="title">{block.title}</h5>
                        <p>
                            {block.content} <br />
                            {block.link && (
                                <a
                                    href={block.link}
                                    className={
                                        block.link.includes("tel:") ? "call" : "webaddress"
                                    }
                                >
                                    {block.link.replace("tel:", "")}
                                </a>
                            )}
                        </p>
                    </div>
                </div>
            ))}
        </>
    );
};
