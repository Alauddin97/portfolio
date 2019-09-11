import React from "react";
import "./css/topic.css";
import { BrowserRouter, Route,Link } from "react-router-dom";
function Topic() {
  return (
    <div>
    <div className="topic">
      <Link to="/"><p id="link">Profile</p></Link>
       <Link to="/edu"><p id="link">Education</p></Link>
       <Link to="/skill"><p id="link">Skills</p></Link>
       <Link to="/hobby"><p id="link">Hobbies</p></Link>
      </div>     
    </div>
  );
}

export default Topic;
