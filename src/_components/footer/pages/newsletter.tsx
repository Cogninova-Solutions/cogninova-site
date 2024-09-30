export function NewsLetter() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // prevent default form submission behavior
        // handle form submission logic
    };

    return (
        <form onClick={handleSubmit} className="position-relative">
            <input type="email" placeholder="Enter your email" required />
            <button className="tran3s fw-500 position-absolute">Sign Up</button>
        </form>
    );
};
