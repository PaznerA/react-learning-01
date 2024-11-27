import logo from './logo.svg';
import './App.css';
import DataTypeTest from './DataTypeTest';
import Calc from './Calc/Calc';
import CSS from './CSS';
import UserEvents from './UserEvents';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <UserEvents />
        <DataTypeTest />
        <CSS />
        <Calc />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
