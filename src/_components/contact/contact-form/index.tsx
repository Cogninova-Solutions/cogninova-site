export function ContactForm() {
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle form submission
    };

    return (
        <div className="form-style-one" data-aos="fade-up">
            <form onSubmit={handleSubmit}>
                <div className="messages" />
                <div className="row controls">
                    <div className="col-12">
                        <div className="input-group-meta form-group mb-30">
                            <input
                                type="text"
                                placeholder="Your Name*"
                                name="name"
                                required={true}
                                data-error="Name is required."
                            />
                            <div className="help-block with-errors" />
                        </div>
                    </div>
                    {/* End .col-12 */}

                    <div className="col-12">
                        <div className="input-group-meta form-group mb-50">
                            <input
                                type="email"
                                placeholder="Email Address*"
                                name="email"
                                required={true}
                                data-error="Valid email is required."
                            />
                            <div className="help-block with-errors" />
                        </div>
                    </div>
                    {/* End .col-12 */}

                    <div className="col-12">
                        <div className="input-group-meta form-group mb-30">
                            <textarea
                                placeholder="Your message*"
                                name="message"
                                required={true}
                                data-error="Please,leave us a message."
                                defaultValue={""}
                            />
                            <div className="help-block with-errors" />
                        </div>
                    </div>
                    {/* End .col-12 */}

                    <div className="col-12">
                        <button className="btn-twentyOne fw-500 tran3s d-block">
                            Send Message
                        </button>
                    </div>
                    {/* End .col-12 */}
                </div>
                {/* End .row */}
            </form>
        </div>
    );
}
