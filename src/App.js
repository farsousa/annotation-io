import React, {Component} from 'react';
import Nota from './components/notas/Nota';
import Formulario from './components/formulario/Formulario';
import './App.css'

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      notas: [],
    }
  }

  criarNota(titulo, texto) {
    let nota = {titulo, texto};
    this.state.notas.push(nota);
    this.setState({
      notas: this.state.notas
    });
    console.log(this.state.notas);
  }
  
  render(){
    return (
      <div className="App">
        <h1>Olá Visitante!</h1>
        <Formulario criarNota={this.criarNota.bind(this)}/>
        <div id="notas">
          {
            this.state.notas.map((nota, index) => {
              return(
                <Nota key={index} nota={nota}/>
              );
            })

          }
        </div>
      </div>
    );
  }
}

export default App;
