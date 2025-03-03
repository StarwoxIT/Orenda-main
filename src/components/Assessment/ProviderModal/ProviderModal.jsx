import React from 'react';
import close2 from '../../../assets/close2.png';
import './ProviderModal.css';
import ModalProviders from '../ModalProviders/ModalProviders';
import { NavLink } from 'react-router-dom';

const ProviderModal = ({ onClose, isOpen, assessmentAnswers }) => {
  return (
    <div className={`providermodal-container ${isOpen ? 'open' : ''}`}>
      <div className="providermodal-wrapper">
        <div className="providermodal-flex">
          <img src={close2} alt="close" onClick={onClose} className="close" />
          <div className="providermodal-text">
            <h1>Choose your Provider</h1>
            <p>
              Based on your response, we recommend these providers who are a
              great match for you. You can check their profiles and book a
              meeting with your chosen provider.
            </p>
          </div>
          {/* Filter providers based on assessmentAnswers */}
          <ModalProviders assessmentAnswers={assessmentAnswers} />
          <NavLink to="/our-team/1" className="providermodal-btn-link"><button className="providermodal-btn">See more providers</button></NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProviderModal;
