import React from "react";

const View_enquires = () => {
  return (
    <div>
      <div className="content d-flex flex-column flex-column-fluid pt-7">
        <div className="container-fluid">
          <div className="d-md-flex align-items-center justify-content-between mb-5">
            <h1 className="mb-0 title_sm">Enquiry Details</h1>
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
                      <label htmlFor="name" className="pb-2 fs-5 text-gray-600">
                        Name:
                      </label>
                      <span className="fs-5 text-gray-800">Denise Perez</span>
                    </div>
                    <div className="col-md-6 d-flex flex-column mb-md-10 mb-5">
                      <label htmlFor="email" className="pb-2 fs-5 text-gray-600">
                        Email:
                      </label>
                      <span className="fs-5 text-gray-800">
                        fahocipyb@mailinator.com
                      </span>
                    </div>
                    <div className="col-md-6 d-flex flex-column mb-md-10 mb-5">
                      <label htmlFor="contact" className="pb-2 fs-5 text-gray-600">
                        Contact:
                      </label>
                      <span className="fs-5 text-gray-800">9975283416</span>
                    </div>
                    <div className="col-md-6 d-flex flex-column mb-md-10 mb-5">
                      <label htmlFor="status" className="pb-2 fs-5 text-gray-600">
                        Status:
                      </label>
                      <p className="m-0">
                        <span className="badge fs-6 bg-light-success">Read</span>
                      </p>
                    </div>
                    <div className="col-md-6 d-flex flex-column mb-md-10 mb-5">
                      <label htmlFor="created_at" className="pb-2 fs-5 text-gray-600">
                        Created On:
                      </label>
                      <span className="fs-5 text-gray-800" title="22nd Nov, 2023">
                        5 months ago
                      </span>
                    </div>
                    <div className="col-md-6 d-flex flex-column mb-md-10 mb-5">
                      <label htmlFor="updated_at" className="pb-2 fs-5 text-gray-600">
                        Last Updated:
                      </label>
                      <span className="fs-5 text-gray-800" title="1st Dec, 2023">
                        5 months ago
                      </span>
                    </div>
                    <div className="col-md-6 d-flex flex-column mb-md-10 mb-5">
                      <label htmlFor="message" className="pb-2 fs-5 text-gray-600">
                        Message:
                      </label>
                      <span className="fs-5 text-gray-800">
                        In mollitia vel dele
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

export default View_enquires;
