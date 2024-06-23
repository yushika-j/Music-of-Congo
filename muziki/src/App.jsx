import React from 'react';
import './App.css';
import Explore from "./Explore";
import Login from "./Login";
import About from "./About";
import Home from "./Home";
import Layout from "./Layout"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="explore" element={<Explore />} />
          <Route path="login" element={<Login />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
