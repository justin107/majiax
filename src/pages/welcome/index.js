import React, { Component} from 'react';
import styles from "./index.module.scss";

class Welcome extends Component{
    linkTo=(url,name)=>{

    }

    render(){
        return (
            <div className={styles.welcome}>
                <img src="https://camo.githubusercontent.com/a43de8ca816e78b1c2666f7696f449b2eeddbeca/68747470733a2f2f63646e2e7261776769742e636f6d2f7075676a732f7075672d6c6f676f2f656563343336636565386664396431373236643738333963626539396431663639343639326330632f5356472f7075672d66696e616c2d6c6f676f2d5f2d636f6c6f75722d3132382e737667" />
                <div className={styles.h1}>
                    {("welcome to my world!").toUpperCase()}
                </div>
                <div className={styles.h2}>
                    {("new beginning new journey").toUpperCase()}
                </div>
            </div>
        )
    }
}

export default Welcome