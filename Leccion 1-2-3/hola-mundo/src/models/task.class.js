// ! Clase Task
// @ Va a tener nombre, descripción, si está terminada o no y nivel de urgencia.

import { LEVELS } from "./levels.enum";

// Datos x default de una tarea al crearla
export class Task {
    name = "";
    description = "";
    completed = false; // Cualquier modificación sobre esta propiedad, genera un nuevo renderizado
    level =  LEVELS.NORMAL

    constructor(name, description, completed, level) {
        this.name = name;
        this.description = description;
        this.completed = completed;
        this.level = level;
    }
}




