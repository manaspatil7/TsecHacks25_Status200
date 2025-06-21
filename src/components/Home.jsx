import React from 'react';
import { Link } from 'react-router-dom';
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
                            Visionary business consultant with 30+ years of experience in strategic transformation, operational excellence, and global expansion.
                            Blends expertise in digital transformation, export development, and ERP implementation to drive growth, streamline operations, and navigate complex market dynamics with clarity and impact.
                        </p>
                    </div>
                    <div className="button-container">
                        <Link to="/contact" className="cta-button">Get In Touch</Link>
                        <a href="https://drive.google.com/file/d/1VKPwQdeOntnvG_-DFGm98YkcHnTCccF8/view" target="_blank" rel="noreferrer" className="cta-button resume-button">View Resume</a>
                        <Link to="/work-experience" className="cta-button work-experience-button">Work Experience</Link>
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
