import React, {useState} from "react";
import PropTypes from "prop-types";

// ! En estas funciones no tenemos props ni state
// * DEBEMOS UTILIZAR HOOKS y props de forma manual
const GreetingF = (props) => {

    // * Introducción a useState
    const [age, setAge] = useState(23);

    const birthday = () => {
        // Actualizar el State
        setAge(age + 1);
    }




    return (
        <div>
            <h3>¡Hello World from GreetingF Component!</h3>
            <h2>Hola { props.name }, desde componente funcional</h2>
            <h3> Tu edad es: {age} </h3>
            <div>
                <button onClick={birthday}>Cumplir años</button>
            </div>
        </div>
    ) 
};

GreetingF.propTypes = {
    name : PropTypes.string,
    
};

export default GreetingF;
