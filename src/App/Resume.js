import React, {Component} from 'react';

import { Row, Col, Timeline, Card, Icon, Avatar, Modal} from 'antd';
import imgURL_JR from '../img/jiangren.png';
import imgURL_NUAA from '../img/nuaa.jpg';
import imgURL_AMD from '../img/amd.png';
import imgURL_NXP from '../img/NXP.png';
import imgURL_ASUS from '../img/ASUS.png';



export default class ResumeView extends Component{
    constructor(props){
        super(props)
        this.state=({ visible: Array(5).fill(false) });
    }

    showModal(i) {

            const visible = this.state.visible.slice();
            visible[i]= true;
            this.setState({visible:visible});

    }
 
    handleOk(e) {
      console.log(e);
      this.setState({
        visible: Array(5).fill(false),
      });
    }
    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: Array(5).fill(false),
        });
      }

    render(){
        const { Meta } = Card;
        return (
            <div>
                <Col span={1}>
                </Col>
                <Col span={11}>
                    <div className="resume_timeline-layout">
                    <h3>Education</h3>
                    
                    <Timeline style={{ paddingTop: 50 }}>
                        <Timeline.Item color="blue">
                            <Card
                                hoverable
                                style={{ width: 600 }}
                                cover={ <img alt="example" src={imgURL_JR} style={{width: 40, float: 'right', paddingRight: 10 }}/>}
                                onClick={()=>this.showModal(0)}
                            >
                                <Meta style={{ paddingTop: 25, paddingBottom: 20 }}
                                    title="Jiangren Full Stack Education (Brisbane)"
                                    description="March 2018 Jiangren"
                                />
                            </Card>
                            <Modal
                                
                                title="Frontend/Fullstack"
                                visible={this.state.visible[0]}
                                onOk={(e)=>this.handleOk()}
                                onCancel={this.handleCancel}
                            >
                                    <ul>
                                    <li>
                                        HTML5, CSS3, ES6
                                    </li>

                                    </ul>

                            </Modal>
                        </Timeline.Item>
                        <Timeline.Item color="blue">
                            <Card
                                hoverable
                                style={{ width: 600 }}
                                cover={ <img alt="example" src={imgURL_NUAA} style={{width: 50, float: 'right', paddingRight: 10 }}/>}
                                onClick={()=>this.showModal(1)}
                            >
                                <Meta style={{ paddingTop: 25, paddingBottom: 20 }}
                                    title="Computer Science and Technology (Bachelor's degree)"
                                    description="Sep 2001 - June 2005 Nanjing University of Aeronautics and Astronautics"
                                />
                            </Card>
                            <Modal
                                
                                title="Computer Science and Technology"
                                visible={this.state.visible[1]}
                                onOk={(e)=>this.handleOk()}
                                onCancel={this.handleCancel}
                            >
                                    <ul>
                                    <li>
                                        Assembly, C, C++
                                    </li>

                                    </ul>

                            </Modal>
                        </Timeline.Item>
                    </Timeline>
                    
                    </div>
                </Col>


                <Col span={11}>
                    <div className="resume_timeline-layout">
                    <h3>Experience</h3>
                    <Timeline style={{ paddingTop: 50 }}>
                        
                        <Timeline.Item color="blue">
                            <Card
                                hoverable
                                style={{ width: 600 }}
                                cover={ <img alt="example" src={imgURL_AMD} style={{ float: 'right', paddingRight: 10 }}/>}
                                onClick={()=>this.showModal(2)}
                            >
                                <Meta
                                    style={{ paddingTop: 25, paddingBottom: 20 }}
                                    title="Program Manager"
                                    description="2016-2017 AMD"
                                />
                                <p>AMD VGA ASIC engineering NPI program manager</p>
                            </Card>
                            <Modal
                                width="50%"
                                
                                title="Program Manager (2016-2017)"
                                visible={this.state.visible[2]}
                                onOk={(e)=>this.handleOk()}
                                onCancel={this.handleCancel}
                            >

                                    <ul>
                                    <li>
                                        Defined VGA ASIC development milestones from product bring-up, sample validation to mass production.
                                    </li>
                                    <li>
                                        Agile testing program developing life-cycle management by Jira.
                                    </li>
                                    <li>
                                        Worked with core team to achieve milestones and commit delivery schedules.
                                    </li>
                                    <li>
                                        Defined engineering services, manage engineering priorities and resources.
                                    </li>
                                    <li>
                                        Lessons learned presentation.
                                    </li>
                                    </ul>
                            </Modal>
                        </Timeline.Item>
                        <Timeline.Item color="blue">
                            <Card
                                hoverable
                                style={{ width: 600 }}
                                cover={ <img alt="example" src={imgURL_NXP} style={{ float: 'right', paddingRight: 10 }}/>}
                                onClick={()=>this.showModal(3)}
                            >
                                <Meta
                                    style={{ paddingTop: 25, paddingBottom: 20 }}
                                    title="Program Manager"
                                    description="2015-2016 Freescale/NXP"
                                />
                                <p>MPU Linux/Android software program manager</p>
                            </Card>
                            <Modal
                                width="50%"
                                title="Software Program Manager (2015-2016))"
                                visible={this.state.visible[3]}
                                onOk={(e)=>this.handleOk()}
                                onCancel={this.handleCancel}
                            >

                                <ul>
                                <li>
                                        Led technical product design review and program execution on Freescale MPU chipsets.
                                    </li>
                                    <li>
                                        Made and controlled budget for software team’s development.
                                    </li>
                                    <li>
                                        Planned and tracked software development schedule, risk report, revision release by MS Project, Sharepoint, Git, Jira.
                                    </li>
                                    <li>
                                        Held software team meeting as Agile development methodology.
                                    </li>
                                    <li> 
                                        Attended PMO regular meeting for project report.
                                    </li>
                                    <li>
                                        Participated in reviewing marketing requirements document to ensure the scope, schedule and cost are reasonable and achievable. 
                                    </li>
                                </ul>
                            </Modal>
                        </Timeline.Item>
                        <Timeline.Item color="blue">
                            <Card
                                hoverable
                                style={{ width: 600 }}
                                cover={ <img alt="example" src={imgURL_ASUS} style={{ float: 'right', paddingRight: 10 }}/>}
                                onClick={()=>this.showModal(4)}
                            >
                                <Meta
                                    style={{ paddingTop: 25, paddingBottom: 20 }}
                                    title="Software Engineer"
                                    description="2005-2015 ASUS"
                                />
                                <p>AMI BIOS software engineer</p>
                            </Card>
                            <Modal
                                width="50%"
                                title="Software Engineer (2005-2015)"
                                visible={this.state.visible[4]}
                                onOk={(e)=>this.handleOk()}
                                onCancel={this.handleCancel}
                            >
                                <ul>
                                    <li>
                                        Defined VGA ASIC development milestones from product bring-up, sample validation to mass production.
                                    </li>
                                    <li>
                                        Agile testing program developing life-cycle management by Jira.
                                    </li>
                                    <li>
                                        Worked with core team to achieve milestones and commit delivery schedules.
                                    </li>
                                    <li>
                                        Defined engineering services, manage engineering priorities and resources.
                                    </li>
                                    <li>
                                        Lessons learned presentation.
                                    </li>
                                </ul>
                            </Modal>
                        </Timeline.Item>
                    </Timeline>
                    </div>
                </Col>
                <Col span={1}>
                </Col>
            </div>
        )
    }
}