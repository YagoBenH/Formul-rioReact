import React from 'react';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { FiSend } from 'react-icons/fi';
import { UserForm } from './Components/UserForm';
import { PreviewForm } from './Components/PreviewForm';
import { Thanks } from './Components/Thanks';

import { useForm } from './Hooks/userForm';

import './App.css';

function App() {
    const formComponents = [
        <UserForm key="userForm" />,
        <PreviewForm key="previewForm" />,
        <Thanks key="thanks" />,
    ];

    const {
        currentStep,
        currentComponent,
        changeStep,
        isLastStep,
        isFirstStep,
    } = useForm(formComponents);

    return (
        <div>
            <div className="header">
                <h2>Deixe sua avaliação</h2>
                <p>
                    Ficamos felizes com sua compra, ultilize o formulário abaixo
                    para avaliar o produto.
                </p>
            </div>
            <div className="form-container">
                <p>Etapas</p>
                <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
                    <div className="inputs-container">{currentComponent}</div>
                    <div className="actions">
                        {!isFirstStep && (
                            <button
                                type="button"
                                onClick={(e) => changeStep(currentStep - 1, e)}
                            >
                                <GrFormPrevious />
                                <span>Voltar</span>
                            </button>
                        )}
                        {!isLastStep ? (
                            <button type="submit">
                                <span>Avançar</span>
                                <GrFormNext />
                            </button>
                        ) : (
                            <button type="button">
                                <span>Enviar</span>
                                <FiSend />
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default App;
