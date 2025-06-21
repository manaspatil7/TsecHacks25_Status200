import React from "react";
import "./WorkExperience.css";

const WorkExperience = () => {
    const experiences = [
        
        
        {
            role: "Strategic Business Consultant",
            company: "M/s Delta PD Pumps Pvt. Ltd. – Mumbai, India",
            duration: "Feb 2025 - Present",
            description:
                "AS seasoned Strategic Business Consultant with over many years of experience leading business transformation and sustainable growth across diverse industries. Specializing in enabling organizations to scale through integrated solutions encompassing digital marketing, social media engagement, global market expansion, and operational optimization. Adept at driving profitability through innovative strategies that enhance digital presence, streamline sales processes, and optimize business operations via ERP implementation and process reengineering. My consulting expertise lies in uncovering untapped market segments, developing multi-channel distribution models, and unlocking export potential to fuel topline growth. Currently providing strategic consulting to M/s Delta PD Pumps Pvt. Ltd., helping transform market challenges into significant growth opportunities. Additionally, played a pivotal role in guiding M/s Bhavya Steel in developing their export business in the Middle East & Africa.",
        },
        {
            role: "Business Head",
            company: "HYDAC India Pvt. Ltd. – Mumbai, India A GERMAN MNC",
            duration: "Apr 2024 - Present",
            description:
                "Managed a ₹135 Crore Spares Business with strategic initiatives to achieve ₹200 Crores in sales within two years. Focused on profitability by driving 20% CapEx sales alongside standard products while reinforcing the channel network through enhanced service capabilities. Implemented result-oriented strategies based on business analysis to optimize growth and operational efficiency.",
        },
        {
            role: "Chief Executive Officer (CEO)",
            company: "Bijur Delimon India Pvt. Ltd. – Pune, India A US MNC",
            duration: "Aug 2013-Apr 2024",
            description:
                "Collaborated with directors, customers, and suppliers to ensure seamless operations and strengthen business relationships. Provided strategic guidance to drive growth, resulting in a 15% YOY (average) annual revenue increase and gaining 18% market share over 10 years. Oversaw commercial, technical, and organizational matters while maintaining operating profits above 10%. Led negotiations and expanded into new markets, enhancing growth and market presence.",
        },
        {
            role: "Chief Executive Officer (CEO)",
            company: "M/s SSJ systems Pvt. Ltd. Mumbai",
            duration: "June 11- Aug 13",
            description:
                "Spearheaded strategic planning and executed initiatives that expanded market presence, acquiring 150 new clients in two years and boosting revenue generation. Formulated and managed budgets to optimize resource allocation and financial performance, while prioritizing client value and satisfaction. Implemented cost reduction strategies, enhancing product and service quality to maximize profitability, resulting in a 23% increase in profits through improved realization.",
        },
        {
            role: "National Head(Sales & Marketing)",
            company: "Sezal Glass ltd. Mumbai",
            duration: "Apr 07 – June 11",
            description:
                "Spearheaded all India sales operations, surpassing sales targets and achieving an average profitability of 27%, with a 68% increase in sales. Established and executed sales strategies, fostering strong customer relationships and leading a dedicated team to drive growth. Managed cash flow by overseeing payment inflows, monitoring debtors, and implementing credit limits to minimize financial risks. Expanded business segments, formed strategic alliances with global players, and developed a dealer strategy that included promotional schemes and strong relationships with architects, consultants, and government authorities. Led brand-building initiatives for Sezal décor products, resulting in 95% positive feedback from dealers during a nationwide rollout.",
        },
    ];

    return (
        <section id="work-experience" className="sectionClass">
            <div className="row">
                <div className="sectiontitle">
                    <h2>Work Experience</h2>
                    <div className="headerLine"></div>
                </div>
                <ul className="cbp_tmtimeline">
                    {experiences.map((exp, index) => (
                        <li key={index}>
                            <div className="cbp_tmicon">
                                <img src="https://w7.pngwing.com/pngs/830/456/png-transparent-circle-color-gradient-3d-icon-thumbnail.png" alt="Icon" />
                            </div>
                            <div className="cbp_tmlabel">
                                <h3>{exp.role}</h3>
                                <h4>{exp.company}</h4>
                                <span className="date">{exp.duration}</span>
                                <p>{exp.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default WorkExperience;
