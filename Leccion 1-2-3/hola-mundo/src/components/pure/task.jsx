import React from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";

// Recibe en las props un task (objeto tarea con la estructura definida)
const TaskComponent = ({ task }) => {
    return (
        <div>
            <h3>Nombre: {task.name}</h3>
            <h4>Descripción: {task.description}</h4>
            {/* <h3>Completada: {task.completed}</h3> */}
            <h5>Nivel de la tarea: {task.level}</h5>
            <h5>Estado de la tarea: { task.completed ? 'Completado' : 'Pendiente' }</h5>
        </div>
    );
};

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
