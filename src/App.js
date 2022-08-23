import logo from './alf.png';
import './App.css';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React app de Gianluca Moriconi
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </div>
  );
}

export default App;
