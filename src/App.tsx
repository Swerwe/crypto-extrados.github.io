import React from 'react';
import './App.css';
import { Overview } from './pages/Overview/Overview';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Tokens } from './pages/Tokens/Tokens';

function App() {
  return (


    <BrowserRouter basename="https://swerwe.github.io/crypto-extrados.github.io">
      <Navbar />
      <Routes>
      <Route path="/" element={<Navigate to="/crypto-extrados.github.io/overview" />} />
        <Route path="/crypto-extrados.github.io/overview" element={<Overview/>} />
        <Route path="/crypto-extrados.github.io/" element={<Navigate to="/crypto-extrados.github.io/overview" />} />
        <Route path="/crypto-extrados.github.io/tokens" element={<Tokens/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
