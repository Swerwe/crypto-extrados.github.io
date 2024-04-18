import * as React from 'react';
import './StatisticSales.scss';
import { IStatistics } from '../../models/IStatistics';

interface IStatisticSalesProps {
    name: string;
    chartColor: string;
    data: IStatistics;
}

export const StatisticSales: React.FC<IStatisticSalesProps> = (props) => {
    return (
      <div className="StatisticSales">
        
      </div>
    );
};
