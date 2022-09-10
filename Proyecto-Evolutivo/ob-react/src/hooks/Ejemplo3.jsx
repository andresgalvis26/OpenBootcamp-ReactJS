// * Combinando y usando Hook 'useState', y 'useContext' * //

// ? useContext -> Interesante para trabajar con datos, poder utilizar el contento y pasarselo a componentes inferiores.

import React, {useState, useContext} from 'react';

/**
 * 
 * @returns Componente 1
 * Dispone de un contexto que va a tener un valor que recibe desde el padre
 */

// * Inicializamos miContexto vacío que va a rellenarse con los datos del contexto del padre
const miContexto = React.createContext(null);

const Componente1 = () => {

    // * Inicializamos un estado que usará la información almacenada en el contexto 'miContexto'
    const state = useContext(miContexto);

    return (
        <div>
            {/* Recibo el token que me pasa el padre por medio del contexto */}
            <h1>El token es: {state.token}</h1>

            {/*  Pintamos el componente 2 */}
            <Componente2></Componente2>
            
        </div>
    );
}

const Componente2 = () => {

    // * Inicializamos un estado que usará la información almacenada en el contexto 'miContexto'
    const state = useContext(miContexto);

    return (
        <div>
            <h2>La sesión es: {state.sesion}</h2>
            
        </div>
    );
}

/**
 * 
 * @returns 
 * MiComponenteConContexto
 */
export default function MiComponenteConContexto() {

    // * Creamos un estado inicial - compartido entre componentes
    const estadoInicial = {
        token: '1234567',
        sesion: 1
    }

    // * Creamos el estado de este componente
    const [sessionData, setSessionData] = useState(estadoInicial)


    // * Funcion para añadir nuevos valores
    // Cualquier componente por debajo de este podrá acceder a estos valores
    function actualizarSesion() {
        setSessionData(
            {
                token: 'JWT123456789',
                sesion: sessionData.sesion + 1
            }
        );
    }

    return (
        // * Proporcionar un contexto a los datos
        // Proporciono unos datos a todos los componentes que estén allí debajo
        // ? Inyectar el contexto como Provider
        <miContexto.Provider value={sessionData}>
            {/* Todo lo que esté aquí dentro puede leer los datos de sessionData */}
            {/* Además, si se actualiza, los componentes de aquí también se actualizan. */}
            <h1>Ejemplo #3 - useState() + useContext()</h1>
            <h3>Detalles: Pasar información entre componentes por medio del contexto. Y es el padre (Provider) quien pasa los datos y también quien los cambia/actualiza.</h3>
            <h5>Más a fondo: Trabajar con el estado de un componente de orden superior y utilizar esa información para actualizar los componentes de orden inferior a través del contexto.</h5>

            <Componente1></Componente1>
            <button onClick={actualizarSesion}>Actualizar Sesión</button>

        </miContexto.Provider>
    )
}
