/**
 * * Construir un componente que posea todos los ciclos de vida del componente
 * ! Componente funcional
 */

import React, {useEffect} from 'react';

const AllCycles = () => {

    // Solo debemos tener un useEffect x Componente
    // El efecto que realice, se hará siempre con este componente. 
    useEffect(() => {
        console.log('Componente actualizado.')

        const intervalID = setInterval(() => {
            document.title = `${new Date()}`
            console.log('Actualización del componente')
        }, 1000)

        return () => {
            console.log('Componente va a desaparecer.')
            document.title = 'Tiempo detenido';
            clearInterval(intervalID)
        };
    }, []);

    return (
        <div>
            
        </div>
    );
}

export default AllCycles;
