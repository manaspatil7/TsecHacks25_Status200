import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase"; // Import Firestore instance
import emailjs from "emailjs-com"; // Import EmailJS
import "./ContactUs.css"; // Import the updated CSS

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        try {
            // Save message to Firestore
            await addDoc(collection(db, "messages"), {
                ...formData,
                timestamp: new Date(), // Add timestamp field
            });

            // Send email confirmation via EmailJS
            await emailjs.send(
                "service_ql2749c", // Replace with your EmailJS service ID
                "template_582bgws", // Replace with your EmailJS template ID
                {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                },
                "ZfggM7dLwou1E58DH" // Replace with your EmailJS user ID
            );

            setIsSubmitted(true); // Set submission success state
            setError(""); // Clear any previous error
        } catch (err) {
            setError("An error occurred. Please try again."); // Set error message
            console.error("Error saving message or sending email: ", err);
        }
    };

    if (isSubmitted) {
        return (
            <div className="success-container">
    <div className="success-box">
        <h2>Thank you for reaching out!</h2>
        <p>We have received your message and will get back to you within 2-3 business days.</p>
    </div>
</div>

        );
    }

    return (
        <div className="contact-container">
            <h1 className="contact-header">Contact Us</h1>
            <p className="contact-description">
                We'd love to hear from you! Please fill out the form below, and we'll get back to you as soon as possible.
            </p>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                {error && <p className="error">{error}</p>}
                <button type="submit" className="cta-button">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Contact;
