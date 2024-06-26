import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Family from './components/pages/Family';
import SignUp from './components/pages/SignUp';
import Pg from './components/pages/Pg';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Pg' element={<Pg />} />
          <Route path='/family' element={<Family />} />
          <Route path='/sign-up' element={<SignUp />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;