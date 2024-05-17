import React from 'react'
import { FaEnvelope } from "react-icons/fa";
import Admin_tabs from "../../Common/Admin_tabs";
import Overview from './Hospital_list_tabs/Overview';
import Users from './Hospital_list_tabs/Users';
import Billings from './Hospital_list_tabs/Billings';
import Transactions from './Hospital_list_tabs/Transactions';


const Hospital_listing_tabs = () => {
    const tabs = [
        {  eventKey: "Overview", title: "Overview" ,component: Overview  },
        {  eventKey: "Users", title: "Users" ,component: Users  },
        {  eventKey: "Billings", title: "Billings" ,component: Billings  },
        {  eventKey: "Transactions", title: "Transactions" ,component: Transactions  },
     ]
  return (
    <div>
         <div className="container-fluid">
          <div className="d-md-flex align-items-center justify-content-between mb-5">
            <h1 className="mb-0 title_sm"> Hospital Details</h1>
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
                            Norvic Hospital 
                            </a>
                          </h4>
                          <span className="text-gray-600 fs-5">
                            <FaEnvelope /> &nbsp;
                            <a
                              href="mailto:dpp@gmail.com"
                              className="text-gray-600 text-decoration-none fs-5"
                            >
                              cimolli.jozi@gmail.com
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
                            <h3 className="text-primary mb-3">0</h3>
                            <h3 className="fs-5 fw-light text-gray-600 mb-0">
                              Total Cases
                            </h3>
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12 mb-6 mb-md-0">
                          <div className="border rounded-4 p-3 h-80">
                            <h3 className="text-primary mb-3">0</h3>
                            <h3 className="fs-5 fw-light text-gray-600 mb-0">
                              Total Admissions
                            </h3>
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-12">
                          <div className="border rounded-4 p-3 h-80">
                            <h3 className="text-primary mb-3">0</h3>
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
  )
}

export default Hospital_listing_tabs