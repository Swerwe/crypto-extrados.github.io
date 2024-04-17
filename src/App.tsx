import React from 'react';
import './App.css';
import { useAppSelector } from './hooks/redux';
import { RootState } from './store';

function App() {
  const {} = useAppSelector(state => state.swapReducer)
  return (
    <div className="App">

    </div>
  );
}

export default App;
