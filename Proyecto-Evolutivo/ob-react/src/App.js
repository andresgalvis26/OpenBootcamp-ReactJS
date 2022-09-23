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
      <TaskListComponent></TaskListComponent>


      {/* Gestión de eventos */}
      {/* <Father></Father> */}
    </div>
  );
}

export default App;
