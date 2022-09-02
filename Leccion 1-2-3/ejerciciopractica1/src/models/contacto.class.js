// ! Clase Contacto
// ? DEBE TENER: Nombre, Apellido, Email, Conectado o NO

export class Contacto {
    nombre = "";
    apellido = "";
    email = "";
    conectado = false;

    constructor(nombre, apellido, email, conectado) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.conectado = conectado;
    }
}