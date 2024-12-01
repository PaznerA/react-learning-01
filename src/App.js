import logo from './logo.svg';
import './App.css';
import Nav from './Core/Nav';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <Outlet />
      </header>
    </div>
  );
}

export default App;
