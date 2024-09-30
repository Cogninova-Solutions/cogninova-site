const accordionItems = [
    {
        id: 1,
        icon: "/images/icon/icon_107.svg",
        title: "We are passionate.",
        content:
            "We are driven by a passion for innovation and a commitment to empowering businesses across all industries, to achieve new levels of efficiency and success through intelligent software solutions.",
    },
    {
        id: 2,
        icon: "/images/icon/icon_133.svg",
        title: "We are highly skilled",
        content:
            "Our team of highly skilled and experienced professionals, bringing in decades of industries’ exposure, possesses a deep understanding of the evolving technological landscape and the unique challenges faced by businesses in today's dynamic world.",
    }
];

export function WhyChoose() {
    return (
        <div className="accordion accordion-style-five md-mb-70" id="accordionOne">
            {accordionItems.map((item) => (
                <div className="accordion-item" key={item.id}>
                    <div className="accordion-header" id={`heading${item.id}`}>
                        <button
                            className={`accordion-button ${item.id === 1 ? "" : "collapsed"}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${item.id}`}
                            aria-expanded={item.id === 2 ? "true" : "false"}
                            aria-controls={`collapse${item.id}`}
                        >
                            <img src={item.icon} alt="" className="me-3" /> {item.title}
                        </button>
                    </div>
                    <div
                        id={`collapse${item.id}`}
                        className={`accordion-collapse collapse${item.id === 1 ? " show" : ""
                            }`}
                        aria-labelledby={`heading${item.id}`}
                        data-bs-parent="#accordionOne"
                    >
                        <div className="accordion-body">
                            <p>{item.content}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
