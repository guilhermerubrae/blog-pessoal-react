import './App.css';
import Tarefa from './paginas/tarefa/Tarefa';
import Contador from './paginas/contador/Contador';
import Home from './paginas/home/Home';

function App() {
   return (
    <>
      <Home titulo='Componente '
      texto='Este é um componente Home que recebe props.' />

      <Contador />
    
      <Tarefa />
    </>

  );
}

export default App;
