// * Combinando y usando Hook 'useState', 'useRef' y 'useEffect' * //

import React, {useState, useRef, useEffect} from 'react'

const Ejemplo2 = () => {

    // $ Creando contadores distintos || Cada uno con estado diferente
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);


    // $ Vamos a crear una referencia con useRef() para asociar una variable con un elemento del DOM del componente (vista HTML)
    // $ En vez de usar jQuery para buscar el elemento por ID o clase, usamos useRef()
    const miRef = useRef();
    

    // $ Crear dos funciones
    function incrementar1() {
        setContador1(contador1 + 1);
    }

    function incrementar2() {
        setContador2(contador2 + 1);
    }


    // * Utilizando useEffect

    /**
     * ! Caso 1: Ejecutar SIEMPRE un snippet de código
     * # Cada vez que haya un cambio en el estado del componente se ejecuta aquello dentro del useEffect()
     */
    useEffect(() => {
        console.log('Cambio en el estado del componente');
        console.log('MOSTRANDO REFERENCIA A ELEMENTO DEL DOM: ');
        console.log(miRef);    
    });


    /**
     * ! Caso 2: Ejecutar SOLO cuando cambie CONTADOR1
     * # Cada vez que haya un cambio en el estado de 'contador1', se ejecuta lo que diga en useEffect
     * En caso de cambiar 'contador2', no habrá ejecución.
     */
    // useEffect(() => {
    //         console.log('Cambio en el estado del Contador 1');
    //         console.log('MOSTRANDO REFERENCIA A ELEMENTO DEL DOM: ');
    //         console.log(miRef);    
        
    // }, [contador1]);

    // ? useEffect recibe 1er parámetro un callback y luego dependencias
    // ? SÓLO PODEMOS TENER 1 USEEFFECT, O SOLO SE EJECUTARÁ EL ÚLTIMO

    /**
     * ! Caso 3: Ejecutar SOLO cuando cambie CONTADOR1 o CONTADOR2
     * # Cada vez que haya un cambio en el estado de 'contador1', se ejecuta lo que diga en useEffect
     * # Cada vez que haya un cambio en el estado de 'contador1', se ejecuta lo que diga en useEffect
     */
        useEffect(() => {
            console.log('Cambio en el estado del Contador 1 / Contador 2');
            console.log('MOSTRANDO REFERENCIA A ELEMENTO DEL DOM: ');
            console.log(miRef);    
        }, [contador1, contador2]);


    return (
        <div>
            <h1>Ejemplo de useState(), useRef() y useEffect()</h1>
            <h2>CONTADOR 1: {contador1}</h2>
            <h2>CONTADOR 2: {contador2}</h2>

            {/* Elemento referenciado */}
            {/* Referencia y conecta un elemento HTML a variable JS */}
            <h4 ref={miRef}>Ejemplo de Elemento Referenciado</h4>

            {/* Botones para cambiar los contadores */}
            <div>
                <button onClick={incrementar1}>Incrementar Contador 1</button>
                <button onClick={incrementar2}>Incrementar Contador 2</button>
            </div>
        </div>
    )
}

export default Ejemplo2
