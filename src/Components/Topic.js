import React from "react";
import "./css/topic.css";
import {Link } from "react-router-dom";
function Topic() {
  return (
    <div>
    <div className="topic">
      <Link to="/"><p id="link">Profile</p></Link>
       <Link to="/edu"><p id="link">Education</p></Link>
       <Link to="/skill"><p id="link">Skills</p></Link>
       <Link to="/work"><p id="link">Work</p></Link>
      </div>     
    </div>
  );
}

export default Topic;
