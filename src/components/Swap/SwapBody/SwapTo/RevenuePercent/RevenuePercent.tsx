import * as React from 'react';
import './RevenuePercent.scss';

interface IRevenuePercentProps {
    revenuePercent:number;
}

export const RevenuePercent: React.FC<IRevenuePercentProps> = ({revenuePercent}) => {
    const isPositive = revenuePercent>0;
    return (
      <div className="RevenuePercent">
        {isPositive?
        <div className='percent' style={{color:"#099f96"}}>(+{revenuePercent.toFixed(1)}%)</div>
        : <div className='percent' style={{color:"#ff004c"}}>(+{revenuePercent.toFixed(1)}%)</div>}
      </div>
    );
};
