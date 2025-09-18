import React from 'react';
import PropTypes from 'prop-types';
import './Steps.css';
import { AiOutlineUser, AiOutlineStar } from 'react-icons/ai';
import { FiSend } from 'react-icons/fi';

const Steps = ({ currentStep }) => {
    return (
        <div className="steps">
            <div className="step active">
                <AiOutlineUser />
                <p>Identificação</p>
            </div>
            <div className={`step ${currentStep >= 1 ? 'active' : ''}`}>
                <AiOutlineStar />
                <p>Avaliação</p>
            </div>
            <div className={`step ${currentStep >= 2 ? 'active' : ''}`}>
                <FiSend />
                <p>Envio</p>
            </div>
        </div>
    );
};
Steps.propTypes = {
    currentStep: PropTypes.number.isRequired,
};

export default Steps;
