import React from 'react';

class BuatPertaanyaan extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            type: '',
            soal: '',
            opsi: [],
            jawaban: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        if(name === 'opsiA') {
            this.state.opsi[0] = value;
        } else if(name === 'opsiB') {
            this.state.opsi[1] = value;
        } else if(name === 'opsiC') {
            this.state.opsi[2] = value;
        } else if(name === 'opsiD') {
            this.state.opsi[3] = value;
        } else {
            this.setState({
                [name]: value
            });
        }  
    };

    handleSubmit = (event) => {
        console.log(this.state);
        event.preventDefault();
    };

    render(){
        return(
            <form onSubmit={this.handleSubmit} className="form mt-3 p-4" style={{backgroundColor: 'lightblue'}}>
                <div className="row mt=3"> 
                    <select name="type" value={this.state.type} onChange={this.handleChange} className="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value='Radio'>Radio</option>
                        <option value='Checkbox'>Checkbox</option>
                        <option value='TextArea'>TextArea</option>                    
                    </select>
                </div>
                <div className="row mt-3">
                    <label htmlFor="inputSoal" className="form-label">Soal</label>
                    <input type="text" name="soal" value={this.state.soal} onChange={this.handleChange} className="form-control" id="inputSoal" />
                </div>
                <div className="row mt-3">
                    <label htmlFor="inputA" className="form-label">Opsi A</label>
                    <input type="text" name="opsiA" value={this.state.opsi[0]} onChange={this.handleChange} className="form-control" id="inputA" />
                </div>
                <div className="row mt-3">
                    <label htmlFor="inputB" className="form-label">Opsi B</label>
                    <input type="text" name="opsiB" value={this.state.opsi[1]} onChange={this.handleChange} className="form-control" id="inputB" />
                </div>
                <div className="row mt-3">
                    <label htmlFor="inputC" className="form-label">Opsi C</label>
                    <input type="text" name="opsiC" value={this.state.opsi[2]} onChange={this.handleChange} className="form-control" id="inputC" />
                </div>
                <div className="row mt-3">
                    <label htmlFor="inputD" className="form-label">Opsi D</label>
                    <input type="text" name="opsiD" value={this.state.opsi[3]} onChange={this.handleChange} className="form-control" id="inputD" />
                </div>
                <div className="row mt-3">
                    <label htmlFor="inputJawaban" className="form-label">Masukan Jawaban</label>
                    <input type="text" name="jawaban" value={this.state.jawaban} onChange={this.handleChange} className="form-control" id="inputJawaban" />
                </div>
                <div className="row mt-3">
                    <label htmlFor="inputScore" className="form-label">Score</label>
                    <input type="text" name="score" value={this.state.score} onChange={this.handleChange} className="form-control" id="inputScore" />
                </div>
                <div className="row mt-3">
                    <button type="submit" className="btn btn-primary" value="Submit" 
                    //onClick={this.props.action}
                    >Submit</button>
                </div>
            </form>
        );
    };
};

export default BuatPertaanyaan;