import React from 'react';
import PropTypes from 'prop-types';
import {
    BsFillEmojiHeartEyesFill,
    BsFillEmojiSmileFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiFrownFill,
} from 'react-icons/bs';

import './PreviewForm.css';

export const PreviewForm = ({ data, updateFieldHandler }) => {
    return (
        <div className="preview-form">
            <div className="form-control  score-container">
                <label className="radio-container">
                    <input
                        type="radio"
                        value="unsatisfied"
                        name="preview"
                        required
                        checked={data.preview === 'unsatisfied'}
                        onChange={(e) =>
                            updateFieldHandler('preview', e.target.value)
                        }
                    />
                    <BsFillEmojiFrownFill />
                    <p>Insatisfeito</p>
                </label>
                <label className="radio-container">
                    <input
                        type="radio"
                        value="neutral"
                        name="preview"
                        required
                        checked={data.preview === 'neutral'}
                        onChange={(e) =>
                            updateFieldHandler('preview', e.target.value)
                        }
                    />
                    <BsFillEmojiNeutralFill />
                    <p>Poderia ser melhor</p>
                </label>
                <label className="radio-container">
                    <input
                        type="radio"
                        value="satisfied"
                        name="preview"
                        required
                        checked={data.preview === 'satisfied'}
                        onChange={(e) =>
                            updateFieldHandler('preview', e.target.value)
                        }
                    />
                    <BsFillEmojiSmileFill />
                    <p>Satisfeito</p>
                </label>
                <label className="radio-container">
                    <input
                        type="radio"
                        value="very_satisfied"
                        name="preview"
                        required
                        checked={data.preview === 'very_satisfied'}
                        onChange={(e) =>
                            updateFieldHandler('preview', e.target.value)
                        }
                    />
                    <BsFillEmojiHeartEyesFill />
                    <p>Muito Satisfeito</p>
                </label>
            </div>
            <div className="form-control">
                <label htmlFor="comment">Comentário:</label>
                <textarea
                    name="comment"
                    id="comment"
                    placeholder="Como foi a sua experiencia com o produto..."
                    required
                    value={data.comment || ''}
                    onChange={(e) =>
                        updateFieldHandler('comment', e.target.value)
                    }
                ></textarea>
            </div>
        </div>
    );
};

PreviewForm.propTypes = {
    data: PropTypes.shape({
        preview: PropTypes.string,
        comment: PropTypes.string,
    }).isRequired,
    updateFieldHandler: PropTypes.func.isRequired,
};

export default PreviewForm;
