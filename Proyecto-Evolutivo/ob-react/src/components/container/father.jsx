import React, {useState} from 'react';
import Child from '../pure/forms/child';

const Father = () => {

    const [name, setName] = useState('Andres Felipe');

    // $ Método o función que se le pasa al hijo como send
    function showMessage(text) {
        alert(`Message received: ${text}` )
    }

    // $ Método o función que se le pasa al hijo como update 
    function updateName (newName) {
        setName(newName);
    }


    return (
        <div style={{background: 'tomato', padding: '20px'}}>
            {/* Va a pintar al child o hijo */}
            <Child name={name} send={showMessage} update={updateName}></Child>
        </div>
    );
}

export default Father;
