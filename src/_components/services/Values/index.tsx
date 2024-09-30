
const services = [
    {
        iconSrc: "images/icon/people.png",
        title: "People",
        delay: "100",
    },
    {
        iconSrc: "/images/icon/innovation.png",
        title: "Innovation",
        delay: "200",
    },
    {
        iconSrc: "/images/icon/client.png",
        title: "Client",
        delay: "300",
    },
    {
        iconSrc: "/images/icon/agility.png",
        title: "Agility",
        delay: "400",
    }
];

export function Values() {
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
