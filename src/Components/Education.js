import React from 'react'
import './css/edu.css'


function Education() {
    return (
        <div>
            <div className="top">
            <h1>Educational Details</h1>
            </div>
            
            <div className="edu">
            
            <table className="detail">
                
                <tr>
                    <th className="td"><label>University/Board</label></th>
                    <th className="td"><label>School/College</label></th>
                    <th className="td"><label>Percentage</label></th>
                </tr>
                <tr>
                    <td className="td">HSLC(10th)</td>
                    <td className="td">B.H.S.E.M</td>
                    <td className="td">84.4%</td>
                </tr>
                <tr>
                    <td className="td">H.S(12th)</td>
                    <td className="td">Bgr H.S School</td>
                    <td className="td">77.7%</td>
                </tr>
                <tr>
                    <td className="td">Graduation(B.E)</td>
                    <td className="td">GCE</td>
                    <td className="td"> parsuing 7.2 sgpa</td>
                </tr>
            </table>

            </div>
        </div>
    )
}

export default Education
