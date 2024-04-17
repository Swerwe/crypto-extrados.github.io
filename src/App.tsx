import React from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/redux';

function App() {
  const dispatch = useAppDispatch();
  const {swap} = useAppSelector(state => state.swapReducer);

  return (
    <div className="App">
      {JSON.stringify(swap)}
    </div>
  );
}

export default App;
