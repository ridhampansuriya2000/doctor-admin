import React, { useState } from "react";
import Super_admin_dashboard from "./Dashboard/Super_admin_dashboard";
import type { ChartData, ChartOptions } from "chart.js";
import Hospital_Listing from "./Hospital/Hospital_Listing";
import Transactions from "./Billings/Transactions";
import Subscription_plans from "./Billings/Subscription_plans";
import View_subscription_plan from "./Billings/View_subscription_plan";
import Edit_subscription_plan from "./Billings/Edit_subscription_plan";
import Hospital_listing_tabs from "./Hospital/Hospital_listing_tabs";
import Admin_listing from "./Admin/Admin_listing";
import Admin_details from "./Admin/Admin_details";
import Edit_Admin from "./Admin/Edit_Admin";
import Add_admin from "./Admin/Add_admin";
import Hospital_type_listing from "./Hospital_type/Hospital_type_listing";
import Add_hospital from "./Hospital/Add_hospital";
import Edit_hospital from "./Hospital/Edit_hospital";
import Subscriptions from "./Billings/Subscriptions";
import View_subscriptions from "./Billings/View_subscriptions";
import Edit_subscription from "./Billings/Edit_subscription";
import Subscribers_listing from "./Subscribers/Subscribers_listing";
import EnquiriesListing from "./Enquiries/EnquiriesListing";
import View_enquires from "./Enquiries/View_enquires";
import Setting from "./Settings/Setting";
import Footer_setting from "./Settings/Footer_setting";
import Curreny_listing from "./Settings/Currency/Curreny_listing";

const SuperAdmin = () => {



  return (
    <div>      

      {/* <Super_admin_dashboard/> */}
      {/* <Hospital_Listing/> */}
      {/* <Transactions/> */}
      {/* <Subscription_plans/> */}
      {/* <View_subscription_plan/> */}
      {/* <Edit_subscription_plan/> */}
      {/* <Hospital_listing_tabs/> */}
      {/* <Admin_listing/> */}
      {/* <Admin_details/> */}
      {/* <Edit_Admin/> */}
      {/* <Add_admin/> */}
      {/* <Hospital_type_listing/> */}
      {/* <Add_hospital/> */}
      {/* <Edit_hospital/> */}
      {/* <Subscriptions/> */}
      {/* <View_subscriptions/> */}
      {/* <Edit_subscription /> */}
      {/* <Subscribers_listing/> */}
      {/* <EnquiriesListing/> */}
      {/* <View_enquires/> */}
      {/* <Setting/> */}
      {/* <Footer_setting/> */}
      <Curreny_listing/>
    </div>
  );
};

export default SuperAdmin;
