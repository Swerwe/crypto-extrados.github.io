import * as React from 'react';
import { green, red } from '@ant-design/colors';
import { Progress, ConfigProvider } from 'antd';
import "./SupplyProgress.scss";
interface ISupplyProgressProps {
    percent: number;
}

const SupplyProgress: React.FunctionComponent<ISupplyProgressProps> = ({ percent }) => {
    const strokeColor = (percent: number) => {
        return percent < 30 ? "#8673fa" : "#25b8bd";
    };
    return (
        <ConfigProvider
            theme={{
                components:{
                    Progress:{
                        remainingColor:"#48465a"
                    }
                }
            }}
        >
            <Progress format={(percent) => {
                return `+${percent}%`;
            }} percent={percent} steps={25}  size="small" strokeColor={strokeColor(percent)} />
        </ConfigProvider>
    );
};

export default SupplyProgress;
