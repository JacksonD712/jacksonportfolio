import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/nav';

import About from './components/about';
import Profile from './components/profile';
import Contact from './components/contact';


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
        
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;