import logo from './logo.svg';
import './App.css';
import Morning from './Components/Morning';
import NavBar from './Components/NavBar';
import Welcome from './Components/Welcome';

function App() {
  return (
    <div>
      <NavBar />
      <Welcome />
      <Morning />
    </div>
  );
}

export default App;
