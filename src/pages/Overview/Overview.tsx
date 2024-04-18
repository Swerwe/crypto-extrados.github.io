import * as React from 'react';
import './Overview.scss';
import { Swap } from '../../components/Swap/Swap';
import { SalesChart } from '../../components/SalesChart/SalesChart';
import { OffersChart } from '../../components/OffersChart/OffersChart';
import { BalanceChart } from '../../components/BalanceChart/BalanceChart';

export const Overview: React.FC = () => {
    return (
      <div className="Overview">
        <Swap />
        <SalesChart />
        <OffersChart />
        <BalanceChart />
      </div>
    );
};
