import React from 'react'
import "./Handle.css";
import call from "../../../assets/call.png";

const Handle = () => {
  return (
    <div className="handle-container">
      <div className="handle-wrapper">
      <div className="handle">
            <p>All of our providers are trained and licensed to handle several issues, if you’re not sure, please call to confirm each provider’s specialty.</p>

            <a href="tel:+1(347) 707-7735"><button><img src={call} alt="" className="colored-img"/>Call Now</button></a>
          </div>
      </div>
    </div>
  )
};

export default Handle;
