import React, {Component} from 'react';

import { Layout } from 'antd';

export default function Footer(){
        const{ Footer } = Layout;
        return(
            <Footer style={{ textAlign: 'center', background: '#FFF'}}>
                Ant Design ©2018 Created by Samuel Gu
            </Footer>
        );
}