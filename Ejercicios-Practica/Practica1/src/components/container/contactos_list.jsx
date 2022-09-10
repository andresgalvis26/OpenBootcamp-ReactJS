import React from 'react'
import PropTypes from 'prop-types'
import ContactoComponent from '../pure/contacto'
import { Contacto } from '../../models/contacto.class'

const ContactosListComponent = props => {

    const primerContacto = new Contacto('Maria Clara', 'Paez Rojas', 'mariaclarapaezrojas@outlook.com', true);
    const segundoContacto = new Contacto('Carlos Julian', 'Martinez Zapata', 'carloszapata@gmail.com', false);
    const tercerContacto = new Contacto('Andrés Felipe', 'Galvis Galviz', 'andresfelipe@hotmail.com', true);

    return (
        <div>
            <div>
                <h2>Información del Contacto</h2>
            </div>

            <ContactoComponent contacto={primerContacto}></ContactoComponent>
            <ContactoComponent contacto={segundoContacto}></ContactoComponent>
            <ContactoComponent contacto={tercerContacto}></ContactoComponent>

        </div>
    )
}

// ! Se puede omitir este propTypes
ContactosListComponent.propTypes = {

}

export default ContactosListComponent;