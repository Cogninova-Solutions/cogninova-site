
const features = [
    {
        iconSrc: "images/icon/security.png",
        title: "Patient Security",
        delay: "100",
    },
    {
        iconSrc: "/images/icon/AI.png",
        title: "AI Powered",
        delay: "200",
    },
    {
        iconSrc: "/images/icon/analytics.png",
        title: "Advanced Analytics",
        delay: "300",
    },
    {
        iconSrc: "/images/icon/emr.png",
        title: "EMR Agnostic",
        delay: "400",
    },
    {
        iconSrc: "/images/icon/ui.png",
        title: "Simple Interface",
        delay: "400",
    },
    {
        iconSrc: "/images/icon/updates.png",
        title: "Constant Updates",
        delay: "400",
    }
];

export function Medlinkfeatures() {
    return (
        <>
            {features.map((features, index) => (
                <div
                    className="col-lg-4 col-sm-6"
                    data-aos="fade-up"
                    data-aos-delay={features.delay}
                    key={index}
                >
                    <div className="card-style-sixteen tran3s text-center position-relative mt-40">
                        <div className="icon">
                            <img
                                src={features.iconSrc}
                                alt="icon"
                                className="lazy-img m-auto"
                            />
                        </div>
                        <br /><br />
                        <h4 className="tx-dark">{features.title}</h4>
                    </div>
                </div>
            ))}
        </>
    );
};
