import React, { Component,useState, useEffect  } from 'react';
import "./index.scss"

// 子组件
class Clock extends Component {
    constructor(props) {
        super(props);
        this.state ={date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>`Hello, world!`</h1>
                <h2>It is {this.state.date.getSeconds()}.</h2>
            </div>
        )
    }
}


function Example() {
    const [count, setCount] = useState(10);

    // 相当于 componentDidMount 和 componentDidUpdate:
    useEffect(() => {
        // 使用浏览器的 API 更新页面标题
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}


// 父组件
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
    }

    handleClick = (e) => {
        e.preventDefault();
        console.log(`this is:`, this);
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    };

    render() {
        return (
            <div>
                <Clock />

                <Example/>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}1111
                </button>
                <button className="test"
                        onClick={this.handleClick}>Load
                </button>
            </div>
        );
    }
}

export default Home;