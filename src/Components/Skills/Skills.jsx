import React, { useState } from "react";
import "./Skills.scss";
import html from "../../assets/html.png";
import javascript from "../../assets/javascript.png";
import react from "../../assets/react.png";
import nodeJs from "../../assets/nodejs.png";
import mongoDb from "../../assets/mongo.png";
import sass from "../../assets/sass.png";

function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skills = [
    { src: html, alt: "logo html et css", title: "HTML & CSS", color: "#f16529", percentage: 100 },
    { src: javascript, alt: "javascript logo", title: "JavaScript", color: "#f7df1e", percentage: 80 },
    { src: react, alt: "React JS logo", title: "React JS", color: "#61dafb", percentage: 70 },
    { src: nodeJs, alt: "NodeJS logo", title: "NodeJS", color: "#68a063", percentage: 60 },
    { src: mongoDb, alt: "MongoDB logo", title: "MongoDB", color: "#4db33d", percentage: 80 },
    { src: sass, alt: "Sass logo", title: "Sass", color: "#cc6699", percentage: 100 },
  ];

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
  };

  const closeModal = () => {
    setSelectedSkill(null);
  };

  return (
    <section id="skills">
      <h2 className="skill-title">Mes compétences</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div
            className="skill-element"
            key={index}
            onClick={() => handleSkillClick(skill)}
          >
            <img src={skill.src} alt={skill.alt} className="skill-img" />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedSkill && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <h3>{selectedSkill.title}</h3>
            <svg width="150" height="150">
              <circle
                cx="75"
                cy="75"
                r="60"
                fill="none"
                stroke="#e6e6e6"
                strokeWidth="10"
              />
              <circle
                cx="75"
                cy="75"
                r="60"
                fill="none"
                stroke={selectedSkill.color}
                strokeWidth="10"
                strokeDasharray="377" 
                strokeDashoffset="377"
                style={{
                  animation: `circleAnim 2s forwards`,
                  "--target-offset": 377 - (377 * selectedSkill.percentage) / 100,
                }}
              />
            </svg>
            <p>{selectedSkill.percentage}%</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Skills;
