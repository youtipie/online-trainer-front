import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Profile from "../pages/Profile/Profile";
import {routes} from "./routes";

const Router = () => {
    const routeItems = () => {
        if (!routes || !routes.length) {
            return null;
        }

        return routes.map(route =>
            <Route key={route.route} exact={route.exact} path={route.route} element={route.component}/>
        );
    }

    return (
        <BrowserRouter>
            <Footer/>
            <Routes>
                <Route path="/" element={<Profile/>}/>
                {routeItems()}
            </Routes>
        </BrowserRouter>
    );
};

export default Router;