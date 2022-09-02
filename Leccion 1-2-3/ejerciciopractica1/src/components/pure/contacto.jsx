import React from 'react'
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';

const ContactoComponent = ({ contacto }) => {
    return (
        <div>
            <h2>Nombre del Contacto: {contacto.nombre}</h2>
            <h4>Apellido del Contacto: {contacto.apellido}</h4>
            <h5>Email del Contacto: {contacto.email}</h5>
            <h5>Estado del Contacto: {contacto.conectado ? 'Contacto En Línea' : 'Contacto No Disponible'} </h5>
        </div>
    )
}

ContactoComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto),
}

export default ContactoComponent;