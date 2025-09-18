import React from 'react';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { FiSend } from 'react-icons/fi';
import { UserForm } from './Components/UserForm';
import { PreviewForm } from './Components/PreviewForm';
import { Thanks } from './Components/Thanks';
import Steps from './Components/Steps';

import { useForm } from './Hooks/userForm';
import { useState } from 'react';

import './App.css';

const formTemplate = {
    name: '',
    email: '',
    preview: '',
    comment: '',
};

function App() {
    const [data, setData] = useState(formTemplate);

    const updateFieldHandler = (key, value) => {
        setData((prev) => {
            return { ...prev, [key]: value };
        });
    };

    const formComponents = [
        <UserForm
            data={data}
            updateFieldHandler={updateFieldHandler}
            key="userForm"
        />,
        <PreviewForm
            data={data}
            updateFieldHandler={updateFieldHandler}
            key="previewForm"
        />,
        <Thanks data={data} key="thanks" />,
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
                <Steps currentStep={currentStep} />
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
