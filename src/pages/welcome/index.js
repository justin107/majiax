import React, { Component} from 'react';
import styles from "./index.module.scss";

class Welcome extends Component{
    linkTo=(url,name)=>{

    }

    render(){
        return (
            <div className={styles.welcome}>
                <div className={styles.mix3d}></div>
                <div className={styles.h1}>
                    {"Justin's World!"}
                </div>
                <div className={styles.h2}>
                    {("new beginning new journey").toUpperCase()}
                </div>
            </div>
        )
    }
}

export default Welcome