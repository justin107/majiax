import React, { Suspense, lazy } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";


const Home = lazy(() => import('../pages/home/index.jsx'));
const Test = lazy(() => import('../pages/test/index.jsx'));

function RouteConfig(){
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/Test" component={Test}/>
                </Switch>
            </Suspense>
        </Router>
    )
}

export default RouteConfig