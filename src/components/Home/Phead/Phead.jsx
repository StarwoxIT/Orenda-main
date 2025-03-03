import React from 'react'
import './Phead.css'
import { NavLink } from 'react-router-dom'

const Phead = () => {
  return (
    <div className="phead-container">
        <div className="phead-wrapper">
            <h1>Meet Our Providers</h1>
            <div className="phead-button">
              <NavLink to="/our-team/1"><button>See all providers</button></NavLink>
            </div>
        </div>
    </div>
  )
}

export default Phead