import React from 'react'
import './css/header.css'
import profile from './image/profile.jpg'

function Header() {
    return (
        <div className="header">
            <div>
                <img src={profile} alt="no image" className="img"/>               
            </div>
            <div id="name">
                <b className="my">Alauddin Ahmed</b><br/>
                <b>Computer Science Engineer</b>
            </div>
        </div>
    )
}

export default Header
