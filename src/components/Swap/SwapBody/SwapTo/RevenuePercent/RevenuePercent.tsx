import * as React from 'react';
import './RevenuePercent.scss';

interface IRevenuePercentProps {
    revenuePercent:number;
    className?: string;
}

export const RevenuePercent: React.FC<IRevenuePercentProps> = ({revenuePercent,className}) => {
    const isPositive = revenuePercent>0;
    return (
      <div className={["RevenuePercent",className].join(' ')}>
        {isPositive?
        <div className='percent' style={{color:"#099f96"}}>(+{revenuePercent.toFixed(1)}%)</div>
        : <div className='percent' style={{color:"#ff004c"}}>(+{revenuePercent.toFixed(1)}%)</div>}
      </div>
    );
};
