import React from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task'

const TaskListComponent = () => {

    // * Creando una nueva tarea * //
    // const defaultTask = new Task('Example', 'Default description of my task', false, LEVELS.NORMAL);
    const firstTask = new Task('Ropa', 'Recoger ropa lavada hace unos días', false, LEVELS.URGENT);

    // TODO: Cambiar el estado de una tarea 
    const changeState = (id) => {
        console.log('Cambiar el estado de una tarea en la lección #3');
    }

    return (
        <div>
            <div>
                <h2>Tus tareas:</h2>
            </div>
            {/* ! Aplicar el map para renderizar una lista */}

            {/* Enviando la tarea por medio de props */}
            <TaskComponent task={firstTask}> </TaskComponent>

        </div>
    )
}

// TaskListComponent.propTypes = {

// }

export default TaskListComponent