import React, {Component}  from 'react';
import './Formulario.css'

class Formulario extends Component {

    constructor(props) {
        super(props);
        this.titulo = "";
        this.texto = "";
    }

    _setTitle(event) {
        event.stopPropagation();
        this.titulo = event.target.value;
    }

    _setText(event) {
        event.stopPropagation();
        this.texto = event.target.value;
    }

    _getNota(){
        this.props.criarNota(this.titulo, this.texto);
    }

    render() {
        return (
            <div id="formulario">
                <input type="text" placeholder="Insira o título" onChange={this._setTitle.bind(this)} required/>
                <textarea placeholder="Insira a anotação" onChange={this._setText.bind(this)} required></textarea>
                <button onClick={this._getNota.bind(this)}>salvar</button>
            </div>            
        );
    }
}

export default Formulario;