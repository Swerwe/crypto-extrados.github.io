import type { TableProps } from 'antd';
import * as React from 'react';
import { IToken } from '../../models/IToken';
import SupplyProgress from './SupplyProgress/SupplyProgress';
interface DataType extends IToken{
    key:string;
}

export const columns: TableProps<DataType>['columns'] = [
    {
        title:"Name",
        dataIndex:"name",
        key:"name",

    },
    {
        title:"Price",
        dataIndex:"price",
        key:"price",
        render: (price) => <a>${price}</a>
    },
    {
        title:"Balance",
        dataIndex:"balance",
        key:"balance",
    },

    {
        title:"Market Cap",
        dataIndex:"marketCap",
        key:"marketCap",
        render: (marketCap) => <a>${marketCap.toLocaleString().replace(/\s/g, ',')}</a>
    },
    {
        title:"Volume (24H)",
        dataIndex:"volume",
        key:"volume",
        render: (volume) => <a>${volume.toLocaleString().replace(/\s/g, ',')}</a>
    },
    {
        title:"CIRC Supply",
        dataIndex:"circSupply",
        key:"circSupply",
        render: (percent) => <SupplyProgress percent={percent}/>
    }
];