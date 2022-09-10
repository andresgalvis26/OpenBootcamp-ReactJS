/**
 * * Entender como se utilizan las props.children
 */

import React from 'react';

const Ejemplo4 = (props) => {
    return (
        <div>
            <h1>Ejemplo #4 - Children PROPS</h1>
            <h2>
                Nombre: { props.nombre }
            </h2>
            <h3>Detalles: Se envía información o datos por medio de props y se envía de forma predeterminada también la información en el .children que esté dentro de la etiqueta de apertura y cierre.</h3>
            {/*  props.children pintará por defecto aquello que se encuentre entre las etiquetas de apertura y cierre de deste componente desde el componente de orden superior */}
            { props.children }

        </div>
    );
}

export default Ejemplo4;
