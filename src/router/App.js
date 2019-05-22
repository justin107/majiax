import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import Home from "../pages/home/index"
import Welcome from "../pages/welcome/index"
import Footer from "../components/foot/index"

const routes = [
    {
        path: "/",
        component: Welcome
    },
    {
        path: "/home",
        component: Home
    },
];

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
}

function AppRouter() {
    return (
        <Router>
            <div className={"page"}>
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

                <main className={"main"}>
                {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
                </main>
                <Footer />

            </div>
        </Router>
    );
}

export default AppRouter;