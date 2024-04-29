import * as React from 'react';
import './BalanceChart.scss';
import {Chart as ChartJS, PointElement, LineElement} from 'chart.js';
import type { ChartData } from 'chart.js';
ChartJS.register(PointElement,LineElement);
import { formatDate } from '../../helpers/formatDate';
import { GradientBgPlugin } from './GradientBgPlugin';
import { Line } from 'react-chartjs-2';
import { ballanceData } from './data/balanceData';

const dates = ballanceData.map(item => formatDate(item.date));
const values = ballanceData.map(item => item.value);
const chartData:ChartData<'line'> = {
    labels: dates,
    datasets: [
        {
            label: "$",
            borderColor:"#fff",
            data: values,
            borderWidth: 1,
            pointRadius:0,
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

                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    layout:{
                        padding:{
                            top:20,
                            left:10,
                            bottom:8,
                            right: 8
                        }
                    },
                    responsive: true,
                    interaction: {
                        
                        intersect: false,
                      },
                    scales: {
                        x: {
                            grid: {
                            display: false
                            },
                            ticks:{
                                color:"#adaeae",
                            },
                        },
                        y: {
                            ticks:{
                                color:"#adaeae",
                            },
                            grid: {
                                display: false
                            },
                            suggestedMin: 5,
                            suggestedMax: 35,
                        }
                    },
                }}
            />
        </div>

      </div>
    );
};
