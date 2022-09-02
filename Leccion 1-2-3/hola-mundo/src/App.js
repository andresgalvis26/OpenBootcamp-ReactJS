import logo from './logo.svg';
import './App.css';
// import Greeting from './components/pure/greeting';
// import Name from './components/pure/name';
// import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Name /> */}
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          {/* Andres Felipe Galvis Galviz */}
        </p>
        {/* Añadiendo el componente greeting */}
        {/* <Greeting name='Andres Felipe Galvis'  /> */}

        {/* <GreetingF name='Carlos Andrés Mendoza' /> */}

        {/* Componente de listado de tareas  */}
        <TaskListComponent></TaskListComponent>


        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
