import * as React from 'react';
import './SwapFrom.scss';
import { SwapFromType } from '../../../../models/ISwap';
interface iSwapFrom {
    from?:SwapFromType
}
export const SwapFrom: React.FC<iSwapFrom> = ({from}) => {
    return (
      <div className="SwapFrom">
        {from &&
        <div className='SwapFrom-body'>
            <div className='SwapFrom-body__icon'>
            </div>
            <div className='SwapFrom-body__currency'>
                <span className='SwapFrom-body__token-name'>{from.tokenName}</span>
                <span className='SwapFrom-body__full-name'>{from.fullName}</span>
                <span className='SwapFrom-body__balance'>Balance:{from.balance}</span>
            </div>
            <div className='SwapFrom-body__amount'>
            <span className='SwapFrom-body__token-pay'>Pay</span>
            <span className='SwapFrom-body__token-amount'>{from.amount}</span>
            <span className='SwapFrom-body__token-usd'>${from.usd}</span>
            </div>
        </div>
        }
      </div>
    );
};
