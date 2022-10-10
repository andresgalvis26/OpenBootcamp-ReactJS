import logo from './logo.svg';
import './App.css';
// import Greeting from './components/pure/greeting';
// import Name from './components/pure/name';
// import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list.jsx'
import Greetingstyled from './components/pure/greetingStyled';
// import Ejemplo1 from './hooks/Ejemplo1.jsx'
// import Ejemplo2 from './hooks/Ejemplo2.jsx'
// import MiComponenteConContexto from './hooks/Ejemplo3.jsx';
// import Ejemplo4 from './hooks/Ejemplo4.jsx'
import Father from './components/container/father';
import Optionalrender from './components/pure/optionalRender';
import Loginformik from './components/pure/forms/loginFormik';
import Registerformik from './components/pure/forms/registerFormik';
import Taskformik from './components/pure/forms/taskFormik';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
            {/*Edit <code>src/App.js</code> and save to reload.
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        */}
        <p>
          {/* <Name /> */}
          {/* Andres Felipe Galvis Galviz */}
        </p>


        {/* Añadiendo el componente greeting */}
        {/* <Greeting name='Andres Felipe Galvis'  /> */}


        {/* <GreetingF name='Carlos Andrés Mendoza' /> */}


        {/* Componente de listado de tareas  */}
        {/* <TaskListComponent></TaskListComponent> */}


        {/* Trabajando y conociendo los hooks  */}
        {/* 
          <Ejemplo1></Ejemplo1>
          <Ejemplo2></Ejemplo2>
          <MiComponenteConContexto></MiComponenteConContexto>
          <Ejemplo4 nombre="Princess">
            <h4>Todo lo contenido dentro del componente será props.children</h4>
          </Ejemplo4>
         */} 

        {/* <Greetingstyled name='Felipe'></Greetingstyled> */}
        



      {/* </header> */}
      {/* <TaskListComponent></TaskListComponent> */}
      <Taskformik></Taskformik>



      {/* Gestión de eventos */}
      {/* <Father></Father> */}


      {/*  Ejemplo de Renderizado Condicional  */}
      {/* Una lista de elementos ya es un renderizado condicional, porque se renderizara dependiendo del número de elementos que tenga la lista. */}
      {/* Un map también es un renderizado condicional, depende de una lógica. */}
      {/* <Optionalrender></Optionalrender> */}


      {/* Ejemplo de uso de Formik */}
      {/* <Loginformik></Loginformik> */}
      {/* <Registerformik></Registerformik> */}

    </div>
  );
}

export default App;
