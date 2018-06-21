import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Routes from './Routes';

import { Layout, Menu, Icon } from 'antd';

export default function Content(){
    const { SubMenu } = Menu;
    const { Sider, Content } = Layout;
        return(
            <Content  style={{ padding: 0, marginTop: 64 }}>
                    <Content style={{ padding: 0, minHeight: 750 }}>
                        <div style={{ background: '#FCFCFC'}}>
                            <Routes />
                        </div>
                    </Content>

            </Content>
        );
}