import React, { Component} from 'react';
import styles from "./index.module.scss";
import {Icon} from 'antd';

//公共尾部
class Footer extends Component{
    constructor(props) {
        super(props);
        this.state={
            git:"https://github.com/justin107",
            icp:"http://www.beian.miit.gov.cn",
            ghs:"http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=42011202001613",
            weibo:"https://weibo.com/justin107"
        }
    }

    componentDidUpdate() {

    }

    componentDidMount(){

    }

    componentWillUnmount(){

    }



    render(){
        return(
            <div className={styles.footer}>
                <div className="footLink">
                    <i className="ico" ref="github">
                        <a href={this.state.git} target="_blank" rel='noreferrer noopener'><Icon type="github"  style={{ fontSize: '24px'}}  /></a>
                    </i>
                    <i className="ico" ref="weibo">
                        <a href={this.state.weibo} target="_blank" rel='noreferrer noopener'><Icon type="weibo-circle" style={{ fontSize: '24px'}}  /></a>
                    </i>
                </div>
                <div className={"copyright"}>Copyright &copy;{new Date().getFullYear()} All Rights Reserved</div>
                <div className={"icp"}>
                    <a href={this.state.icp} target="_blank" rel='noreferrer noopener'>鄂ICP备 15001658号-2</a>
                </div>
                <div className="ghs"><img src="assets/ghs.png" alt="42011202001613" />
                    <a href={this.state.ghs} target="_blank" rel='noreferrer noopener'>鄂公网安备 42011202001613号</a>
                </div>
            </div>
        )
    }
}

export default Footer
