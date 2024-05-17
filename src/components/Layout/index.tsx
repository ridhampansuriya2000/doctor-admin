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
                { title: "Appointment Transaction", path: '/appointments?tab=appointment-transaction' }
            ];
        case '/bed':
            return [
                { title: "Bed Assigns", path: '/bed' },
                { title: "Bed Status", path: '/bed?tab=bed-status' }
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
                { title: "Diagnosis", path: '/diagnosis' },
                { title: "Diagnosis Test", path: '/diagnosis?tab=patient-diagnosis-test' }
            ];
        case '/notice-boards':
            return [
                { title: "Notice Boards", path: '/notice-boards' }
            ];
        case '/ipd':
            return [
                { title: "IPD Patients", path: '/ipd' },
                { title: "OPD Patients", path: '/ipd?tab=opds' },
            ];
        case '/live':
            return [
                { title: "Live Consultation", path: '/live' },
                { title: "Live Meeting", path: '/live?tab=live-meeting' },
                { title: "Connect Google Calendar", path: '/live?tab=connect-google-calendar' },
            ];
        case '/payrolls':
            return [
                { title: "Payrolls", path: '/payrolls' }
            ];
        case '/patients':
            return [
                { title: "Patients", path: '/patients' },
                { title: "Patients Admissions", path: '/patients?tab=patient-admissions' },
            ];
        case '/reports':
            return [
                { title: "Death Reports", path: '/reports' },
                { title: "Investigation Reports", path: '/reports?tab=investigation-reports' },
                { title: "Operation Reports", path: '/reports?tab=operation-reports' },
            ];
        case '/sms':
            return [
                { title: "SMS", path: '/sms' }
            ];
        case '/subscription-plans':
        case '/transactions':
        case '/subscriptions-hospitals':
            return [
                { title: "Subscription Plans", path: '/subscription-plans' },
                { title: "Transactions", path: '/subscription-plans?tab=transactions' },
                { title: "Subscriptions Hospitals", path: '/subscription-plans?tab=subscriptions-hospitals' },
            ];
        case '/cms':
            return [
                { title: "Section One", path: '/cms' },
                { title: "Section Two", path: '/cms?tab=section-two' },
                { title: "Section Three", path: '/cms?tab=section-three' },
                { title: "Section Four", path: '/cms?tab=section-four' },
                { title: "Section Five", path: '/cms?tab=section-five' },
                { title: "About Us", path: '/cms?tab=about-us' },
                { title: "Service Slider", path: '/cms?tab=service-slider' },
                { title: "FAQS", path: '/cms?tab=faqs' },
                { title: "Admin Testimonial", path: '/cms?tab=admin-testimonial' },
            ];
        case '/settings':
            return [
                { title: "General Settings", path: '/settings' },
                { title: "Footer Settings", path: '/settings?tab=footer-settings' },
                { title: "Currencies", path: '/settings?tab=super-admin-currency-settings' },
                { title: "payment-gateway", path: '/settings?tab=payment-gateway' },
            ];
        case '/':
            return [
                { title: "Dashboard", path: '/' },
            ];
        case '/admins':
            return [
                { title: "Admins", path: '/admins' },
            ];
        case '/hospital-type':
            return [
                { title: "Hospital Type", path: '/hospital-type' },
            ];
        case '/hospitals':
            return [
                { title: "Hospitals", path: '/hospitals' },
            ];
        case '/subscribers':
            return [
                { title: "subscribers", path: '/subscribers' },
            ];
        case '/enquiries':
            return [
                { title: "Enquiries", path: '/enquiries' },
            ];



        default:
            return [];
    }
};


const Layout: React.FC<LayoutProps> = ({ children }) => {

    const location : any = useLocation();


    return (
        <div>
            <Sidebar routes={navConfig['doctor']}/>
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
