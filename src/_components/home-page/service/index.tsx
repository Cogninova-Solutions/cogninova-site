
const services = [
    {
        icon: "images/icon/process_automation.png",
        title: "Business Process Automation",
        delayAnim: 0,
    },
    {
        icon: "images/icon/Mobile.png",
        title: "Mobile Apps Development",
        delayAnim: 100,
    },
    {
        icon: "images/icon/software.png",
        title: "Custom Solution Development",
        delayAnim: 200,
    }
];

export function Service() {
    return (
        <>
            {services.map((service, index) => (
                <div
                    className="col-xl-3 col-sm-6"
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={service.delayAnim}
                >
                    <div className="card-style-sixteen tran3s text-center position-relative mt-30">
                        <div className="icon">
                            <img src={service.icon} alt="" className="lazy-img m-auto" />
                        </div>
                        <br /><br />
                        <h4 className="tx-dark">{service.title}</h4>
                    </div>{" "}
                    {/* /.card-style-sixteen */}
                </div>
            ))}
        </>
    );
};
