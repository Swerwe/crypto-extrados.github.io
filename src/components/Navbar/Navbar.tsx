import * as React from 'react';
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
                <Menu className='navbar-menu' style={{width:"90vw", marginLeft:"70px", marginTop:"20px", display:"flex",gap:"5px"}} theme='dark' mode="horizontal">
                    <Menu.Item className='navbar-item' key="home">
                        <Link to="/crypto-extrados.github.io/overview">Overview</Link>
                    </Menu.Item>
                    <Menu.Item className='navbar-item' key="profile">
                        <Link to="/crypto-extrados.github.io/tokens">Tokens</Link>
                    </Menu.Item>
                </Menu>
            </ConfigProvider>

        </div>
    );
}
