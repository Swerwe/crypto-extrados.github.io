import * as React from 'react';
import './BalanceChart.scss';
import {Chart as ChartJS, PointElement, LineElement} from 'chart.js';
import type { ChartData } from 'chart.js';
ChartJS.register(PointElement,LineElement);
import { GradientBgPlugin } from './GradientBgPlugin';
import { Line } from 'react-chartjs-2';
import { DateStatistic } from '../../models/DateStatistic';
const data:DateStatistic[] = [
    {"date": "2024-04-01", "value": 10},
    {"date": "2024-04-02", "value": 11},
    {"date": "2024-04-03", "value": 12},
    {"date": "2024-04-04", "value": 13},
    {"date": "2024-04-05", "value": 14},
    {"date": "2024-04-06", "value": 10},
    {"date": "2024-04-07", "value": 9},
    {"date": "2024-04-08", "value": 12},
    {"date": "2024-04-01", "value": 10},
    {"date": "2024-04-02", "value": 11},
    {"date": "2024-04-03", "value": 12},
    {"date": "2024-04-04", "value": 13},
    {"date": "2024-04-05", "value": 14},
    {"date": "2024-04-06", "value": 10},
    {"date": "2024-04-07", "value": 9},
    {"date": "2024-04-08", "value": 12},
    {"date": "2024-04-01", "value": 10},
    {"date": "2024-04-02", "value": 11},
    {"date": "2024-04-03", "value": 12},
    {"date": "2024-04-04", "value": 13},
    {"date": "2024-04-05", "value": 14},
    {"date": "2024-04-06", "value": 10},
    {"date": "2024-04-07", "value": 9},
    {"date": "2024-04-08", "value": 12},
    {"date": "2024-04-01", "value": 10},
    {"date": "2024-04-02", "value": 11},
    {"date": "2024-04-03", "value": 12},
    {"date": "2024-04-04", "value": 13},
    {"date": "2024-04-05", "value": 14},
    {"date": "2024-04-06", "value": 10},
    {"date": "2024-04-07", "value": 9},
    {"date": "2024-04-08", "value": 12},
    {"date": "2024-04-01", "value": 10},
    {"date": "2024-04-02", "value": 11},
    {"date": "2024-04-03", "value": 22},
    {"date": "2024-04-04", "value": 23},
    {"date": "2024-04-05", "value": 24},
    {"date": "2024-04-06", "value": 20},
    {"date": "2024-04-07", "value": 29},
    {"date": "2024-04-08", "value": 22},
    {"date": "2024-04-07", "value": 20},
    {"date": "2024-04-08", "value": 22},
    {"date": "2024-04-08", "value": 19},
    {"date": "2024-04-04", "value": 13},
    {"date": "2024-04-05", "value": 14},
    {"date": "2024-04-06", "value": 10},
    {"date": "2024-04-07", "value": 9},
    {"date": "2024-04-08", "value": 12},
    {"date": "2024-04-01", "value": 10},
    {"date": "2024-04-02", "value": 11},
    {"date": "2024-04-03", "value": 12},
    {"date": "2024-04-04", "value": 13},
    {"date": "2024-04-05", "value": 14},
    {"date": "2024-04-06", "value": 10},
    {"date": "2024-04-07", "value": 9},
    {"date": "2024-04-08", "value": 12},
    {"date": "2024-04-08", "value": 12},
    {"date": "2024-04-01", "value": 10},
    {"date": "2024-04-02", "value": 11},
    {"date": "2024-04-03", "value": 12},
    {"date": "2024-04-04", "value": 13},
    {"date": "2024-04-05", "value": 14},
    {"date": "2024-04-06", "value": 10},
    {"date": "2024-04-07", "value": 9},
    {"date": "2024-04-08", "value": 12},
    {"date": "2024-04-01", "value": 10},
    {"date": "2024-04-02", "value": 11},
    {"date": "2024-04-03", "value": 12},
    {"date": "2024-04-04", "value": 13},
    {"date": "2024-04-05", "value": 14},
    {"date": "2024-04-06", "value": 10},
    {"date": "2024-04-07", "value": 9},
    {"date": "2024-04-08", "value": 12},
    {"date": "2024-04-08", "value": 12},
    {"date": "2024-04-01", "value": 10},
    {"date": "2024-04-02", "value": 11},
    {"date": "2024-04-03", "value": 12},
    {"date": "2024-04-04", "value": 13},
    {"date": "2024-04-05", "value": 14},
    {"date": "2024-04-06", "value": 10},
    {"date": "2024-04-07", "value": 9},
    {"date": "2024-04-08", "value": 12},
    {"date": "2024-04-01", "value": 10},
    {"date": "2024-04-02", "value": 11},
    {"date": "2024-04-03", "value": 12},
    {"date": "2024-04-04", "value": 13},
    {"date": "2024-04-05", "value": 14},
    {"date": "2024-04-06", "value": 10},
    {"date": "2024-04-07", "value": 9},
    {"date": "2024-04-08", "value": 12},
];
const dates = data.map(item => item.date);
const values = data.map(item => item.value);
const chartData:ChartData<'line'> = {
    labels: dates,
    datasets: [
        {
            label: "Sales: $",
            borderColor:"red",
            data: values,
            borderWidth: 3,
            pointRadius:0
        }
    ]
};
export const BalanceChart: React.FC = () => {
    return (
      <div className="BalanceChart">
        <div className='graph'>
            <Line 

                data={chartData}
                plugins={[GradientBgPlugin]}
                options={{
                    
                    
                    responsive: true,
                    interaction: {
                        
                        intersect: false,
                      },
                    scales: {
                        x: {
                            grid: {
                            display: false
                            }
                        },
                        y: {
                            grid: {
                            display: false
                            },
                            suggestedMin: 5,
                            suggestedMax: 20
                        }
                    },
                }}
            />
        </div>

      </div>
    );
};
