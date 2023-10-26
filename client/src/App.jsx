
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './components/login/Login';
import Register from "./components/Register/Register";
import Dashboard from './components/Dashboard/Dashboard';

function App() {

  return (
    <BrowserRouter>
  <Routes>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/" element={<Dashboard/>}/>
  </Routes>
    </BrowserRouter>
  )
}

export default App
