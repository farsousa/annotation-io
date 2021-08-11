import React from 'react';
import Nota from './components/notas/Nota';
import Formulario from './components/formulario/Formulario';
import './App.css'

function App() {
  return (
    <div className="App">
      <Formulario />
      <Nota />
      <div id="chama_formulario">
        <p>+</p>
      </div>      
    </div>
  );
}

export default App;
