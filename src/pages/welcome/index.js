import React, { Component} from 'react';

import "./index.scss"

class Welcome extends Component{
    render(){
        return(
            <div className={"welcome"}>
                <p>{("welcome to my world!").toUpperCase()}</p>
                <span>{("new beginning new journey").toUpperCase()}</span>
            </div>
        )
    }
}

export default Welcome