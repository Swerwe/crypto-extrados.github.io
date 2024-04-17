import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchSwap } from './store/reducers/ActionCreators';
import { Overview } from './pages/Overview/Overview';

function App() {
  const dispatch = useAppDispatch();
  const {swap, isLoading, error} = useAppSelector(state => state.swapReducer);
  useEffect(() => {
    dispatch(fetchSwap())
  },[])
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
