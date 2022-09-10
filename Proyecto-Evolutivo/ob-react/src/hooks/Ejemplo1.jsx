// * Ejemplo de uso del Hook 'useState' * //

// TODO: Crear un componente de tipo función y acceder a su estado privado a través de un hook y además poder modificarlo //

import React, { useState } from 'react';


const Ejemplo1 = () => {

    // Valor inicial para un contador
    const valorInicial = 0;
    
    // Valor inicial para una persona
    const personaInicial = {
        nombre : 'Julian',
        email : 'julian@gmail.com',
    }

    // ! Queremos que el valorInicial y personaInicial sean parte del componente y así poder gestionar su cambio y que éste se vea reflejado en la vista del componente. ! //
    // ? Estructura: const [nombreVariable, funcionCambiar] = useState(valorInicial);

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);


    // * Función para actualizar el estado privado que contiene el contador
    function incrementarContador() {
        setContador(contador + 1);
    }

    function decrementarContador() {
        setContador(contador - 1);
    }

    // * Función para actualizar el estado privado que contiene Persona
    function actualizarPersona() {
        setPersona({
            nombre: 'Andres Felipe',
            email: 'andresfelipe@hotmail.com'
        });
    }

    return (
        <div>
            <h1>Ejemplo de useState()</h1>
            <h2>Contador: {contador}</h2>
            <button onClick={decrementarContador}>Decrementar</button>
            <button onClick={incrementarContador}>Incrementar</button>


            <h2>Datos del Gerente:</h2>
            <h3>Nombre: {persona.nombre}</h3>
            <h3>Email: {persona.email}</h3>
            <button onClick={actualizarPersona}>Actualizar Gerente</button>
        </div>
    );
};

export default Ejemplo1;


