import * as React from 'react';
import './SwapBody.scss';
import { SwapState } from '../../../store/reducers/SwapSlice';
import { SwapFrom } from './SwapFrom/SwapFrom';
import { SwapTo } from './SwapTo/SwapTo';
import { ChangeIcon } from './ChangeIcon/ChangeIcon';



export const SwapBody: React.FC<SwapState> = ({swap}) => {
    return (
      <div className="SwapBody">
        <SwapFrom from={swap?.from} />
        <ChangeIcon className='change-icon__absolute' />
        <SwapTo to={swap?.to} />
        <button className='swap-btn'>Swap</button>
      </div>
    );
};
//<SwapTo to={swap?.to} />
