import React from 'react'
import { FaEnvelope } from "react-icons/fa";
import Admin_tabs from "../../Common/Admin_tabs";
import Overview from './Overview';
const Admin_details = () => {
    const tabs = [
        {  eventKey: "Overview", title: "Overview" ,component: Overview  },
    ]
  return (
    <div>
          <div className="container-fluid">
          <div className="d-md-flex align-items-center justify-content-between mb-5">
            <h1 className="mb-0 title_sm"> Admin Details </h1>
            <div className="text-end mt-4 mt-md-0">
            <a className="btn btn-primary edit-btn me-2" href="https://hms-saas.infyom.com/super-admin/admins/2089/edit">Edit</a>
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
                            Bhautik Bhalala
                            </a>
                          </h4>
                          <span className="text-gray-600 fs-5">
                            <FaEnvelope /> &nbsp;
                            <a
                              href="mailto:dpp@gmail.com"
                              className="text-gray-600 text-decoration-none fs-5"
                            >
                               bha1222@gmail.com
                            </a>
                          </span>
                          <span className="d-flex align-items-start me-sm-5 mb-2 mt-2 text-gray-600 fs-5 justify-content-center justify-content-sm-center"></span>
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

export default Admin_details