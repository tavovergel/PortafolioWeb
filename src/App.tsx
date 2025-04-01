import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 

import './App.css';
import Navbar from "./components/Navbar"; 
import Footert from "./components/Footert";
import Home from "./pages/Home.tsx"; 

const App = () => (
  <Router>
    <div id="root"> 
      <Navbar />
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>

      <Footert />
    </div>
  </Router>
);

export default App;