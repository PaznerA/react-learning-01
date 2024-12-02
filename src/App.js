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
      </header>
      <article style={{background: "darkgray"}}>
        <Outlet />
      </article>
    </div>
  );
}

export default App;
