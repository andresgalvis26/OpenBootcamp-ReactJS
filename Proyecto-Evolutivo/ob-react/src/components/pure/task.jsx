import React, {useEffect} from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";

// $ Importando la hoja de estilos
import '../../styles/task.scss'
import { LEVELS } from "../../models/levels.enum";


/**
 * ? Recibe en las props un task (objeto tarea con la estructura definida)
 * @param {task}
 * @returns TaskComponent
 */
const TaskComponent = ({ task, complete, remove }) => {

    // * Cada modificación en task generará este cambio y console.log
    // ? Cuando se va a desmontar tomará el return 
    useEffect(() => {
        console.log('Created task')
        return () => {
            console.log(`Task: ${task.name} is going to unmount.`);
        };
    }, [task]);

    /**
     * * Función que retornará un Badge dependiendo del nivel de la tarea
     */
    function taskLevelBadge() {
        // Usando Switch-Case
        switch (task.level) {
            case LEVELS.NORMAL:
                return(<h6 className="mb-0"><span className="badge bg-primary">{task.level}</span></h6>)
            case LEVELS.URGENT:
                return(<h6 className="mb-0"><span className="badge bg-warning">{task.level}</span></h6>)
            case LEVELS.BLOCKING:
                return(<h6 className="mb-0"><span className="badge bg-danger">{task.level}</span></h6>)
            default:
                break;
        }
    }

    /**
     * * Función que retornará un icon dependiendo del estado de la tarea (completado o pendiente)
     * * Se añadió el onClick para que se ejecute la función en el padre y cambie el icono
     */
    function taskCompletedIcon() {
        if(task.completed){
            return (<i onClick={() => complete(task)} className="bi-toggle-on task-action" style={{color: 'green', fontSize: '16px'}}></i>)
        } else {
            return (<i onClick={() => complete(task)} className="bi-toggle-off task-action" style={{color: 'orange', fontSize: '16px'}}></i>)
        }
    }

    return (
        <tr className="fw-normal">
            <th>
                <span className="ms-2">{task.name}</span>
            </th>
            <td className="align-middle">
                <span>{task.description}</span>
            </td>
            <td className="align-middle">
                {/* Ejecutar la función que retorna un elemento badge */}
                {taskLevelBadge()}
            </td>
            <td className="align-middle">
                {/* Ejecutar la función que retorna el icono dependiendo del estado de la tarea */}
                {taskCompletedIcon()}
                <i className="bi-trash task-action"  style={{color: 'red', fontSize: '16px'}} onClick={() => remove(task)}></i>
            </td>
        </tr>

        /**
         * $ Estructura antigua utilizada para la visualización de una tarea
         * 
         */
            // <div>
            //     <h2 className="task-name">Nombre: {task.name}</h2>
            //     <h4>Descripción: {task.description}</h4>
            //     {/* <h3>Completada: {task.completed}</h3> */}
            //     <h5>Nivel de la tarea: {task.level}</h5>
            //     <h5>Estado de la tarea: { task.completed ? 'Completado' : 'Pendiente' }</h5>
            // </div>
    );
};

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};

export default TaskComponent;
