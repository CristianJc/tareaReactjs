import logo from './logo.svg';
import './App.css';
import GreetingF from './Components/pure/greetingF';
import TaskListComponent from './Components/container/task_list'
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import GreetingStyled from './Components/pure/greetingStyled';
import Tarea2 from './hooks/lifecycle/tarea2';
import Father from './Components/container/father';
import ContactListCompent from './Components/container/contact_list';
import OptionalRender from './Components/pure/optionalRender';
import Ejercicio1011y12 from './hooks/ejercicio10,11y12';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* {componente propio greeteing.jsx */}
      {/* <Greeting name="Cristian"></Greeting> */}
      {/* <GreetingF name="Cristian"></GreetingF> */}
      {/* Componente de listado de tareas */}
      {/* <TaskListComponent ></TaskListComponent> */}
      {/* ejemplos de uso de hooks */}
      {/* <Ejemplo1></Ejemplo1> */}
      {/* <Ejemplo2></Ejemplo2> */}
{/* <MiComponenteConContexto></MiComponenteConContexto> */}
{/* todo lo que hay aqui es tratado como props.children */}
{/* <Ejemplo4 nombre="Cristian">

<h3>
  contedino del props.children
</h3>
</Ejemplo4> */}
{/* <GreetingStyled name="Crisitan"></GreetingStyled> */}
{/* <Tarea2></Tarea2> */}
      {/* </header> */}
      {/* <TaskListComponent ></TaskListComponent> */}
      {/* <Father></Father> */}
      {/* <ContactListCompent></ContactListCompent> */}
      {/* Ejemplos de renderizado condicional */}

      {/* <OptionalRender></OptionalRender> */}
    <Ejercicio1011y12></Ejercicio1011y12>
      </div>
  );
}

export default App;
