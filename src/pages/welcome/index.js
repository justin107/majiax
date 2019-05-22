import React, { Component} from 'react';
import styles from "./index.module.scss"

class Welcome extends Component{
    render(){
        return(
            <div className={styles.welcome}>
                <p>{("welcome to my world!").toUpperCase()}</p>
                <span>{("new beginning new journey").toUpperCase()}</span>
            </div>
        )
    }
}

export default Welcome