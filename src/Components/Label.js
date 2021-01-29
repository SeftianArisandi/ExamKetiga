import React from 'react';

function Label(props) {
    return (
        <div>
            <label htmlFor="">
                {props.labelNumber} {". "} {props.labelName}
            </label>
        </div>
    );
};

export default Label;