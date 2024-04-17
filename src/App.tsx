import React, { useEffect } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchSwap } from './store/reducers/ActionCreators';

function App() {
  const dispatch = useAppDispatch();
  const {swap, isLoading, error} = useAppSelector(state => state.swapReducer);
  useEffect(() => {
    dispatch(fetchSwap())
  },[])
  return (
    <div className="App">
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>Ошибка {error}</h1>}
      {JSON.stringify(swap)}
    </div>
  );
}

export default App;
