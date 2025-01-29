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
                    <h1>Seasoned Business Head</h1>
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
                            Visionary leader with proven expertise in driving business growth, operational excellence, and strategic initiatives. 
                            Skilled in relationship management, innovative marketing strategies, and financial acumen to lead organizations towards sustained success.
                        </p>
                    </div>
                    <div className="button-container">
                        <a href="/contact" className="cta-button">Get In Touch</a>
                        <a href="https://drive.google.com/file/d/18lemhpHLXjf78SaPB_0w0nnS4JezlrLS/view" target="_blank" className="cta-button resume-button">View Resume</a>
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
