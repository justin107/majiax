import React, { Component} from 'react';
import styles from "./index.module.scss"

class Footer extends Component{
    render(){
        return(
            <div className={styles.footer}>
                <div className={"copyright"}>Copyright &copy;{new Date().getFullYear()} Justin All Rights Reserved</div>
                <div className={"icp"}>
                    <a href={"http://www.beian.miit.gov.cn"} >鄂ICP备 15001658号-2</a>
                </div>
                <div className={"ghs"}><img src="assets/ghs.png" alt="42011202001613" />
                    <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=42011202001613">鄂公网安备 42011202001613号</a>
                </div>
            </div>
        )
    }
}

export default Footer

// {
//     "src": "favicon.ico",
//     "sizes": "64x64 32x32 24x24 16x16",
//     "type": "image/x-icon"
// }