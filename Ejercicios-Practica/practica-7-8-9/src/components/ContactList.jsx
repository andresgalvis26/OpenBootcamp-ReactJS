import React from 'react';

const ContactList = ({ contacto, changeState, remove}) => {
    return (
        <div className='contact-list'>
            <h3>{contacto.nombre}</h3>
            <h3>{contacto.apellidos}</h3>
            <span>{contacto.email}</span>

            <button
                style={{ backgroundColor: contacto.conectado ? 'green' : 'red'}}
                className="btn-State"
                onClick={() => {
                    changeState(contacto)
                }}
            >
                {contacto.conectado ? 'Conectado' : 'Desconectado'}
            </button>

            <button className='btn-Remove' onClick={() => remove(contacto)}>
                Borrar
            </button>
        </div>
    );
}

export default ContactList;
