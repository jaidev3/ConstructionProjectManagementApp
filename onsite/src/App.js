import './App.css';
import {Routes,Route} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="App">
      <Routes >
        <Route path="/" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/*" element={<Projects/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
      </Routes>
  

    </div>
  );
}

export default App;