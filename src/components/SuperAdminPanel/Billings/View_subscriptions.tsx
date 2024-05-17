import React from "react";

const View_subscriptions = () => {
  return (
    <div>
      <div className="content d-flex flex-column flex-column-fluid pt-7">
        <div className="container-fluid">
          <div className="d-md-flex align-items-center justify-content-between mb-5">
            <h1 className="mb-0 title_sm"> Subscription Details</h1>
            <div className="text-end mt-4 mt-md-0">
              <a
                href="https://hms-saas.infyom.com/super-admin/subscription-plans"
                className="btn btn-outline-primary"
              >
                Back
              </a>
            </div>
          </div>
        </div>

        <div className="d-flex flex-wrap flex-column-fluid">
          <div className="container-fluid">
            <div className="d-flex flex-column">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6 d-flex flex-column mb-md-10 mb-5">
                      <label
                        htmlFor="user_full_name"
                        className="pb-2 fs-5 text-gray-600"
                      >
                        Hospital Name:
                      </label>
                      <span className="fs-5 text-gray-800">Test demo </span>
                    </div>
                    <div className="col-md-6 d-flex flex-column mb-md-10 mb-5">
                      <label
                        htmlFor="subscription_plan_name"
                        className="pb-2 fs-5 text-gray-600"
                      >
                        Plan Name:
                      </label>
                      <div className="d-flex">
                        <span className="fs-5 text-gray-800">Professional</span>
                        &nbsp;&nbsp;
                        <span className="badge fs-6 bg-light-success">
                          Active
                        </span>
                      </div>
                    </div>
                    <div className="col-md-6 d-flex flex-column mb-md-10 mb-5">
                      <label
                        htmlFor="transaction_date"
                        className="pb-2 fs-5 text-gray-600"
                      >
                        Start Date:
                      </label>
                      <span
                        className="fs-5 text-gray-800"
                        title="16th May, 2024"
                      >
                        5:39 AM 16th May, 2024
                      </span>
                    </div>
                    <div className="col-md-6 d-flex flex-column mb-md-10 mb-5">
                      <label
                        htmlFor="transaction_date"
                        className="pb-2 fs-5 text-gray-600"
                      >
                        Expires On:
                      </label>
                      <span
                        className="fs-5 text-gray-800"
                        title="21st May, 2024"
                      >
                        5:39 AM 21st May, 2024
                      </span>
                    </div>
                    <div className="col-md-6 d-flex flex-column mb-md-10 mb-5">
                      <label
                        htmlFor="payment_status"
                        className="pb-2 fs-5 text-gray-600"
                      >
                        Frequency:
                      </label>
                      <p className="m-0">
                        <span className="badge fs-6 bg-light-danger">Year</span>
                      </p>
                    </div>
                    <div className="col-md-6 d-flex flex-column mb-md-10 mb-5">
                      <label
                        htmlFor="amount"
                        className="pb-2 fs-5 text-gray-600"
                      >
                        Amount:
                      </label>
                      <span className="fs-5 text-gray-800">$ 999</span>
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
                        title="16th May, 2024"
                      >
                        1 hour ago
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
                        title="16th May, 2024"
                      >
                        1 hour ago
                      </span>
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

export default View_subscriptions;
