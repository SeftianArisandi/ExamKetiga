import React, { useState } from 'react';
import FormSelect from './FormSelect';
import FormRadio from './FormRadio';
import FormCheckBox from './FormCheckBox';
import FormTextArea from './FormTextArea';

const MainPage = () => {

    const [buttonType, setButtonType] = useState(0);
    const [formType, setFormType] = useState("");
    const [questions, setQuestions] = useState([]);

    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col-sm border border-primary rounded-3 mx-2 p-2">
                    
                </div>
                <div className="col-sm border border-primary rounded-3 mx-2 p-2">
                    <FormSelect formtype={formType} setformtype={setFormType} />
                    {formType === 'radio' && (
                        <FormRadio
                            formtype={formType}
                            questions={questions}
                            buttontype={buttonType}
                            setquestions={setQuestions}
                            setbuttontype={setButtonType}    
                        />
                    )}
                    {formType === 'checkbox' && (
                        <FormCheckBox />
                    )}
                    {formType === 'textarea' && (
                        <FormTextArea />
                    )}
                </div>
            </div>

        </div>
    );
};

export default MainPage;