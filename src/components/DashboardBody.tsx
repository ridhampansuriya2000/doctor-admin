import React from "react";
import Header from "../components/Common/Header";
import "../Styles/app.css";
import "../Styles/responsive.css";

import Copyright from "./Common/Copyright";
import Doctor from "./Doctor_panel/Doctor/Doctor";
import Appointment from "./Appointment/Appointment";
import Patients from "./Doctor_panel/Patients/Patients";
import SuperAdmin from "./SuperAdminPanel/SuperAdmin";

const DashboardBody = () => {
  return (
    <div className="dashboard-body">
      {/* <Header linkText="Doctor" /> */}
      <Header
        linkTexts={["Appointments", "Appointment Transaction"]}
        activeIndex={0}
      />
      <div className="admin_parent">
        {/* <Doctor /> */}
        {/* <Appointment/> */}
        {/* <Patients/> */}

        {/* super admin module  */}
        <SuperAdmin/>
        <Copyright />
      </div>
    </div>
  );
};

export default DashboardBody;
