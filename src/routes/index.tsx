import React, {useCallback} from "react";
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import {RouteType, NavConfigType, navConfig} from "./navConfig";
import Layout from "../components/Layout";

// interface Props {
//     navConfig: NavConfigType;
// }

const CustomRoutes: React.FC = () => {
    const role: string | null = JSON.stringify(localStorage.getItem("role"));
    const isLogin: string | null = localStorage.getItem("isLogin");

    const switchRoutes = useCallback((routes: RouteType[], privatesRoute: boolean) => {
            console.log('routes', {isLogin})
            if (privatesRoute && isLogin) {
                return <Layout>
                    <Routes>
                        {routes?.map((route, key) => (
                            <Route
                                key={key}
                                path={route.path}
                                element={route.component}
                            />
                        ))}
                    </Routes>
                </Layout>
            } else if (privatesRoute && !isLogin) {
                return <Navigate to="/login"/>
            } else if (!privatesRoute) {
                return routes?.map((route, key) => (
                    <Route
                        key={key}
                        path={route.path}
                        element={route.component}
                    />
                ))
            }

            // return privatesRoute ? isLogin
            //     ? <Layout>
            //         <Routes>
            //         {routes?.map((route, key) => (
            //             <Route
            //                 key={key}
            //                 path={route.path}
            //                 element={route.component}
            //             />
            //         ))}
            //         </Routes>
            //     </Layout>
            //     : <Navigate to="/login" />
            //     :  routes?.map((route, key) => (
            //         <Route
            //             key={key}
            //             path={route.path}
            //             element={route.component}
            //         />
            //     ))
        }
        , [navConfig, role, isLogin]);

    return (
        <Router>
            <Routes>
                {switchRoutes(navConfig['common'], false)}
            </Routes>
            {switchRoutes(navConfig['doctor'], true)}
        </Router>
    );
};

export default CustomRoutes;
