import React, { Component} from 'react';
import styles from "./index.module.scss"

//公共尾部
class Footer extends Component{
    constructor(props) {
        super(props);
        this.state={
            git:"https://github.com/justin107",
            icp:"http://www.beian.miit.gov.cn",
            ghs:"http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=42011202001613"
        }
    }

    componentDidMount(){

    }

    render(){
        return(
            <div className={styles.footer}>
                <div className="footLink"><i className="ico ico-github"><a href={this.state.git} target="_blank" rel='noreferrer noopener'><img src="assets/github.png" alt="github" /></a></i></div>
                <div className={"copyright"}>Copyright &copy;{new Date().getFullYear()} Justin All Rights Reserved</div>
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
