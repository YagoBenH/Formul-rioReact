import React from 'react';
import PropTypes from 'prop-types';

import {
    BsFillEmojiHeartEyesFill,
    BsFillEmojiSmileFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiFrownFill,
} from 'react-icons/bs';
import './Thanks.css';

const emojiData = {
    unsatisfied: <BsFillEmojiFrownFill />,
    neutral: <BsFillEmojiNeutralFill />,
    satisfied: <BsFillEmojiSmileFill />,
    very_satisfied: <BsFillEmojiHeartEyesFill />,
};

export const Thanks = ({ data }) => {
    return (
        <div className="thanks-container">
            <h2>Falta pouco...</h2>
            <p>
                A sua opnião e muito importando, em breve você receberá um cupom
                de 10% de desconto para a sua próxima compra.{' '}
            </p>
            <p>
                Para concluir sua avaliação clique no botão de Enviar
                abaixo.{' '}
            </p>
            <h3>Aqui esta o resumo da sua avaliação {data.name}:</h3>
            <p className="review-data">
                <span>Satisfação com o produto:</span>
                {emojiData[data.preview]}
            </p>
            <p className="review-data">
                <span>Comentário:</span>
                {data.comment}
            </p>
        </div>
    );
};
Thanks.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        preview: PropTypes.string.isRequired,
        comment: PropTypes.string,
    }).isRequired,
};

export default Thanks;
