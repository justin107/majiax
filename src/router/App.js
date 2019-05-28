import React, {
    Suspense,
    lazy
} from "react";
import {
    BrowserRouter as Router,
    Route,
    // Link,
    Switch,
    // Redirect
} from "react-router-dom";
import { Layout } from 'antd';

// import Home from "../pages/home/index"
// import Welcome from "../pages/welcome/index"
// import Foot from "../components/foot/index"

const Home = lazy(() => import('../pages/home/index'));
const Welcome = lazy(() => import('../pages/welcome/index'));
const Foot = lazy(() => import('../components/foot/index'));


const {
    // Header,
    Footer,
    Content } = Layout;

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
            <Suspense fallback={<div>Loading...</div>}>
            <Layout style={layout}>
                {/*<Header>*/}
                {/*</Header>*/}
                <Content className={"main"}>
                    <Switch>
                    {routes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            component={route.component}
                        />
                    ))}
                    </Switch>
                </Content>
                <Footer style={{backgroundColor: "#282c34"}}>
                    <Foot />
                </Footer>
            </Layout>
            </Suspense>
        </Router>
    );
}

export default AppRouter;