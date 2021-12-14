import React, { Component } from 'react';
import './Conversor.css';

export default class Conversor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            moedaA_valor: '',
            moedaB_valor: 0,
        }
        this.converter = this.converter.bind(this);
    }

    converter (){
        let de_para = `${this.props.moedaA}_${this.props.moedaB}`;
        let api_key = '9f494cd551cd092a7707'
        let url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=${api_key}`;
        let h2 = document.getElementById('result');

        fetch(url).then(res => {
            return res.json();
        }).then(json=> {
            let cotacao = json[de_para];
            let moedaB_valor = ( parseFloat(this.state.moedaA_valor) * cotacao).toFixed(2)
            this.setState({moedaB_valor})
            h2.style.display = "block";
        })


    }

    render () {
        return (
          <div className="conversor">
                <h2>{this.props.moedaA} para {this.props.moedaB}</h2>
                <input type="text" onChange={(event) => {this.setState({moedaA_valor: event.target.value})}}></input>
                <button type="button" className="btn" onClick={this.converter}>Converter</button>
                <h2 id="result">{this.state.moedaB_valor}</h2>
          </div>
        )
    }
}