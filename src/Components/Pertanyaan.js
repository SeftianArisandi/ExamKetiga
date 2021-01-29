import React from 'react';
import Label from './Label';
import OpsiPertanyaan from './OpsiPertanyaan';

function Pertanyaan(props) {
    return(
        <div className="container mt-3 p-4" style={{backgroundColor: 'lightcoral'}}>
            <form action="">
                {props.soalCollection.map((soal, index) => {
                return (
                    <div className="form-group mb-4">
                        <Label
                            labelNumber={index + 1}
                            labelName={soal.soal}
                        />
                        {soal.opsi.map((soalOpsi, index) => {
                            return (
                            <OpsiPertanyaan
                                id={soal.id}
                                optionType={soal.type}
                                optionName={soalOpsi}
                                optionAnwer={
                                typeof soal.jawaban === "string"
                                    ? soal.jawaban
                                    : soal.jawaban[index]
                                }
                            />
                            );
                        })}
                    </div>
                );
                })}
            </form>
        </div>
    )
}

export default Pertanyaan;