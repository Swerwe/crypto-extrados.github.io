import * as React from 'react';
import './GreedIndexChart.scss';
import { Progress, ConfigProvider} from 'antd';
import type { ProgressProps } from 'antd';

const conicColors: ProgressProps['strokeColor'] = {
    '0%': '#8774fb',
    '50%': '#54b2e7',
    '100%': '#22bec2',
};

export const GreedIndexChart: React.FC = () => {
    const [greedValue, setGreenValue] = React.useState<number | undefined>(undefined);
    const fetchGreed = async () => {
        setGreenValue(76); // emulate async due limit of endpoints
    };
    React.useEffect(() => {
        fetchGreed();
    }, []);
    return (
        <div className='GreedIndexChart'>
            <h1 className='greed-header'>Greed Index</h1>
            <ConfigProvider theme = {{
                token:{
                    colorText:"#fff"
                }
            }}>
                <Progress size={220} className='greed-chart' type="dashboard" percent={greedValue} strokeColor={conicColors} />            
            </ConfigProvider>
        </div>
    );
};