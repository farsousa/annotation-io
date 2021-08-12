import React, {Component} from 'react';
import './Nota.css';

class Nota extends Component {

    render(){
        return (
            <div id="nota">
                <header>
                    <h2>{this.props.nota.titulo}</h2>
                </header>
                <main>
                    <p>{this.props.nota.texto}</p>
                </main>
                <footer>
                    <span id="editar">editar</span>
                    <span id="excluir">excluir</span>
                </footer>
            </div>
        );
    }

}

export default Nota;