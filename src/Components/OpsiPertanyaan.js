import React from 'react';

function OpsiPertanyaan(props) {
    return (
        <div>
            <input
                type={props.optionType}
                defaultValue={props.optionName}
                defaultChecked={props.optionName === props.optionAnwer ? true : false}
            />{" "}
            {props.optionName}
        </div>
    );
};

export default OpsiPertanyaan;