import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import Home from "../pages/home/index"
import Welcome from "../pages/welcome/index"
import Foot from "../components/foot/index"

import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;

const routes = [
    {
        path: "/",
        exact: true,
        component: Welcome
    },
    {
        path: "/home",
        component: Home
    },
];



function AppRouter() {
    const layout={
        "height": "100%",
        "backgroundColor": "#282c34"
    };

    return (
        <Router>
            <Layout style={layout}>
                {/*<Header>*/}
                    {/*<nav>*/}
                    {/*    <ul>*/}
                    {/*        <li>*/}
                    {/*            <Link to="/">index</Link>*/}
                    {/*        </li>*/}
                    {/*        <li>*/}
                    {/*            <Link to="/home">Home</Link>*/}
                    {/*        </li>*/}
                    {/*    </ul>*/}
                    {/*</nav>*/}
                {/*</Header>*/}
                <Content className={"main"}>
                    {routes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            component={route.component}
                        />
                    ))}
                </Content>
                <Footer style={{backgroundColor: "#282c34"}}>
                    <Foot />
                </Footer>
            </Layout>


            {/*<div className={"page"}>*/}



            {/*</div>*/}
        </Router>
    );
}

export default AppRouter;