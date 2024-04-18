import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { Overview } from './pages/Overview/Overview';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigate to="/overview" />} />
        <Route path="overview" element={<Overview/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
