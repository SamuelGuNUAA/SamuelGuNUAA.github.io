import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import { Layout, Menu, Breadcrumb, Icon} from 'antd';

import '../App.css';
import imgURL_resume from '../img/Samuel_Gu_Resume.pdf';

export default class Header extends Component{
    state = {
        current: 'home',
      }
      handleClick = (e) => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      }

    render(){
        const { Header } = Layout;

        return(
            <Header style={{ background: '#ECECEC', position: 'fixed', zIndex: 1, width: '100%' }}>
                <div className="logo" />
                <Menu                    
                    selectedKeys={[this.state.current]} 
                    mode="horizontal"
                    style={{ background: '#ECECEC', lineHeight: '64px' }}
                    onClick={this.handleClick} >
                    <Menu.Item key="home">
                        <Link to="/"></Link>
                        <Icon type="home" />Home  
                    </Menu.Item>
                    <Menu.Item key="resume">
                        <Link to="/resume"></Link>
                        <Icon type="book" />Resume  
                    </Menu.Item>
                    <Menu.Item key="project">
                        <Icon type="code-o" />Projects
                        <Link to="/project"></Link>
                    </Menu.Item>
                    <Menu.Item key="contact">
                        <Icon type="idcard" />Contact
                        <Link to="/contact"></Link>
                    </Menu.Item>
                    <Menu.Item key="download" style={{float:'right'}}>
                        <Icon type="login" />Download
                        <a href={imgURL_resume} download="aaa"></a>
                    </Menu.Item>
                </Menu>
            </Header>

        )
    }
}