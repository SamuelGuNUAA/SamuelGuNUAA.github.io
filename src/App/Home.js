import React, {Component} from 'react';

import { Row, Col, Card, Icon, Avatar, Progress } from 'antd';
import imgURL from '../img/SG.jpg';

export default class HomePageView extends Component{
    render(){
        const { Meta } = Card;
        return (
            <div style={{ background: '#ECECEC', padding: '0'}}>
                <div style={{ padding: '30px 30px 0 30px'}}>
                <Row>
                    <Col span={12}>
                        <div className="center-location">
                        <h1>I'M SAMUEL GU</h1>
                        <p>FRONTEND / FULLSTACK DEVELOPER</p>
                        </div>
                        <div className="loaction-home">
                        <a href="https://www.linkedin.com/in/samuel-gu-288727101/" target="_blank"><Icon type="linkedin" className="overwrite_anticon--homepage"/></a>
                        <a href="https://github.com/SamuelGuNUAA" target="_blank"><Icon type="github" className="overwrite_anticon--homepage"/></a>
                        <a href="https://www.facebook.com/samuel.gu.568" target="_blank"><Icon type="facebook" className="overwrite_anticon--homepage"/></a>
                        <a href="https://twitter.com/SamuelGu_NUAA" target="_blank"><Icon type="twitter" className="overwrite_anticon--homepage"/></a>
                        </div>
                    </Col>

                    <Col span={12}>
                        <Card
                            hoverable={true}
                            style={{ width: 350, height: 350, float: 'right', marginRight: 200 }}
                            cover={<img alt="Samuel" src={imgURL} className="resume_image"/>}
                        >
            
                        </Card>
                    </Col>                    
                </Row>
                </div>

                <div style={{ background: '#FFF'}}>

                <Card bordered={false} className="aboutme_style">
                <h2>About me</h2>
                            <p>I witnessed how the sands transformed into ASICs in AMD and NXP, how computer systems started up by software in ASUS, and now, I step into a new exciting world of information technology as a Front End & Full Stack developer.
                            I enjoy taking challenges, working with talented people, fulfilling customer requirements, which I can learn from and continually enhance my knowledge, skills and workflow.
                            My skills include HTML, CSS, Javascript, React, jQuery, ES6, .net, C, Assembly, Git, Jira, Bitbucket etc.</p>
                </Card>


                <div style={{ background: '#FFF', display:'flex', flexDirection: 'row', justifyContent:'center'}}>

                    <Progress style={{ background: '#FFF'}} type="circle" percent={90} width={80} status="active" />
                    <p className="home_skill-desc">HTML5<br/>CSS3<br/>Javascript</p>

                    <Progress style={{ background: '#FFF'}} type="circle" percent={85} width={80}status="active" />
                    <p className="home_skill-desc">ReactJS<br/>C# .Net</p>
  
                    <Progress type="circle" percent={90} width={80} status="active" />
                    <p className="home_skill-desc">Agile<br/>Jira<br/>Git</p>

                </div>

                </div>
            </div>
        )
    }
}