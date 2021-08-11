import React, {Component}  from 'react';
import './Formulario.css'

class Formulario extends Component {
    render() {
        return (
            <div id="formulario">
                <input type="text" placeholder="Insira o título"/>
                <textarea placeholder="Insira a anotação"></textarea>
                <button>Criar nota</button>
            </div>            
        );
    }
}

export default Formulario;