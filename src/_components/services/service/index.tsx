
const services = [
    {
        iconSrc: "images/icon/process_automation.png",
        title: "Business Process Automation",
        delay: "100",
    },
    {
        iconSrc: "/images/icon/Mobile.png",
        title: "Mobile Development",
        delay: "200",
    },
    {
        iconSrc: "/images/icon/software.png",
        title: "Custom Solution Development",
        delay: "300",
    }
];

export function Service() {
    return (
        <>
            {services.map((service, index) => (
                <div
                    className="col-lg-4 col-sm-6"
                    data-aos="fade-up"
                    data-aos-delay={service.delay}
                    key={index}
                >
                    <div className="card-style-sixteen tran3s text-center position-relative mt-40">
                        <div className="icon">
                            <img
                                src={service.iconSrc}
                                alt="icon"
                                className="lazy-img m-auto"
                            />
                        </div>
                        <br /><br />
                        <h4 className="tx-dark">{service.title}</h4>
                    </div>
                </div>
            ))}
        </>
    );
};
