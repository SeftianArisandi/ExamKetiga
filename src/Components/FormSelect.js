import React from 'react';

const FormSelect = (props) => {
    return(
        <div className="form-floating">
            <select className="form-select" value={props.formtype} onChange={(e) => props.setformtype(e.target.value)} id="floatingSelect" aria-label="Floating label select example">
                <option defaultValue="type">Type</option>
                <option value="radio">Radio</option>
                <option value="checkbox">CheckBox</option>
                <option value="textarea">TextArea</option>
            </select>
            <label htmlFor="floatingSelect">Choose Type</label>
            <br/>
        </div>
    );
};

export default FormSelect;