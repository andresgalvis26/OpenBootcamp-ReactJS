/**
 * * Trabajando con el lifecycle WillUnmount en componente de tipo clase y de tipo función
 * * Cuando el componente va a desaparecer
 */

import React, { useEffect, Component } from 'react'

// ! Utilizando los componentes de tipo clase
export class WillUnMount extends Component {

    componentWillUnmount() {
        console.log('Comportamiento antes de que el componente desaparezca.')
    }

    render() {
        return (
            <div>WillUnMount</div>
        );
    }
}


export const WillunmountHook = () => {
    /**
     * ! Utilizando los componentes de tipo función
     * ? Antes de que el componente desaparezca
     * * Debemos agregar el return y ejecutar desde dentro del return
     */

    useEffect(() => {
        // $ Aquí NO iría nada
        return () => {
            console.log('Comportamiento antes de que el componente desaparezca.')
        };
    }, [])


    return (
        <div>
            <h1>WillUnMount Hook</h1>
        </div>
    )
}

