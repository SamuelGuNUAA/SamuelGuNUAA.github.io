import React, {Component} from 'react';
import { Row, Col, Icon, Input, Button, List, Form } from 'antd';

import '../App.css';
import Recaptcha from 'react-recaptcha';
import GoogleApiWrapper from '../API/googlemap';

const FormItem = Form.Item;
//=============
class SendMessageForm extends React.Component{
    constructor(props){
        super(props);

        this.state={
          isVerified: false,
          userSubject:'',
          userMessage:'',
        };
    }

    componentDidMount() {
        // To disabled submit button at the beginning.
        this.props.form.validateFields();
      }

    verifyCallback=(result)=> {
        console.log('verifyCallback', result);
        if(result){
            this.setState({isVerified:true});
        }else{
            this.setState({isVerified:false});
        }
    }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { TextArea } = Input;
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
    // Only show error after a field is touched.
    const userNameError = isFieldTouched('userName') && getFieldError('userName');
    const passwordError = isFieldTouched('password') && getFieldError('password')

    return (
      <form action="mailto:samuelgu_nuaa@yahoo.com" enctype="text/plain">
        <input name="subject" value={this.state.userSubject} type="text" style={{display:'none'}}/>
        <textarea name="body" value={this.state.userMessage} style={{display:'none'}}/>
        <Form onSubmit={this.handleSubmit}>
            <Icon type="form"/> Give me a message
            <FormItem
            validateStatus={userNameError ? 'error' : ''}
            help={userNameError || ''}
          >
          {getFieldDecorator('Subject', {
            rules: [{ required: true, message: 'Please input your subject!' }],
          })(
            <Input placeholder="Subject" value ={this.state.userSubject} onChange={(e) => this.setState({userSubject:e.target.value})}/>
          )}
        </FormItem>

        <FormItem>
          {getFieldDecorator('Message', {
            
          })(
            <TextArea rows={6} placeholder="Message" value ={this.state.userMessage} onChange={(e) => this.setState({userMessage:e.target.value})}/>
          )}
        </FormItem>

        <FormItem>
          <Recaptcha
            render="explicit"
            sitekey="6Le-KF8UAAAAAOVANt44Vtwys4rBu8FEKMlMMU3o"
            onloadCallback={() => {}}       
            verifyCallback={this.verifyCallback}
          />
        </FormItem>
        
       
      </Form>
        <Button type="primary" htmlType="submit" disabled={!this.state.isVerified}>
            Send
        </Button>
  
      </form>
    );
  }
}

const WrappedSendMessageForm = Form.create()(SendMessageForm);
//=============
export default class ContactView extends Component{

    render(){
        const { TextArea } = Input;
        console.log("SGT12");

        return (
            <div>
                <Col span={12}>
                    <div style={{padding:'40px'}}>
                        <h1 className="Contact_h1-layout">Get in Touch</h1>
    
                        <div className="Btn_FlexLayout" >
                            <Icon type="pushpin-o" className="Icon_Layout"/>
                            <h3>South Brisbane, Australia</h3>
                        </div>
                        <div className="Btn_FlexLayout" >
                            <Icon type="mobile" className="Icon_Layout"/>
                            <h3>0435 842 801</h3>
                        </div>
                        <div className="Btn_FlexLayout" >
                            <Icon type="mail" className="Icon_Layout"/>
                            <h3>samuelgu_nuaa@yahoo.com</h3>
                        </div>
                        <div className="Btn_FlexLayout" >
                            <Icon type="check-circle-o" className="Icon_Layout"/>
                            <h3>Freelance Available</h3>
                        </div>

                        <div className="contact_googlemap-layout">
                            <GoogleApiWrapper />
                        </div> 
                    </div>

                                  
                </Col>

                <Col span={12}>
                    <div style={{padding:'40px'}}>
                        <h1 className="Contact_h1-layout">Contact Me</h1>
                        <WrappedSendMessageForm />
                    </div>
                </Col>
            </div>
        )
    }
}