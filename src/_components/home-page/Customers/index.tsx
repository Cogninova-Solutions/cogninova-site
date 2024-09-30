
const customer = [
    {
        icon: "images/logo/kch.png",
        delayAnim: 0,
    }
];

export function Customers() {
    return (
        <>
            {customer.map((service, index) => (
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
                    </div>{" "}
                    {/* /.card-style-sixteen */}
                </div>
            ))}
        </>
    );
};
