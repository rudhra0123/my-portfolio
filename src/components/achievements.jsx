import React from "react";
import { motion } from "framer-motion";
import "./achivemenst.css";  
import Particle from "./Particle";

const achievementsData = [
    { id: 1, title: "Java", issuer: "IT Specialist" },
    { id: 2, title: "C++", issuer: "IT Specialist" },
    { id: 3, title: "Red-Hat System administrator", issuer: "Red-Hat" },
    { id: 4, title: "IoT & cloud computing", issuer: "Nptel" }
];

const educationData = [
    { id: 1, degree: "B.Tech in CSE", institution: "Aditya University", year: "2022 - Present", percentage: "80%" },
    { id: 2, degree: "Intermediate (MPC)", institution: "Sri Chaitanya College", year: "2020 - 2022", percentage: "94.7%" },
    { id: 3, degree: "SSC", institution: "Sri Chaitanya School", year: "2020", percentage: "98%" }
];

export default function Achievements() {
    return (
        <div className="achievements-container">
            <Particle/>
            {/* Background Animation */}
            <div className="animated-bg"></div>

            {/* Certifications Section */}
            <h2 className="title">CERTIFICATIONS</h2>
            <div className="timeline">
                <div className="middle-line top-line"></div> {/* Top half of the line */}

                {achievementsData.map((achievement, index) => (
                    <motion.div
                        key={achievement.id}
                        className={`achievement-card ${index % 2 === 0 ? "left" : "right"}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.3 }}
                    >
                        <div className="content">
                            <h3>{achievement.title}</h3>
                            <p>{achievement.issuer}</p>
                            <button className="download-btn">Download</button>
                        </div>
                        <motion.div
                            className={`line-connector ${index % 2 === 0 ? "left-connector" : "right-connector"}`}
                            initial={{ width: 0 }}
                            animate={{ width: 50 }}
                            transition={{ duration: 0.5, delay: index * 0.3 + 0.2 }}
                        ></motion.div>
                    </motion.div>
                ))}

                {/* Break the Middle Line Here */}
                <motion.h2
                    className="title education-heading"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: achievementsData.length * 0.3 }}
                >
                    EDUCATION
                </motion.h2>
                

                <div className="middle-line bottom-line"></div> {/* Bottom half of the line */}

                {/* Education Details */}
                {educationData.map((education, index) => (
                    <motion.div
                        key={education.id}
                        className={`achievement-card education-card ${index % 2 === 0 ? "left" : "right"}`}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: (achievementsData.length + index) * 0.3 }}
                    >
                        <div className="content">
                            <h3>{education.degree}</h3>
                            <p>{education.institution}</p>
                            <p>{education.year}</p>
                            <p><strong>Percentage:</strong> {education.percentage}</p>
                        </div>
                        <motion.div
                            className={`line-connector ${index % 2 === 0 ? "left-connector" : "right-connector"}`}
                            initial={{ width: 0 }}
                            animate={{ width: 50 }}
                            transition={{ duration: 0.5, delay: (achievementsData.length + index) * 0.3 + 0.2 }}
                        ></motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
