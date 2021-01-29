import React from 'react';
import BuatPertaanyaan from './BuatPertaanyaan';
import Pertanyaan from './Pertanyaan';

class MainPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = [{
            type: 'radio',
            soal: 'Anak ke berapa seftian arisandi ?',
            opsi: ['Pertama', 'Kedua', 'Ketiga', 'Keempat'],
            jawaban : 'Pertama'
        },{
            type: 'radio',
            soal: 'berapa bersaudara pramahadi tama putra ?',
            opsi: ['Satu', 'Dua', 'Tiga', 'Empat'],
            jawaban : 'Tiga'
        }]
    }

    updateSoal() {
        this.setState(this.state);
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Pertanyaan soalCollection={this.state}/>
                    </div>
                    <div className="col-sm">
                        <BuatPertaanyaan action={this.updateSoal} />
                    </div>
                </div>
            </div>
        );
    };
};

export default MainPage;