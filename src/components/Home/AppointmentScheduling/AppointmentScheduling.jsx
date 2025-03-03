import React from 'react'
import './AppointmentScheduling.css'
import vector from '../../../assets/Vector.png'


const AppointmentScheduling = ({app_heading, app_tittle1, app_tittle2, app_tittle3}) => {
    return (
        <div className="appointment-container">
            <div className="appointment-wrapper">
                <img src={vector} alt=""/>
                <div className="appointment-main">
                    <h3>{app_heading}</h3>
                    <p>{app_tittle1}

                        <div className="break"></div>
                        
                        {app_tittle2}

                        <div className="break"></div>
                        
                        {app_tittle3}</p>
                </div>
            </div>
        </div>
    )
}

export default AppointmentScheduling