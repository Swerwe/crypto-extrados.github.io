import * as React from 'react';
import './SwapTo.scss';
import { SwapToType } from '../../../../models/ISwap';
import { RevenuePercent } from './RevenuePercent/RevenuePercent';
interface ISwapTo {
    to?: SwapToType
}
export const SwapTo: React.FC<ISwapTo> = ({to}) => {
    return (
        <div className="SwapTo">
          {to &&
          <div className='SwapTo-body'>
              <div className='SwapTo-body__icon'>
              </div>
              <div className='SwapTo-body__currency'>
                  <span className='SwapTo-body__token-name'>{to.tokenName}</span>
                  <span className='SwapTo-body__full-name'>{to.fullName}</span>
                  <span className='SwapTo-body__balance'>Balance:{to.balance}</span>
              </div>
              <div className='SwapTo-body__amount'>
              <span className='SwapTo-body__token-receive'>Receive</span>
              <span className='SwapTo-body__token-amount'>{to.amount}</span>
              <span className='SwapTo-body__token-usd'>
                ${to.usd}<RevenuePercent revenuePercent={to.revenuePercent} />
              </span>
              </div>
          </div>
          }
        </div>
      );
  };
  