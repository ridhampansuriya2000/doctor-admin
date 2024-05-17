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
    isShowInSidebar?: boolean;
    component: JSX.Element;
    icon: any,
}

export const commonRoutes: RouteType[] = [
    {
        title: "Login",
        path: '/login',
        component: <Login/>,
        icon : '',
    },
];

export const superAdminRoutes: RouteType[] = [
    {
        title: "Dashboard",
        path: '/',
        subPath: '/',
        isShowInSidebar:true,
        component: <Dashboard/>,
        icon: <BsCalendarCheck/>
    },
    {
        title: "Admins",
        path: '/admins',
        subPath: 'admin',
        isShowInSidebar:true,
        component: <Doctor/>,
        icon: <BsFillPersonFill/>
    },
    // Add other items similarly
    {
        title: "Hospital Type",
        path: '/hospital-type',
        subPath: 'hospital',
        isShowInSidebar:true,
        component: <Dashboard/>,
        icon: <BsFillHospitalFill/>
    },
    {
        title: "Hospitals",
        path: '/hospitals',
        subPath: 'hospitals',
        isShowInSidebar:true,
        component: <Dashboard/>,
        icon: <BsCalendarFill/>
    },
    {
        title: "Billing",
        path: '/subscription-plans',
        subPath: 'subscription',
        isShowInSidebar:true,
        component: <Dashboard/>,
        icon: <BsFillFileEarmarkMedicalFill/>
    },
    {
        title: "Subscribers",
        path: '/subscribers',
        subPath: 'subscriber',
        isShowInSidebar:true,
        component: <Dashboard/>,
        icon: <BsPersonBoundingBox/>
    },
    {
        title: "Enquiries",
        path: '/enquiries',
        subPath: 'enquiry',
        isShowInSidebar:true,
        component: <Dashboard/>,
        icon: <BsGearFill/>
    },
    {
        title: "Landing CMS",
        path: '/cms',
        subPath: 'section',
        isShowInSidebar:true,
        component: <Dashboard/>,
        icon: <BsFileMedical/>
    },
    {
        title: "Setting",
        path: '/settings',
        subPath: 'setting',
        isShowInSidebar:true,
        component: <Dashboard/>,
        icon: <BsPieChartFill/>
    },
    // {
    //     title: "Patients",
    //     path: '/patients',
    //     subPath: 'patient',
    //     isShowInSidebar:true,
    //     component: <Dashboard/>,
    //     icon: <BsPersonCheckFill/>
    // }
];

export const doctorRoutes: RouteType[] = [
    {
        title: "Appointments",
        path: '/appointments',
        subPath: 'appointment',
        isShowInSidebar:true,
        component: <Appointment/>,
        icon: <BsCalendarCheck/>
    },
    {
        title: "Bed Management",
        path: '/bed',
        subPath: 'bed',
        isShowInSidebar:true,
        component: <Dashboard/>,
        icon: <BsFillHospitalFill/>
    },
    {
        title: "Doctor",
        path: '/doctor',
        subPath: 'doctor',
        isShowInSidebar:true,
        component: <Doctor/>,
        icon: <BsFillPersonFill/>
    },
    // Add other items similarly
    {
        title: "Schedule",
        path: '/schedule',
        subPath: 'schedule',
        isShowInSidebar:true,
        component: <Schudules/>,
        icon: <BsCalendarFill/>
    },
    {
        title: "Prescriptions",
        path: '/prescriptions',
        subPath: 'prescriptions',
        isShowInSidebar:true,
        component: <Dashboard/>,
        icon: <BsFillFileEarmarkMedicalFill/>
    },
    {
        title: "Document",
        path: '/document',
        subPath: 'document',
        isShowInSidebar:true,
        component: <Documents/>,
        icon: <BsPersonBoundingBox/>
    },
    {
        title: "Diagnosis",
        path: '/diagnosis',
        subPath: 'diagnosi',
        isShowInSidebar:true,
        component: <Dashboard/>,
        icon: <BsPersonBoundingBox/>
    },
    {
        title: "Notice Boards",
        path: '/notice-boards',
        subPath: 'notice',
        isShowInSidebar:true,
        component: <Dashboard/>,
        icon: <BsGearFill/>
    },
    {
        title: "IPD Patients",
        path: '/ipd',
        subPath: 'ipd',
        isShowInSidebar:true,
        component: <Dashboard/>,
        icon: <BsFileMedical/>
    },
    {
        title: "Live Consultation",
        path: '/live',
        subPath: 'live',
        isShowInSidebar:true,
        component: <Dashboard/>,
        icon: <BsFileMedical/>
    },
    {
        title: "Payrolls",
        path: '/payrolls',
        subPath: 'payroll',
        isShowInSidebar:true,
        component: <Dashboard/>,
        icon: <BsPieChartFill/>
    },
    {
        title: "Patients",
        path: '/patients',
        subPath: 'patient',
        isShowInSidebar:true,
        component: <Dashboard/>,
        icon: <BsPersonCheckFill/>
    },
    {
        title: "Reports",
        path: '/reports',
        subPath: 'report',
        isShowInSidebar:true,
        component: <Dashboard/>,
        icon: <BsPersonCheckFill/>
    },
    {
        title: "SMS",
        path: '/sms',
        subPath: 'sms',
        isShowInSidebar:true,
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
