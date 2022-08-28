import './App.css';
import Navbar from './components/navbar';
import ItemListContainer from './components/itemlistcontainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="La tienda de Alf!" />
    </div>
  )
}

export default App;
