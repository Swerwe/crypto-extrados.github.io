import * as React from 'react';
import './StatisticsChart.scss';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement} from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);
import { Bar } from 'react-chartjs-2';
import { DateStatistic } from '../../models/DateStatistic';
import { formatDate } from '../../helpers/formatDate';
interface IStatisticsChartProps {
    color: string;
    statistics: DateStatistic[];
}

export const StatisticsChart: React.FC<IStatisticsChartProps> = ({ statistics, color = "red" }) => {
    const dates: string[] = statistics.map(item => formatDate(item.date));
    const values: number[] = statistics.map((item) => item.value);
    const chartData = {
        labels: dates,
        datasets: [
            {
                label: "$",
                backgroundColor: color,
                data: values,
                borderWidth: 1,
                barPercentage: 0.1,
                barThickness: 10,
                borderRadius: 5
            }
        ]
    };

    return (
        <div className="StatisticsChart">
            <Bar
                className='bar'
                data={chartData}
                options={{
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        x: {
                            beginAtZero: true,
                            grid:{
                                display:false
                            }
                        },
                        y: {
                            display: false,
                                grid:{
                                display:false
                            }
                        }
                    }
                }}
            />
        </div>
    );
};
