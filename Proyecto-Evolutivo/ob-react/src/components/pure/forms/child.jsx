import React, {useRef} from 'react';

const Child = ({ name, send, update }) => {
    
    const messageRef = useRef('')
    const nameRef = useRef('')

    function pressButtonParams(text) {
        alert(`Text: ${text}`);
    }

    function pressButton() {
        const text = messageRef.current.value;
        alert(`Text in Input: ${text}`);
    }


    function submitName(e) {
        // * Lo primero que debemos hacer es evitar el comportamiento x defecto
        e.preventDefault()
        update(nameRef.current.value);
        
    }




    return (
        <div style={{background: 'green', padding: '20px'}}>
            <p onMouseOver={() => console.log('On Mouse Hover Event')}>Child Component</p>

            <h5>Hello, {name}</h5>

            {/* Botones */}
            {/* <button onClick={() => console.log('Botón 1 pulsado')}>Botón 1</button>
            <button onClick={() => console.log('Botón 2 pulsado')}>Botón 2</button> */}

            <button onClick={ () => pressButtonParams('Hola, enviando este texto por parametro o props, la función pressButtonParams recibe el texto y lo muestra como alert.')}>Botón 1</button>
            <button onClick={pressButton}>Botón 2</button>

            <input 
                placeholder='Insert a text...' 
                onFocus={() => console.log('Input Focus')}
                onChange={(e) => console.log('Input Changed:', e.target.value)}
                onCopy={() => console.log('Copied text from Input')}
                ref={messageRef}
                >
            </input>

            {/* Se ejecutará una función que se pasará por props */}
            {/* <button onClick={() => send('Hello Father')}>Send Message</button> */}
            <button onClick={() => send(messageRef.current.value)}>Send Message</button>

            <div style={{marginTop: '20px', background: 'yellow'}}>
                <form style={{padding: '10px'}} onSubmit={submitName}>
                    <input placeholder='New Name' ref={nameRef} />
                    <button type='submit'>Update Name</button>
                </form>

            </div>
        </div>
    );
}

export default Child;
