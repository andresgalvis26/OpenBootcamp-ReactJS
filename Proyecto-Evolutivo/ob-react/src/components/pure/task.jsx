import React, {useEffect} from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";

// $ Importando la hoja de estilos
import '../../styles/task.scss'


/**
 * ? Recibe en las props un task (objeto tarea con la estructura definida)
 * @param {task}
 * @returns TaskComponent
 */
const TaskComponent = ({ task }) => {

    // Cada modificación en task generará este cambio y console.log
    useEffect(() => {
        console.log('Created task')
        return () => {
            console.log(`Task: ${task.name} is going to unmount.`);
        };
    }, [task]);


    return (
        <div>
            <h2 className="task-name">Nombre: {task.name}</h2>
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
