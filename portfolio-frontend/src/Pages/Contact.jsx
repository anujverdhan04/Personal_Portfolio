import React, { useState } from 'react';
import "../Styles/Contact.css";
import BBG from "../assets/BBG.jpg";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        reason: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
        setFormData({
            name: '',
            email: '',
            reason: '',
            message: ''
        });
        alert('Your message has been sent!');
    };

    return (
        <div className="contact-page">
            <h2 style={{ color: "#6d7b8d", textAlign: 'left' }}>Contact Me</h2>
            <div className="contact-container">
                <div className="contact-form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name" style={{ color: '#FFD700' }}>Name:</label>
                            <input type="text" id="name" name="name" required onChange={handleChange} value={formData.name} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" style={{ color: '#FFD700' }}>Email:</label>
                            <input type="email" id="email" name="email" required onChange={handleChange} value={formData.email} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="reason" style={{ color: '#FFD700' }}>Reason for Contact:</label>
                            <select id="reason" name="reason" required onChange={handleChange} value={formData.reason}>
                                <option value="">Select a reason</option>
                                <option value="inquiry">General Inquiry</option>
                                <option value="collaboration">Collaboration</option>
                                <option value="feedback">Feedback</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message" style={{ color: '#FFD700' }}>Message:</label>
                            <textarea id="message" name="message" rows="4" required onChange={handleChange} value={formData.message}></textarea>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
            <div className="contact-details">
                <div className="contact-box">
                    <div className="contact-item">
                        <h3 style={{ color: '#FFD700' }}>Email</h3>
                        <p>You can reach me at:</p>
                        <a href="mailto:anujverdhan049@gmail.com" className="contact-link">anujverdhan049@gmail.com</a>
                    </div>
                    <div className="contact-item">
                        <h3 style={{ color: '#FFD700' }}>LinkedIn</h3>
                        <p>Connect with me on LinkedIn:</p>
                        <a href="https://www.linkedin.com/in/anuj-verdhan-963b311a4/" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn Profile</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
