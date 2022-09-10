import React, { Component } from 'react';


class LifeCycleExample extends Component {

    constructor(props) {
        /**
         * ? No hacer cosas raras aquí como peticiones o consultas
         * ? Se utiliza para la declaración o inicialización de variables
         */
        super(props)
        console.log('CONSTRUCTOR: Cuando se realiza una instancia del componente.')
    }

    componentWillMount() {
        /**
         * * Antes del montaje del componente
         */
        console.log('WillMount: Antes del montaje del componente')
    }


    componentDidMount() {
        /**
         * * Cuando el componente ya está listo
         * @ Es el mejor momento para hacer control, peticiones, etc. 
         * ! Que necesito los datos antes de pintarlos, ¡¡¡¡AQUÍ!!!!
         */
        console.log('DidMount: Justo al acabar el montaje del componente, antes de renderizarlo.')
    }


    componentWillReceiveProps(nextProps) {
        /**
         * * Cuando va a recibir nuevas props 
         */
        console.log('WillReceiveProps: Si va a recibir nuevas props')
    }


    shouldComponentUpdate(nextProps, nextState) {
        /**
         * ? Controlar si el componente DEBE O NO actualizarse.
         * * Nos devolverá un true o false 
         * return true / false
         */
    }

    componentWillUpdate(nextProps, nextState) {
        /**
         * * Controlar justo antes de que se actualice
         */
        console.log('WillUpdate: Justo antes de actualizarse.')
    }

    componentDidUpdate(prevProps, prevState) {
        /** 
         * * Controlar justo después de actualizarse
         */
        console.log('DidUpdate: Justo después de actualizarse.')
    }

    componentWillUnmount() {
        /** 
         * * Controlar o realizar acciones justo antes de que desaparezca el componente.
         */
        console.log('WillUnmount: Justo antes de desaparecer.')
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}





export default LifeCycleExample;
