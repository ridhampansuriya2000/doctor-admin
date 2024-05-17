import React from "react";
import {
    BsList,
    BsCalendarCheck,
    BsFillHospitalFill,
    BsFillPersonFill,
    BsCalendarFill,
    BsFillFileEarmarkMedicalFill,
    BsPersonBoundingBox,
    BsGearFill,
    BsFileMedical,
    BsPieChartFill,
    BsPersonCheckFill
} from 'react-icons/bs';
import Doctor from "../components/Doctor_panel/Doctor/Doctor";
import Dashboard from "../components/Dashboard";
import Login from "../components/Common/Login";
import Appointment from "../components/Appointment/Appointment";
import Schudules from "../components/Appointment/Doctor_tabs/Schudules";
import Documents from "../components/Appointment/patient_tabs/Documents";

export interface RouteType {
    title: string;
    path: string;
    subPath?: string;
    component: JSX.Element;
    icon: any,
}

export const commonRoutes: RouteType[] = [
    {
        title: "Dashboard",
        path: '/login',
        component: <Login/>,
        icon : '',
    },
];

export const doctorRoutes: RouteType[] = [
    {
        title: "Dashboard",
        path: '/',
        component: <Dashboard/>,
        icon: <BsCalendarCheck/>
    },
    {
        title: "Doctor",
        path: '/doctor',
        component: <Doctor/>,
        icon: <BsFillPersonFill/>
    },
    // Add other items similarly
    {
        title: "Bed Management",
        path: '/bed-management',
        component: <Dashboard/>,
        icon: <BsFillHospitalFill/>
    },
    {
        title: "Schedule",
        path: '/schedule',
        component: <Dashboard/>,
        icon: <BsCalendarFill/>
    },
    {
        title: "Prescriptions",
        path: '/prescriptions',
        component: <Dashboard/>,
        icon: <BsFillFileEarmarkMedicalFill/>
    },
    {
        title: "Diagnosis",
        path: '/diagnosis',
        component: <Dashboard/>,
        icon: <BsPersonBoundingBox/>
    },
    {
        title: "Notice Boards",
        path: '/notice-boards',
        component: <Dashboard/>,
        icon: <BsGearFill/>
    },
    {
        title: "IPD Patients",
        path: '/ipd-patients',
        component: <Dashboard/>,
        icon: <BsFileMedical/>
    },
    {
        title: "Payrolls",
        path: '/payrolls',
        component: <Dashboard/>,
        icon: <BsPieChartFill/>
    },
    {
        title: "Patients",
        path: '/patients',
        component: <Dashboard/>,
        icon: <BsPersonCheckFill/>
    }
];

export const superAdminRoutes: RouteType[] = [
    {
        title: "Appointments",
        path: '/appointments',
        subPath: 'appointment',
        component: <Appointment/>,
        icon: <BsCalendarCheck/>
    },
    {
        title: "Bed Management",
        path: '/bed-assigns',
        subPath: 'bed',
        component: <Dashboard/>,
        icon: <BsFillHospitalFill/>
    },
    {
        title: "Doctor",
        path: '/doctor',
        subPath: 'doctor',
        component: <Doctor/>,
        icon: <BsFillPersonFill/>
    },
    // Add other items similarly
    {
        title: "Schedule",
        path: '/schedule',
        subPath: 'schedule',
        component: <Schudules/>,
        icon: <BsCalendarFill/>
    },
    {
        title: "Prescriptions",
        path: '/prescriptions',
        subPath: 'prescriptions',
        component: <Dashboard/>,
        icon: <BsFillFileEarmarkMedicalFill/>
    },
    {
        title: "Document",
        path: '/document',
        subPath: 'document',
        component: <Documents/>,
        icon: <BsPersonBoundingBox/>
    },
    {
        title: "Diagnosis",
        path: '/diagnosis',
        subPath: 'diagnosi',
        component: <Dashboard/>,
        icon: <BsPersonBoundingBox/>
    },
    {
        title: "Notice Boards",
        path: '/notice-boards',
        subPath: 'notice',
        component: <Dashboard/>,
        icon: <BsGearFill/>
    },
    {
        title: "IPD Patients",
        path: '/ipd-patients',
        subPath: 'ipd',
        component: <Dashboard/>,
        icon: <BsFileMedical/>
    },
    {
        title: "Live Consultation",
        path: '/live-consultation',
        subPath: 'live',
        component: <Dashboard/>,
        icon: <BsFileMedical/>
    },
    {
        title: "Payrolls",
        path: '/payrolls',
        subPath: 'payroll',
        component: <Dashboard/>,
        icon: <BsPieChartFill/>
    },
    {
        title: "Patients",
        path: '/patients',
        subPath: 'patient',
        component: <Dashboard/>,
        icon: <BsPersonCheckFill/>
    },
    {
        title: "Reports",
        path: '/reports',
        subPath: 'report',
        component: <Dashboard/>,
        icon: <BsPersonCheckFill/>
    },
    {
        title: "SMS",
        path: '/sms',
        subPath: 'sms',
        component: <Dashboard/>,
        icon: <BsPersonCheckFill/>
    }
];

export interface NavConfigType {
    [key: string]: RouteType[];
}

export const navConfig: NavConfigType = {
    doctor: doctorRoutes,
    common: commonRoutes,
    superAdmin: superAdminRoutes,
};
