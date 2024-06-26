import React from 'react';
import './App.css';
import { Overview } from './pages/Overview/Overview';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Tokens } from './pages/Tokens/Tokens';

function App() {
  return (


    <BrowserRouter basename={'/crypto-extrados.github.io'}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/overview" />} />
        <Route path="/overview" element={<Overview/>} />
        <Route path="/tokens" element={<Tokens/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
