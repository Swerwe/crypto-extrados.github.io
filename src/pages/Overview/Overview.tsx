import * as React from 'react';
import './Overview.scss';
import { GreedIndexChart } from '../../components/GreedIndexChart/GreedIndexChart';
import { TokensModule } from '../../components/TokensModule/TokensModule';
import { Swap } from '../../components/Swap/Swap';
import { SalesChart } from '../../components/SalesChart/SalesChart';
import { OffersChart } from '../../components/OffersChart/OffersChart';
import { BalanceChart } from '../../components/BalanceChart/BalanceChart';

export const Overview: React.FC = () => {
  return (
    <div className="Overview">


      <div className='balance-charts'>
        <BalanceChart />
        <Swap />
      </div>
      <div className='small-charts'>
        <SalesChart />
        <OffersChart />
        <GreedIndexChart />
      </div>
      <TokensModule className='tokens-table' />

    </div>
  );
};
