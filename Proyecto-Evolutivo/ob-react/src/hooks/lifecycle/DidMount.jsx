/**
 * * Trabajando con el lifecycle DidMount en componentes de tipo clase y de tipo función
 */

import React, { useEffect, Component } from 'react'

export class DidMount extends Component {
    /**
     * ! Utilizando los componentes de tipo clase
     */
    componentDidMount() {
        console.log('Comportamiento antes de que el componente sea agregado al DOM. (Se renderice).')
    }

    render() {
        return (
            <div>
                <h1>DidMount desde componente Clase</h1>
            </div>
        );
    }
}

/**
 * 
 * * Utilizando los componentes de tipo función
 * ? Se utiliza corchetes vacio la primera vez, cuando está listo para usarse.
 */
export const DidMountHook = () => {

    useEffect(() => {
        console.log('Comportamiento antes de que el componente sea agregado al DOM. (Se renderice).')
    }, [])

    return (
        <div>
            <h1>DidMount Hook</h1>
        </div>
    )
}

