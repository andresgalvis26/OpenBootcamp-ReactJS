import React, {useState, useEffect} from 'react';

const Clock = () => {

    // $ Creando el estado por default
    const defaultState = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Martín',
        apellidos: 'San José',
    };

    // $ Generando el estado del componente - useState
    const [data, setData] = useState(defaultState);

    // $ Generando los diferentes ciclos de vida - useEffect
    useEffect(() => {
        const timerID = setInterval(() => {
            actualiceData();
        }, 1000)

        return () => {
            clearInterval(timerID);
        };
    });

    const actualiceData = () => {
        return setData({
            fecha: data.fecha,
            edad: data.edad + 1,
            nombre: data.nombre,
            apellidos: data.apellidos
        })
    }


    return (
        <div>
            <h2>Hora actual: {data.fecha.toLocaleTimeString()}</h2>
            <h3>{data.nombre} {data.apellidos}</h3>
            <h1>{data.edad}</h1>
        </div>
    );
}

export default Clock;
