import React, { useRef } from "react";
import emailjs from "emailjs-com";

export default function ContactMe() {
    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_rvhc5li", // Replace with your EmailJS service ID
                "template_p8cr8wu", // Replace with your EmailJS template ID
                formRef.current,
                "ApIExqW2k09Bf1Gbi" // Replace with your Public Key
            )
            .then(
                (result) => {
                    formRef.current.reset();
                },
                (error) => {
                    alert("Failed to send the message. Please try again later.");
                }
            );
    };

    return (
        <section id="Contact" className="contact--section">
            <div>
                <h2>Contact Me</h2>
            </div>
            <form
                ref={formRef}
                className="contact--form--container"
                onSubmit={sendEmail}
            >
                <div className="container">
                    <label htmlFor="first-name" className="contact--label">
                        <span className="text-md">First Name</span>
                        <input
                            type="text"
                            className="contact--input text-md"
                            name="first_name"
                            id="first-name"
                            required
                        />
                    </label>
                    <label htmlFor="last-name" className="contact--label">
                        <span className="text-md">Last Name</span>
                        <input
                            type="text"
                            className="contact--input text-md"
                            name="last_name"
                            id="last-name"
                            required
                        />
                    </label>
                    <label htmlFor="email" className="contact--label">
                        <span className="text-md">Email</span>
                        <input
                            type="email"
                            className="contact--input text-md"
                            name="email"
                            id="email"
                            required
                        />
                    </label>
                    <label htmlFor="phone-number" className="contact--label">
                        <span className="text-md">Phone Number</span>
                        <input
                            type="tel"
                            className="contact--input text-md"
                            name="phone_number"
                            id="phone-number"
                            pattern="^\d{10,15}$"
                            required
                        />
                    </label>
                </div>
                <label htmlFor="choose-topic" className="contact--label">
                    <span className="text-md">Choose a Topic</span>
                    <select
                        id="choose-topic"
                        name="topic"
                        className="contact--input text-md"
                        required
                    >
                        <option value="">Select One...</option>
                        <option value="Query">Query</option>
                        <option value="Collaboration">Collaboration</option>
                        <option value="Other">Other</option>
                    </select>
                </label>
                <label htmlFor="message" className="contact--label">
                    <span className="text-md">Message</span>
                    <textarea
                        className="contact--input text-md"
                        name="message"
                        id="message"
                        rows="8"
                        placeholder="Type your message..."
                        required
                    />
                </label>
                <div>
                    <button type="submit" className="btn btn-primary contact--form--btn">
                        Submit
                    </button>
                </div>
            </form>
        </section>
    );
}