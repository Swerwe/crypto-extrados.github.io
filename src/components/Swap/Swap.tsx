import * as React from 'react';
import './Swap.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchSwap } from '../../store/reducers/ActionCreators';
import { SwapBody } from './SwapBody/SwapBody';

export const Swap: React.FC = () => {
    const dispatch = useAppDispatch();
    const {swap, isLoading, error} = useAppSelector(state => state.swapReducer);
    React.useEffect(() => {
      dispatch(fetchSwap());
    },[dispatch]);
    return (
      <div className="Swap">
        <h1 className='swap-header'>Swap</h1>
        <SwapBody swap={swap} isLoading={isLoading} error={error} />
      </div>
    );
};
