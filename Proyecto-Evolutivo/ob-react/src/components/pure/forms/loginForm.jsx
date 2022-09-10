/**
 * ? Componente que va a contener un formulario para autenticación de usuarios
 */

import React, {useState} from 'react';

const LoginForm = () => {

    // * Creando la estructura del objeto que almacenará las credenciales 
    const initialCredentials = [
        {
            user: '',
            password: ''
        }
    ];

    // * Creando el estado del componente para cuando se modifiquen las credenciales.  
    const [credentials, setCredentials] = useState(initialCredentials);

    return (
        <div>
            
        </div>
    );
}

export default LoginForm;
