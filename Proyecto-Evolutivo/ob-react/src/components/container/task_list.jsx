import React, {useState, useEffect} from 'react'
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task'

// $ Importamos el estilo para ver si se pisa 
import '../../styles/task.scss'

const TaskListComponent = () => {

    // * Creando una nueva tarea * //
    const defaultTask = new Task('My First Task #1', 'Default description of my task', false, LEVELS.NORMAL);

    // * Creando y asignando el estado del componente
    const [tasks, setTasks] = useState(defaultTask);
    const [loading, setLoading] = useState(true);

    /**
    * ? Control del ciclo de vida del componente
    * ! Primer consolelog para cuando se haya modificado el componente
    * ! Segundo consolelog para cuando se vaya a desmontar el componente
    */
    useEffect(() => {
        console.log('Task State has been modified.')
        setLoading(false);
        return () => {
            console.log('Task_List component is going to unmount.')
        };
    }, [tasks]);

    // const firstTask = new Task('Ropa', 'Recoger ropa lavada hace unos días', false, LEVELS.URGENT);

    // TODO: Cambiar el estado de una tarea 
    const changeCompleted = (id) => {
        console.log('Cambiar el estado de una tarea en la lección #3');
    }

    return (
        <div>
            <div>
                <h2>Tus tareas:</h2>
            </div>
            {/* ! Aplicar el map para renderizar una lista */}

            {/* Enviando la tarea por medio de props */}
            <TaskComponent task={tasks}> </TaskComponent>

        </div>
    )
}

export default TaskListComponent