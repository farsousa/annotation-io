import React, {Component} from 'react';
import './Nota.css';

class Nota extends Component {

    render(){
        return (
            <div id="nota">
                <header>
                    <h2>Título</h2>
                </header>
                <main>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ad quae temporibus animi autem minima necessitatibus, similique, explicabo impedit, molestiae velit quidem laborum odio deleniti cum? Sint sed accusantium omnis!</p>
                </main>
                <footer>
                    <span>Editar</span>
                    <span>Excluir</span>
                </footer>
            </div>
        );
    }

}

export default Nota;