
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Usamos Routes y Route

//Importando el CSS
import './App.css'; 

// Importando los componentes
import Navbar from "./components/Navbar"; 
import Home from "./pages/Home.tsx"; 


const App = () => (
  <Router>
    {/* este componente fuera del routes esta en todas las paginas*/}
    <Navbar /> {/* Aquí se incluye el Navbar en la parte superior */}
    
    <Routes>
      {/* Aquí se define cada una de las rutas de mi proyecto */}
      <Route path="/" element={<Home />} />
      
    </Routes>
  </Router>
);

export default App;