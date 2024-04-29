import * as React from 'react';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { ConfigProvider, Menu } from 'antd';
import { Link } from 'react-router-dom';

export function Navbar() {
    return (
        <div className='Navbar'>
            <ConfigProvider
                theme={{
                    components: {
                        Menu: {
                            darkItemSelectedBg:"#231f36",
                            darkItemBg:"transparent",
                            horizontalItemBorderRadius: 10,
                            itemPaddingInline:10,
                            itemMarginBlock:10,
                            iconMarginInlineEnd:10
                        },
                    },
                }}
            >
                <Menu style={{width:"90vw", marginLeft:"70px", marginTop:"20px"}} theme='dark' mode="horizontal">
                    <Menu.Item className='navbar-item' key="home" icon={<HomeOutlined />}>
                        <Link to="/overview">Overview</Link>
                    </Menu.Item>
                    <Menu.Item className='navbar-item' key="profile" icon={<UserOutlined />}>
                        <Link to="/tokens">Tokens</Link>
                    </Menu.Item>
                </Menu>
            </ConfigProvider>

        </div>
    );
}
