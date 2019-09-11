import React from "react";
import './css/skill.css'

function Skill() {
  return (
    <div>
      <div className="top">
        <h1>Skills And Knowlege</h1>
      </div>

      <div className="edu">
        <table className="skill">
          <tr>
            <th >
              <label>Course</label>
            </th>
            <th >
              <label>Rating</label>
            </th>
          </tr>
          <tr>
            <td >C/C++:</td>
            <td >Average</td>
          </tr>
          <tr>
            <td >HTML:</td>
            <td >Average</td>
          </tr>
          <tr>
            <td >CSS:</td>
            <td >Average</td>
          </tr>
          <tr>
            <td >React:</td>
            <td >Basic</td>
          </tr>
          <tr>
            <td >Java:</td>
            <td >Basic</td>
          </tr>
          <tr>
            <td >JavaScript</td>
            <td >Basic</td>
          </tr>
          <tr>
            <td >Python</td>
            <td >Basic</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Skill;
