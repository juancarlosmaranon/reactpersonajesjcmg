import logo from './logo.svg';
import './App.css';
import Router from './Router';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import PaginaPrincipal from './components/PaginaPrincipal';

function App() {
  return (
    <div className="App">
      {/* <PaginaPrincipal/> */}
      <Router/>
    </div>
  );
}

export default App;
