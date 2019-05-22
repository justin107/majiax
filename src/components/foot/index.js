import React, { Component} from 'react';

import "./index.scss"

class Footer extends Component{
    render(){
        return(
            <div className={"footer"}>
                <p className={"copyright"}>Copyright &copy;{new Date().getFullYear()} Justin All Rights Reserved</p>
                <p className={"icp"}>
                    <a href={"http://www.beian.miit.gov.cn"} >鄂ICP备 15001658号-2</a>
                </p>
                <div className={"ghs"}><img src="assets/ghs.png" alt="" />
                    <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=42011202001613">鄂公网安备 42011202001613号</a>
                </div>
            </div>
        )
    }
}

export default Footer