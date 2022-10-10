import React, {useState, useEffect} from 'react'
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task'
import Taskform from '../pure/forms/taskForm';

// $ Importamos el estilo para ver si se pisa 
import '../../styles/task.scss'

const TaskListComponent = () => {

    // * Creando una nueva tarea * //
    const defaultTask1 = new Task('Task #1', 'Default description of my task', true, LEVELS.URGENT);
    const defaultTask2 = new Task('Task #2', 'Default description of my task', false, LEVELS.BLOCKING);
    const defaultTask3 = new Task('Task #3', 'Default description of my task', true, LEVELS.NORMAL);


    // * Creando y asignando el estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    /**
    * ? Control del ciclo de vida del componente
    * ! Primer consolelog para cuando se haya modificado el componente
    * ! Segundo consolelog para cuando se vaya a desmontar el componente
    */
    useEffect(() => {
        console.log('Task State has been modified.')
        setTimeout(() => {
            setLoading(false);
        }, 3000)
        return () => {
            console.log('Task_List component is going to unmount.')
        };
    }, [tasks]);

    // const firstTask = new Task('Ropa', 'Recoger ropa lavada hace unos días', false, LEVELS.URGENT);

    // ! Cambia el estado de una tarea
    function completeTask(task) {
        console.log('Complete this task:', task)
        const index = tasks.indexOf(task);

        // Utilizar siempre una variable temporal
        const tempTasks = [...tasks]

        // Le damos el valor inverso al que ya tiene
        tempTasks[index].completed = !tempTasks[index].completed;

        // Actualizamos el nuevo estado con la lista de tareas actualizada.
        setTasks(tempTasks);
    }

    // ? Eliminar una tarea
    function deleteTask(task) {
        console.log('Delete this task:', task)
        const index = tasks.indexOf(task);

        // Utilizar siempre una variable temporal
        const tempTasks = [...tasks]

        // Vamos a iterar sobre la variable temporal, hacer splice o borrado, tomamos la tarea que está en index y eliminamos un elemento.
        tempTasks.splice(index, 1);

        setTasks(tempTasks);
    }


    // ? Añadir una tarea
    function addTask(task) {
        console.log('Add this task:', task)
        

        // Utilizar siempre una variable temporal
        const tempTasks = [...tasks]

        // Vamos a iterar sobre la variable temporal, hacer splice o borrado, tomamos la tarea que está en index y eliminamos un elemento.
        tempTasks.push(task);

        setTasks(tempTasks);
    }


    // ? Pintar la tabla o NO
    const Table = () => {
        return  (
            <table>
                <thead>
                    <tr>
                        <th scope='col'>Título</th>
                        <th scope='col'>Descripción</th>
                        <th scope='col'>Prioridad</th>
                        <th scope='col'>Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    {/* El map devolverá diferentes tareas  */}
                    { tasks.map((task, index) => {
                        return (
                            <TaskComponent 
                                key={index} 
                                task={task}
                                complete={completeTask}
                                remove={deleteTask}>    
                            </TaskComponent>
                            )
                        } 
                    )}
                </tbody>
            </table>
        )
    }

    let taskTable;

    if(tasks.length > 0) {
        taskTable = <Table></Table>
    } else {
        taskTable = (
            <div>
                <h3>You have no tasks available to do.</h3>
                <h5>Please create tasks to do.</h5>
            </div>
        ) 
    }

    const loadingStyle = {
        color: 'grey',
        fontSize: '30px',
        fontWeigth: 'bold'
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    {/* Card Header - Title */}
                    <div className='card-header p-3'>
                        <h2>Tus tareas:</h2>
                    </div>

                    {/* Card Body - Content  */}
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height: '400px'} }>
                        {/* TODO: Añadir un spinner de carga */}
                        {loading ? (<p style={loadingStyle}>Loading tasks...</p>) : taskTable}
                    </div>

                </div>
            </div>
            <Taskform add={addTask} length={tasks.length}></Taskform>
            

            {/* Enviando la tarea por medio de props */}
            {/* <TaskComponent task={tasks}> </TaskComponent> */}

        </div>
    )
}

export default TaskListComponent