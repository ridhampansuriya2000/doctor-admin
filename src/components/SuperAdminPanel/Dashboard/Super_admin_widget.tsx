import React from "react";
import Widget from "./Widget"
import { FaHospital, FaDollarSign,FaToggleOn ,FaToggleOff} from 'react-icons/fa';;

const Super_admin_widget = () => {
  return (
    <div>
      <div className="row">
       <div className="col-xxl-3 col-xl-4 col-sm-6 dashbord_cards">
       <Widget
        href="#"
        icon={<FaHospital className="fs-1-xl text-white" />}
        title="Total Hospitals"
        count="521"
        subtitle="Total Hospitals"
        backgroundColor="warning"
        iconColor="yellow-300"
    />
       </div>
       <div className="col-xxl-3 col-xl-4 col-sm-6 dashbord_cards">
       <Widget
        href="#"
        icon={<FaDollarSign className="fs-1-xl text-white" />}
        title="Total Revenue"
        count="232.84K"
        subtitle="Total Revenue"
        backgroundColor="primary"
        iconColor="cyan-300"
    />
       </div>
       <div className="col-xxl-3 col-xl-4 col-sm-6 dashbord_cards">
       <Widget
        href="#"
        icon={<FaToggleOn className="fs-1-xl text-white" />}
        title="Total Active Hospital Plans"
        count="17"
        subtitle="Total Active Hospital Plans"
        backgroundColor="success"
        iconColor="green-300"
    />
       </div>
       <div className="col-xxl-3 col-xl-4 col-sm-6 dashbord_cards">
       <Widget
        href="https://hms-saas.infyom.com/super-admin/subscription-plans"
        icon={<FaToggleOff className="fs-1-xl text-white" />}
        title="Total Expired Hospital Plans"
        count="243"
        subtitle="Total Expired Hospital Plans"
        backgroundColor="info"
        iconColor="blue-300"
    />
       </div>
      </div>
    </div>
  );
};

export default Super_admin_widget;
