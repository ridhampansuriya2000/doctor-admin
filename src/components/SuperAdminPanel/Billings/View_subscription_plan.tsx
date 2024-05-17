import React from "react";
import { FaBullseye } from "react-icons/fa";

const View_subscription_plan = () => {
  return (
    <div>
      <div className="content d-flex flex-column flex-column-fluid pt-7">
        <div className="container-fluid">
          <div className="d-md-flex align-items-center justify-content-between mb-5">
            <h1 className="mb-0 title_sm"> Subscription Plan Details</h1>
            <div className="text-end mt-4 mt-md-0">
              <a
                href="https://hms-saas.infyom.com/super-admin/subscription-plans/7/edit"
                className="btn btn-primary me-4"
              >
                Edit
              </a>
              <a
                href="https://hms-saas.infyom.com/super-admin/subscription-plans"
                className="btn btn-outline-primary"
              >
                Back
              </a>
            </div>
          </div>
        </div>``
        <div className="d-flex flex-wrap flex-column-fluid">
          <div className="container-fluid">
            <div className="d-flex flex-column">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6 d-flex flex-column mb-md-10 mb-5">
                      <label htmlFor="name" className="pb-2 fs-5 text-gray-600">
                        Name:
                      </label>
                      <span className="fs-5 text-gray-800">Enterprise</span>
                    </div>
                    <div className="col-md-6 d-flex flex-column mb-md-10 mb-5">
                      <label
                        htmlFor="currency"
                        className="pb-2 fs-5 text-gray-600"
                      >
                        Currency:
                      </label>
                      <span className="fs-5 text-gray-800">ZAR</span>
                    </div>
                    <div className="col-md-6 d-flex flex-column mb-md-10 mb-5">
                      <label
                        htmlFor="price"
                        className="pb-2 fs-5 text-gray-600"
                      >
                        Price:
                      </label>
                      <span className="fs-5 text-gray-800">R 100</span>
                    </div>
                    <div className="col-md-6 d-flex flex-column mb-md-10 mb-5">
                      <label
                        htmlFor="plan_type"
                        className="pb-2 fs-5 text-gray-600"
                      >
                        Frequency:
                      </label>
                      <p className="m-0">
                        <span className="badge fs-6 bg-light-info">Month</span>
                      </p>
                    </div>
                    <div className="col-md-6 d-flex flex-column mb-md-10 mb-5">
                      <label
                        htmlFor="valid_until"
                        className="pb-2 fs-5 text-gray-600"
                      >
                        Trial Days:
                      </label>
                      <span className="fs-5 text-gray-800">3</span>
                    </div>
                    <div className="col-md-6 d-flex flex-column mb-md-10 mb-5">
                      <label
                        htmlFor="active_plan"
                        className="pb-2 fs-5 text-gray-600"
                      >
                        Active Plans:
                      </label>
                      <span className="fs-5 text-gray-800">29</span>
                    </div>
                    <div className="col-md-6 d-flex flex-column mb-md-10 mb-5">
                      <label
                        htmlFor="created_at"
                        className="pb-2 fs-5 text-gray-600"
                      >
                        Created On:
                      </label>
                      <span
                        className="fs-5 text-gray-800"
                        title="29th Dec, 2021"
                      >
                        2 years ago
                      </span>
                    </div>
                    <div className="col-md-6 d-flex flex-column mb-md-10 mb-5">
                      <label
                        htmlFor="updated_at"
                        className="pb-2 fs-5 text-gray-600"
                      >
                        Last Updated:
                      </label>
                      <span
                        className="fs-5 text-gray-800"
                        title="14th May, 2024"
                      >
                        2 hours ago
                      </span>
                    </div>
                    <div className="separator my-5"></div>

                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mb-md-10 mb-5">
                        <h4 className="pb-2 fs-5 text-gray-600">
                          Plan Features:
                        </h4>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12 mb-5">
                        <div className="d-flex">
                          <span className="fs-5 text-gray-800">
                          <FaBullseye />  Appointments
                          </span>
                          &nbsp;&nbsp;
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View_subscription_plan;
