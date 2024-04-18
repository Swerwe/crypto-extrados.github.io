import * as React from 'react';
import './SalesChart.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchSales } from '../../store/reducers/ActionCreators';
import { StatisticsChart } from '../StatisticsChart/StatisticsChart';
import { RevenuePercent } from '../Swap/SwapBody/SwapTo/RevenuePercent/RevenuePercent';
//import { IStatistics } from '../../models/IStatistics';

export const SalesChart: React.FC = (props) => {
  const dispatch = useAppDispatch();
  const {sales, isLoading, error} = useAppSelector(state => state.salesReducer);
  React.useEffect(() => {
    dispatch(fetchSales());
  },[dispatch]);
    return (
      <div className="SalesChart">
        <h2 className='SalesChart__header'>Sales Statistic</h2>
        {sales?.total && <div className='SalesChart__amount'>${sales.total}</div>}
        {sales?.revenuePercent && <RevenuePercent className='revenue' revenuePercent={sales.revenuePercent} />}
        {sales && <StatisticsChart color="#8774fc" statistics={sales.data} />}
      </div>
    );
};
