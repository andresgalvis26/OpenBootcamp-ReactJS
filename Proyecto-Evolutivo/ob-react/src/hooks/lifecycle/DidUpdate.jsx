/**
 * * Trabajando con el lifecycle DidUpdate en componente de tipo clase y de tipo función
 */

import React, { useEffect, Component } from 'react'

// ! Utilizando los componentes de tipo clase
export class DidUpdate extends Component {
    /**
     * ! Utilizando los componentes de tipo clase
     */
    componentDidUpdate() {
        console.log('Comportamiento cuando el componente recibe nuevos props o cambio en su estado privado.')
    }

    render() {
        return (
            <div>DidUpdate desde componente Clase</div>
        );
    }
}

/**
 * 
 * ! Utilizando los componentes de tipo función
 * ? NO se utilizan corchetes para que se ejecute cada vez que se cambie ese estado
 */
export const DidUpdateHook = () => {

    useEffect(() => {
        console.log('Comportamiento cuando el componente recibe nuevos props o cambio en su estado privado.')
    })


    return (
        <div>DidUpdate Hook</div>
    )
}

