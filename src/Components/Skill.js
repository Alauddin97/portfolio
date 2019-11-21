import React from "react";
import "./css/skill.css";
import skill from "./image/skill.jpg";

function Skill() {
  return (
    <div>
      <div className="head">
        <h1>SKILLS</h1>
      </div>
      <div >
        <img className="skill" src={skill} alt="error" />
      </div>
    </div>
  );
}

export default Skill;
