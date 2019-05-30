import React, { Component} from 'react';
import styles from "./index.module.scss";

class Welcome extends Component{
    linkTo=(url,name)=>{

    }

    render(){
        return (
            <div className={styles.welcome}>
                <img alt="apple" src="assets/covers-apple-outline.jpg" />

                <div className={styles.h1}>
                    {(" justin's world!").toUpperCase()}
                </div>
                <div className={styles.h2}>
                    {("new beginning new journey").toUpperCase()}
                </div>
            </div>
        )
    }
}

export default Welcome