import React from 'react';
import './App.css';
import { Overview } from './pages/Overview/Overview';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (


    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Navigate to="/overview" />} />
        <Route path="overview" element={<Overview/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
