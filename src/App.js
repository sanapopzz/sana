import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Contact from './Components/Contact';
import Signup from './Components/Signup';
import Navbar from './Components/Navbar';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
