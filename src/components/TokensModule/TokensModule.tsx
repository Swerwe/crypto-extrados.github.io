import * as React from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { fetchTokens } from '../../store/reducers/ActionCreators';
import { Table, ConfigProvider } from 'antd';
import { columns } from './columns';
import './TokensModule.scss';
interface ITokensModuleProps {
    className?:string;
    size?: 'small' | 'middle' | 'large';
}
export function TokensModule({className,size='small'}:ITokensModuleProps) {
    const dispatch = useAppDispatch();
    const {tokens} = useAppSelector((state) => state.tokensReducer);
    React.useEffect(()=>{
        dispatch(fetchTokens());
    },[dispatch]);

    return (
        <div className={['TokensModule',className].join(" ")}>
            <ConfigProvider theme={{
                components: {
                    Table: {
                        headerColor:"#7d7b89",
                        borderColor:"#2b293f",
                        headerSplitColor:"#2b293f"
                    },
                },
                token:{
                    colorBgContainer:"#211d37",
                    colorText:"#fff",
                    colorPrimary:"#757575",
                }
            }}>
                <Table columns={columns} dataSource={tokens} size={size} />
            </ConfigProvider>

        </div>
    );
}
