import React, {Component} from 'react';

import { Carousel } from 'antd';

export default class ProjectView extends Component{
    render(){
        return (
          <div>
            <div>
              <p>TBD</p>
              <Carousel autoplay style={{marginTop: 20, display: 'none'}}>
                <div>{<img alt="example" src="https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike180%2C5%2C5%2C180%2C60/sign=9b2bf87ebbfb43160e12722841cd2d46/37d3d539b6003af39cc144d53c2ac65c1038b608.jpg" />}</div>
                <div>{<img alt="example" src="https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike180%2C5%2C5%2C180%2C60/sign=9b2bf87ebbfb43160e12722841cd2d46/37d3d539b6003af39cc144d53c2ac65c1038b608.jpg" />}</div>
                <div>{<img alt="example" src="https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike180%2C5%2C5%2C180%2C60/sign=9b2bf87ebbfb43160e12722841cd2d46/37d3d539b6003af39cc144d53c2ac65c1038b608.jpg" />}</div>
                <div>{<img alt="example" src="https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike180%2C5%2C5%2C180%2C60/sign=9b2bf87ebbfb43160e12722841cd2d46/37d3d539b6003af39cc144d53c2ac65c1038b608.jpg" />}</div>
              </Carousel>
          </div>
        </div>
        )
    }
}