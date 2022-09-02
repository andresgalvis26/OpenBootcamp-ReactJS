
// ! Creando un componente
// * Crearemos un archivo HTML que podemos renderizar añadiendolo al arbol de componentes del proyecto

import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {

    // ? PROPIEDADES QUE PUEDE RECIBIR UN COMPONENTE
    // ? Información más que todo
    constructor(props) {
        super(props);
        this.state = {
            age: 23
        }
    }

    render() {
        return (
            <div>
                <h3>¡Hello World from Greeting Component!</h3>
                <h2>Mi querido amigo: { this.props.name }</h2>
                <h3> Tu edad es: {this.state.age} </h3>
                <div>
                    <button onClick={this.birthday}>Cumplir años</button>
                </div>
            </div>
        );
    }

    // ! Tipo flecha para poder hacer uso de props por medio de 'this'
    birthday = () => {
        // Nuevo estado y actualizar vista
        this.setState((prevState) => (
            {
                age: prevState.age +1
            }
        ))

    }
}


// ! Proptypes deben tener tipo
Greeting.propTypes = {
    name: PropTypes.string,

};


export default Greeting;
