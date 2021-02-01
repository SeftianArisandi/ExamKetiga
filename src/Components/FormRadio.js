import React, { useState } from 'react';

const FormRadio = (props) => {
    const [questionName, setQuestionName] = useState("");
    const [a, setA] = useState("");
    const [b, setB] = useState("");
    const [c, setC] = useState("");
    const [d, setD] = useState("");
    const [answer, setAnswer] = useState("");
    const [score, setScore] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const question = {
            questionType: `${props.formtype}`,
            questionName,
            a,
            b,
            c,
            d,
            answer,
            score
        };
        const newquestion = props.questions;
        newquestion.push(question);
        props.setquestions(newquestion);
        props.setbuttontype(Math.random());
        console.log(props.questions);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-floating mb-2">
                <input type="text" value={questionName} onChange={(e) => {setQuestionName(e.target.value)}} className="form-control" id="floatingQuestion" />
                <label htmlFor="floatingQuestion">Question</label>
            </div>
            <div className="form-floating mb-2">
                <input type="text" value={a} onChange={(e) => {setA(e.target.value)}} className="form-control" id="floatingA" />
                <label htmlFor="floatingA">Answer A</label>
            </div>
            <div className="form-floating mb-2">
                <input type="text" value={b} onChange={(e) => {setB(e.target.value)}} className="form-control" id="floatingB" />
                <label htmlFor="floatingB">Answer B</label>
            </div>
            <div className="form-floating mb-2">
                <input type="text" value={c} onChange={(e) => {setC(e.target.value)}} className="form-control" id="floatingC" />
                <label htmlFor="floatingC">Answer C</label>
            </div>
            <div className="form-floating mb-2">
                <input type="text" value={d} onChange={(e) => {setD(e.target.value)}} className="form-control" id="floatingD" />
                <label htmlFor="floatingD">Answer D</label>
            </div>
            <div className="form-floating mb-2">
                <input type="text" value={answer} onChange={(e) => {setAnswer(e.target.value)}} className="form-control" id="floatingKeyAnswer" />
                <label htmlFor="floatingKeyAnswer">Key Answer</label>
            </div>
            <div className="form-floating mb-2">
                <input type="number" value={score} onChange={(e) => {setScore(e.target.value)}} className="form-control" id="floatingScore" />
                <label htmlFor="floatingScore">Score</label>
            </div>
            <button type="submit" value="Submit">Submit</button>
        </form>
    );
};

export default FormRadio;