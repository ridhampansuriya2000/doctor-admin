import React from 'react';
import { FaHospital, FaDollarSign, FaToggleOn, FaToggleOff } from 'react-icons/fa';

interface WidgetProps {
    href: string;
    icon: JSX.Element;
    title: string;
    count: string;
    subtitle: string;
    backgroundColor: string;
    iconColor: string;
}

const Widget: React.FC<WidgetProps> = ({ href, icon, title, count, subtitle, backgroundColor, iconColor }) => (
    <div>
        <a href={href} className="text-decoration-none super-admin-dashboard">
            <div className={`bg-${backgroundColor} shadow-md rounded-10 p-xxl-10 px-5 py-10 d-flex align-items-center justify-content-between my-sm-3 my-2`}>
                <div className={`bg-${iconColor} widget-icon rounded-10 me-2 d-flex align-items-center justify-content-center`}>
                    {icon}
                </div>
                <div className="text-end text-white">
                    <h2 className="fs-1-xxl fw-bolder text-white">{count}</h2>
                    <h3 className="mb-0 fs-5 fw-light text-white">{subtitle}</h3>
                </div>
            </div>
        </a>
    </div>
);

export default Widget