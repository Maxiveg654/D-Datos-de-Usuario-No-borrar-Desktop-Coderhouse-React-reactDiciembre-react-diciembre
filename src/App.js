import logo from './logo.svg';
import './App.css';
import NavBar from "./componentes/NavBar"
import ItemListContainer from './componentes/ItemList Container';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <NavBar/>
      <main className='main'>
          <h1>Guayacan Artesanias</h1>
          <ItemListContainer greeting = "Bienvenido"/>
       </main>   
    </div>
  );
}

export default App;

