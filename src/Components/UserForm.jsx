import React from 'react';
import PropTypes from 'prop-types';

export const UserForm = ({ data, updateFieldHandler }) => {
    return (
        <div>
            <div className="form-control">
                <label htmlFor="name">Nome:</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Digite seu nome"
                    required
                    value={data.name || ''}
                    onChange={(e) => updateFieldHandler('name', e.target.value)}
                />
            </div>
            <div className="form-control">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Digite seu E-mail"
                    required
                />
            </div>
        </div>
    );
};

UserForm.propTypes = {
    data: PropTypes.shape({
        preview: PropTypes.string,
        comment: PropTypes.string,
        name: PropTypes.string,
    }).isRequired,
    updateFieldHandler: PropTypes.func.isRequired,
};

export default UserForm;
