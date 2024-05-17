import React, { ReactNode } from "react";
import Sidebar from "../Common/Sidebar";
import DashboardBody from "../DashboardBody";
import Header from "../Common/Header";
import {navConfig} from "../../routes/navConfig";
import {useLocation} from "react-router";

interface LayoutProps {
    children: ReactNode;
}

const getSubTab = (pathname: string): any[] => {
    switch (pathname) {
        case '/appointments':
            return [
                { title: "Appointments", path: '/appointments' },
                { title: "Appointment Transaction", path: '/appointment-transaction' }
            ];
        case '/bed-assigns':
            return [
                { title: "Bed Assigns", path: '/bed-assigns' },
                { title: "Bed Status", path: '/bed-status' }
            ];
        case '/doctor':
            return [
                { title: "Doctor", path: '/doctor' }
            ];
        case '/schedule':
            return [
                { title: "Schedule", path: '/schedule' }
            ];
        case '/prescriptions':
            return [
                { title: "Prescriptions", path: '/prescriptions' }
            ];
        case '/document':
            return [
                { title: "Document", path: '/document' }
            ];
        case '/diagnosis':
            return [
                { title: "Diagnosis", path: '/diagnosis' }
            ];
        case '/notice-boards':
            return [
                { title: "Notice Boards", path: '/notice-boards' }
            ];
        case '/ipd-patients':
            return [
                { title: "IPD Patients", path: '/ipd-patients' }
            ];
        case '/live-consultation':
            return [
                { title: "Live Consultation", path: '/live-consultation' }
            ];
        case '/payrolls':
            return [
                { title: "Payrolls", path: '/payrolls' }
            ];
        case '/patients':
            return [
                { title: "Patients", path: '/patients' }
            ];
        case '/reports':
            return [
                { title: "Reports", path: '/reports' }
            ];
        case '/sms':
            return [
                { title: "SMS", path: '/sms' }
            ];
        default:
            return [];
    }
};


const Layout: React.FC<LayoutProps> = ({ children }) => {

    const location : any = useLocation();


    return (
        <div>
            <Sidebar routes={navConfig['superAdmin']}/>
            <div className='dashboard-body'>
                <Header
                    linkTexts={getSubTab(location?.pathname)}
                    children=''
                />
                <div>{children}</div>
            </div>
        </div>
    );
};

export default Layout;
