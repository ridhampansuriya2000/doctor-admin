import React, { useCallback } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import {RouteType, NavConfigType, navConfig} from "./navConfig";

// interface Props {
//     navConfig: NavConfigType;
// }

const CustomRoutes: React.FC = () => {
    const role: string | null = JSON.stringify(localStorage.getItem("role"));
    const isLogin: string | null = localStorage.getItem("isLogin");

    const switchRoutes = useCallback((routes: RouteType[], privatesRoute: boolean) =>
            {
                console.log('routes',navConfig[role],role)

                return privatesRoute ? isLogin
                    ? routes?.map((route, key) => (
                        <Route
                            key={key}
                            path={route.path}
                            element={route.component}
                        />
                    ))
                    : <Navigate to="/login" />
                    :  routes?.map((route, key) => (
                        <Route
                            key={key}
                            path={route.path}
                            element={route.component}
                        />
                    ))
                }
        , [navConfig, role, isLogin]);

    return (
        <Router>
            <Routes>
                {switchRoutes(navConfig['common'], false)}
                {role && switchRoutes(navConfig['doctor'], true)}
            </Routes>
        </Router>
    );
};

export default CustomRoutes;
