import React, {useState} from 'react';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import './App.css';

const App = () => {

  // * Creando los contactos * //
    const contactosDefault = [
      { nombre: 'Camilo Andres', apellidos: 'Perez Porras', email: "camiloandres@gmail.com", conectado: true },
      { nombre: 'Lina Paulina', apellidos: 'Martinez Sarmiento', email: 'linapaulina@gmail.com', conectado: false},
      { nombre: 'Carla Maria', apellidos: 'Patiño Rojas', email: "carlamaria@gmail.com", conectado: true},
      { nombre: 'Paula Juliana', apellidos: 'Mora Carreño', email: "paulajuliana@gmail.com", conectado: false}
    ]


  // * Creando el estado para los contactos */
  const [contactos, setContactos] = useState(contactosDefault);


  // * Función que cambiará el estado del contacto */
  function changeOnlineStatus(contacto) {
    const index = contactos.indexOf(contacto); // Indice
    const tempContactos = [...contactos]; // Copia temporal de contactos

    // Al elemento que tiene ese indice en su propiedad conectado le vamos a dar el valor opuesto.
    tempContactos[index].conectado = !tempContactos[index].conectado; 

    // Cambiar el estado de la variable temporal y verlo en pantalla
    setContactos(tempContactos);
  }


  // * Función que eliminará un contacto */
  function removeContact(contacto) {
    const index = contactos.indexOf(contacto);
    const tempContactos = [...contactos];

    tempContactos.splice(index, 1);
    setContactos(tempContactos);
  }


  // * Función que permitirá añadir un nuevo contacto */
  function addContact(contacto) {
    const tempContactos = [...contactos];
    tempContactos.push(contacto);
    setContactos(tempContactos);
  }


  return (
    <div className="App">
      <h1>Lista de Contactos x Andrés Galvis en ReactJS</h1>

      <div className="card-container">
        {contactos.map((contacto, index) => {
          return (
            <ContactList 
              key={index} 
              contacto={contacto} 
              changeState={changeOnlineStatus} 
              remove={removeContact}
            />
            )
        })}
      </div>

      <ContactForm onAddContact={addContact}></ContactForm>
    </div>
  );
}


export default App;
