import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/UserSignup/Login';
import Register from './pages/UserSignup/Register';
import Home from './pages/Home/Home';
import Navigation from './pages/Navigation/Navigation';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Navigation/>
        <Routes>
          <Route path='/'  element={<Home/>} exact/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
