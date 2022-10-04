import React, {useState} from 'react';

// * Definiendo estilos en constantes:

let red = 0;
let green = 200;
let blue = 10;

// ! Estilo para usuario logueado
const loggedStyle = {
    backgroundColor: `rgb(${red},${green},${blue})`,
    color: 'white',
    fontWeight: 'bold'
}

// ! Estilo para usuario no logueado
const unloggedStyle = {
    backgroundColor: 'red',
    color: 'white',
    fontWeight: 'bold'
}


// Login / Logout Buttons Elements
const LoginButton = ({loginAction, propStyle}) => {
    return (
        <button style={propStyle} onClick={loginAction}>Iniciar Sesión</button>
    )
}

const LogoutButton = ({logoutAction, propStyle}) => {
    return (
        <button style={propStyle} onClick={logoutAction}>Cerrar Sesión</button>
    )
}


// # (Expresión true) && expresión => Se renderiza la expresión
// # (Expresión false) && expresión => NO se renderiza la expresión


const Optionalrender = () => {

    const [access, setAccess] = useState(false);
    const [nMessage, setNMessage] = useState(0);

    // function updateAccess() {
    //     setAccess(!access);
    // }

    const loginAction = () => {
        setAccess(true);
    }

    const logoutAction = () => {
        setAccess(false);
    }

    let optionalButton;

    // if(access){
    //     optionalButton = <button onClick={updateAccess}>Log Out</button>
    // } else {
    //     optionalButton = <button onClick={updateAccess}>Log In</button>
    // }

    if(access){
        optionalButton = <LogoutButton propStyle={unloggedStyle} logoutAction={logoutAction}></LogoutButton>
    } else {
        optionalButton = <LoginButton propStyle={loggedStyle} loginAction={loginAction}></LoginButton>
    }

    // * Unread Messages
    let addMessages = () => {
        setNMessage(nMessage + 1);
    }

    return (
        <div>
            {/* Optional Button */}
            { optionalButton }

            {/* Unread Messages */}
            {/* { nMessage > 0 && nMessage === 1 && <p>You have {nMessage} new message.</p> }
            { nMessage > 1 && <p>You have {nMessage} new messages.</p>}
            { nMessage === 0 && <p>There are no new messages.</p>} */}

            {/* Ternay Operator */}
            { access ? (
                <div>
                    { nMessage > 0 ?
                    <p>You have {nMessage} new message{nMessage > 1 ? 's' : null}.</p> :
                    <p>There are no new messages.</p> 
                    }
                    <button onClick={addMessages}>{nMessage === 0 ? 'Add your first message' : 'Add new message'}</button>
                </div>) : null }
        </div>
    );
}

export default Optionalrender;
