import React from 'react'
import { FaEnvelope } from "react-icons/fa";
import Admin_tabs from "../Common/Admin_tabs";
import "../../Styles/app.css"
import Overview from './Doctor_tabs/Overview';
import Cases from './Doctor_tabs/Cases'
import Patient from './Doctor_tabs/Patient';
import Doctor_appointment from './Doctor_tabs/Doctor_appointment';
import Schudules from './Doctor_tabs/Schudules';
import Payrolls from './Doctor_tabs/Payrolls';

const Doctor_details_tabs = () => {
    const tabs = [
        {  eventKey: "Overview", title: "Overview" , component: Overview },
        {  eventKey: "Cases", title: "Cases" , component: Cases },
        {  eventKey: "Patient", title: "Patient" , component: Patient },
        {  eventKey: "Appointments", title: "Appointments" , component: Doctor_appointment },
        {  eventKey: "Schedules", title: "Schedules" , component: Schudules },
        {  eventKey: "Payrolls", title: "Payrolls" , component: Payrolls },
      ];
  return (
    <div>
          <div className="content d-flex flex-column flex-column-fluid pt-7">
        <div className="container-fluid">
          <div className="d-md-flex align-items-center justify-content-between mb-5">
            <h1 className="mb-0 title_sm"> Patient Details</h1>
            <div className="text-end mt-4 mt-md-0">
              <a
                href="https://hms-saas.infyom.com/appointments"
                className="btn btn-outline-primary"
              >
                Back
              </a>
            </div>
          </div>
        </div>
        <div className="d-flex flex-wrap flex-column-fluid patient_details">
          <div className="container-fluid">
            <div className="d-flex flex-column">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-xxl-5 col-12">
                      <div className="d-sm-flex align-items-center mb-5 mb-xxl-0 text-center text-sm-start">
                        <div className="image image-circle image-small">
                          <img src="/image/nav_img.svg" alt="Nav Image" />
                        </div>
                        <div className="ms-0 ms-sm-3 mt-5 mt-sm-0">
                          <span className="badge bg-light-success mb-2">
                            Active
                          </span>
                          <h4>
                            <a href="#" className="text-decoration-none">
                            Vatsal Sakariya
                            </a>
                          </h4>
                          <span className="text-gray-600 fs-5">
                            <FaEnvelope /> &nbsp;
                            <a
                              href="mailto:dpp@gmail.com"
                              className="text-gray-600 text-decoration-none fs-5"
                            >
                              vatsal@gmail.com
                            </a>
                          </span>
                          <span className="d-flex align-items-start me-sm-5 mb-2 mt-2 text-gray-600 fs-5 justify-content-center justify-content-sm-center"></span>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-7 col-12">
                      <div className="row justify-content-center">
                        <div className="col-md-4 col-sm-6 col-12 mb-6 mb-md-0">
                          <div className="border rounded-4 p-3 h-80">
                            <h3 className="text-primary mb-3">22</h3>
                            <h3 className="fs-5 fw-light text-gray-600 mb-0">
                              Total Cases
                            </h3>
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12 mb-6 mb-md-0">
                          <div className="border rounded-4 p-3 h-80">
                            <h3 className="text-primary mb-3">22</h3>
                            <h3 className="fs-5 fw-light text-gray-600 mb-0">
                              Total Admissions
                            </h3>
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12">
                          <div className="border rounded-4 p-3 h-80">
                            <h3 className="text-primary mb-3">316</h3>
                            <h3 className="fs-5 fw-light text-gray-600 mb-0">
                              Total Appointments
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Admin_tabs tabs={tabs} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Doctor_details_tabs
