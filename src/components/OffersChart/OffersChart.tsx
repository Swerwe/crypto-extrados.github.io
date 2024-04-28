import * as React from 'react';
import './OffersChart.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchOffers } from '../../store/reducers/ActionCreators';
import { StatisticsChart } from '../StatisticsChart/StatisticsChart';
import { RevenuePercent } from '../Swap/SwapBody/SwapTo/RevenuePercent/RevenuePercent';
//import { IStatistics } from '../../models/IStatistics';

export const OffersChart: React.FC = () => {
  const dispatch = useAppDispatch();
  const {offers} = useAppSelector(state => state.offersReducer);
  React.useEffect(() => {
    dispatch(fetchOffers());
  },[dispatch]);
    return (
      <div className="OffersChart">
        <h2 className='OffersChart__header'>Offers Statistic</h2>
        {offers?.total && <div className='OffersChart__amount'>${offers.total}</div>}
        {offers?.revenuePercent && <RevenuePercent className='revenue' revenuePercent={offers.revenuePercent} />}
        {offers && <StatisticsChart color="#23d4d7" statistics={offers.data} />}
      </div>
    );
};
