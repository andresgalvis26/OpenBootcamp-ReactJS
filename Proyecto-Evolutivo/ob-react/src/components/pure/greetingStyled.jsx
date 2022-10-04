import React, {useState} from 'react';

// * Definiendo estilos en constantes:

// ! Estilo para usuario logueado
const loggedStyle = {
    color: 'green',
    fontStyle: 'italic'
}

// ! Estilo para usuario no logueado
const unloggedStyle = {
    color: 'red',
    fontWeight: 'bold'
}

const Greetingstyled = (props) => {

    // Generamos un estado para el componente y controlar si el usuario está logueado o no
    const [logged, setLogged] = useState(false);

    const greetingUser = () => (<p>Hola, {props.name}</p>);
    const pleaseLogin = () => (<p>PLEASE LOGIN</p>);

    return (
        // * El estilo va a ser personalizable a partir de la lógica del controlador
        <div style={logged ? loggedStyle : unloggedStyle}>
            { logged ? greetingUser() : pleaseLogin()}
            
            <button onClick={() => {
                console.log('Botón Pulsado')
                setLogged(!logged)
            }}>
                { logged ? 'Log Out' : 'Log In' }
            </button>
        </div>
    );
}

export default Greetingstyled;
