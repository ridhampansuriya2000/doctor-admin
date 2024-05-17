import React, { ReactNode } from "react";
import Sidebar from "../Common/Sidebar";
import DashboardBody from "../DashboardBody";
import Header from "../Common/Header";
import {navConfig} from "../../routes/navConfig";

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <Sidebar routes={navConfig['doctor']}/>
            <div>
                <Header
                    linkTexts={["Appointments", "Appointment Transaction"]}
                    activeIndex={0}
                />
                {children}
            </div>
        </div>
    );
};

export default Layout;
