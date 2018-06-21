import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import '../node_modules/antd/dist/antd.css';

import Header from './App/Header';
import Footer from './App/Footer';
import Content from './App/Content';


import { Layout } from 'antd';

class App extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <Content />
        <Footer />
      </Layout>
    );
  }
}

export default App;
