import React from 'react'
import './css/profile.css'

function Profile() {
    return (
        <div>
            <div className="profile">
            <table className="person">
                <tr><td colSpan="2px"><h1>Personal Details</h1></td></tr>
                <tr>
                    <td className="td"><label>Name:</label></td>
                    <td>Alauddin Ahmed</td>
                </tr>
                <tr>
                    <td className="td"><label>Gender:</label></td>
                    <td>Male</td>
                </tr>
                <tr>
                    <td className="td"><label>Phone Number:</label></td>
                    <td>9611270985</td>
                </tr>
                <tr>
                    <td className="td"><label>Alternative Phone Number:</label></td>
                    <td>8660928768</td>
                </tr>
                <tr>
                    <td className="td"><label>Email:</label></td>
                    <td className="email">alen.maxx17@gmail.com</td>
                </tr>
            </table>

            </div>
        </div>
    )
}

export default Profile
