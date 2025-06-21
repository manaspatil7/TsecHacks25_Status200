import React from 'react';
import Typewriter from 'typewriter-effect';
import './Home.css';
import profilePic from '../assets/profile-pic.jpg';

const Home = () => {
    return (
        <div className="home">
            <div className="content-container">
                <div className="profile-section">
                    <img src={profilePic} alt="Profile" className="profile-pic" />
                </div>

                <div className="text-section">
                    <h1>Strategic Business Counsultant</h1>
                    <div className="typing-effect">
                        <Typewriter
                            options={{
                                strings: [
                                    "Driving Growth.",
                                    "Transforming Businesses.",
                                    "Driving Innovation.",
                                    "Empowering Teams."
                                ],
                                autoStart: true,
                                loop: true,
                                delay: 75,
                                deleteSpeed: 50,
                            }}
                        />
                    </div>
                    <div className="floating-paragraph">
                        <p>
                            Visionary business consultant with over three decades of leadership experience in driving strategic transformation, operational excellence, and international expansion.
                            Renowned for crafting high-impact growth strategies, Nitin S. Patil blends deep expertise in digital transformation, export development, and ERP implementation to elevate organizational performance. Adept in market diversification, channel development, and sales optimization, he partners with businesses to unlock profitability, streamline operations, and navigate complex market dynamics with clarity and purpose.
                        </p>
                    </div>
                    <div className="button-container">
                        <a href="/contact" className="cta-button">Get In Touch</a>
                        <a href="https://drive.google.com/file/d/1VKPwQdeOntnvG_-DFGm98YkcHnTCccF8/view" target="_blank" rel="noreferrer" className="cta-button resume-button">View Resume</a>
                        <a href="/work-experience" className="cta-button work-experience-button">Work Experience</a> {/* New Work Experience button */}
                    </div>
                    {/* New Email and Phone container */}
                    <div className="contact-info-container">
                        <p><strong>Email:</strong> <a href="mailto:patiln0702@gmail.com">patiln0702@gmail.com</a></p>
                        <p><strong>Phone:</strong> <a href="tel:+91 9967281551">+91 9967281551</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
