import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';

import AboutUs from './pages/about';


export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home/OurClientSays" element={<Home />} />
   
        <Route path="/about" element={<AboutUs />} />
    
      </Routes>
    </Router>
  );
}
