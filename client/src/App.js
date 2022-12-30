import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/UserSignup/Login";
import Register from "./pages/UserSignup/Register";
import Navigation from "./pages/Navigation/Navigation";
import { Toaster } from "react-hot-toast";
import Landing from "./pages/LandingPage/Landing";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
        <Navigation />  
        <Routes>
          <Route path="/" element={<Landing />} exact />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
        </Routes>  
      </BrowserRouter>
    </>
  );
}

export default App;
