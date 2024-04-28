import * as React from 'react';
import './Overview.scss';
import { TokensModule } from '../../components/TokensModule/TokensModule';
// import { Swap } from '../../components/Swap/Swap';
// import { SalesChart } from '../../components/SalesChart/SalesChart';
// import { OffersChart } from '../../components/OffersChart/OffersChart';

export const Overview: React.FC = () => {
    return (
      <div className="Overview">
        {/* <Swap /> */}
        {/* <SalesChart /> */}
        {/* <OffersChart /> */}
        <TokensModule />
      </div>
    );
};
