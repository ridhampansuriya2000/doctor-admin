import React from "react";
import Doctor from "../components/Doctor_panel/Doctor/Doctor";
import Dashboard from "../components/Dashboard";
import Login from "../components/Common/Login";

export interface RouteType {
    title: string;
    path: string;
    component: JSX.Element;
}

export const commonRoutes: RouteType[] = [
    {
        title: "Dashboard",
        path: '/login',
        component: <Login />,
    },
];

export const doctorRoutes: RouteType[] = [
    {
        title: "Dashboard",
        path: '/',
        component: <Dashboard />,
    },
    {
        title: "Doctor",
        path: '/doctor',
        component: <Doctor />,
    },
];

export interface NavConfigType {
    [key: string]: RouteType[];
}

export const navConfig: NavConfigType  = {
    doctor: doctorRoutes,
    common: commonRoutes,
};
