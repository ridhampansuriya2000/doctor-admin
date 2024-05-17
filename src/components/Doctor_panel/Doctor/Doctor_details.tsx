import React from "react";

import Copyright from "../../Common/Copyright";
const Doctor_details = () => {
  return (
    <>
      <div className="d-md-flex align-items-center justify-content-between mb-3">
        <h4 className="mb-0 title_sm">Doctor Details</h4>
        <div className="text-end mt-4 mt-md-0">
          <a
            href="#"
            className="btn btn-outline-primary"
          >
            Back
          </a>
        </div>
      </div>

      <div className="d-flex flex-column">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6 d-flex flex-column mb-md-10 mb-5">
                <label htmlFor="doctor" className="pb-2 fs-5 text-gray-600">
                  Doctor:
                </label>
                <span className="fs-5 text-gray-800">Pedro Stuart</span>
              </div>
              <div className="col-md-6 d-flex flex-column mb-md-10 mb-5">
                <label htmlFor="email" className="pb-2 fs-5 text-gray-600">
                  Email:
                </label>
                <span className="fs-5 text-gray-800">
                  cityhospigtal@gmail.com
                </span>
              </div>
              <div className="col-md-6 d-flex flex-column mb-md-10 mb-5">
                <label htmlFor="doctor" className="pb-2 fs-5 text-gray-600">
                  Phone:
                </label>
                <span className="fs-5 text-gray-800">+526642863251</span>
              </div>
              <div className="col-md-6 d-flex flex-column mb-md-10 mb-5">
                <label
                  htmlFor="designation"
                  className="pb-2 fs-5 text-gray-600"
                >
                  Designation:
                </label>
                <span className="fs-5 text-gray-800">Pr</span>
              </div>
              <div className="col-md-6 d-flex flex-column mb-md-10 mb-5">
                <label htmlFor="department" className="pb-2 fs-5 text-gray-600">
                  Doctor Department:
                </label>
                <span className="fs-5 text-gray-800">Allergists</span>
              </div>
              <div className="col-md-6 d-flex flex-column mb-md-10 mb-5">
                <label
                  htmlFor="qualification"
                  className="pb-2 fs-5 text-gray-600"
                >
                  Qualification:
                </label>
                <span className="fs-5 text-gray-800">Tvggg</span>
              </div>
              <div className="col-md-6 d-flex flex-column mb-md-10 mb-5">
                <label
                  htmlFor="blood_group"
                  className="pb-2 fs-5 text-gray-600"
                >
                  Blood Group:
                </label>
                <span className="fs-5 text-gray-800">A</span>
              </div>
              <div className="col-md-6 d-flex flex-column mb-md-10 mb-5">
                <label htmlFor="dob" className="pb-2 fs-5 text-gray-600">
                  Date Of Birth:
                </label>
                <span className="fs-5 text-gray-800">13th May, 2009</span>
              </div>
              <div className="col-md-6 d-flex flex-column mb-md-10 mb-5">
                <label htmlFor="gender" className="pb-2 fs-5 text-gray-600">
                  Gender:
                </label>
                <span className="fs-5 text-gray-800">Male</span>
              </div>
              <div className="col-md-6 d-flex flex-column mb-md-10 mb-5">
                <label htmlFor="specialist" className="pb-2 fs-5 text-gray-600">
                  Specialist:
                </label>
                <span className="fs-5 text-gray-800">Hgvh</span>
              </div>
              <div className="col-md-6 d-flex flex-column mb-md-10 mb-5">
                <label htmlFor="status" className="pb-2 fs-5 text-gray-600">
                  Status:
                </label>
                <span className="fs-5 text-gray-800">
                  <div className="badge bg-light-success">Active</div>
                </span>
              </div>
              <div className="col-md-6 d-flex flex-column mb-md-10 mb-5">
                <label htmlFor="created on" className="pb-2 fs-5 text-gray-600">
                  Created On:
                </label>
                <span className="fs-5 text-gray-800" title="4th May, 2024">
                  4 days ago
                </span>
              </div>
              <div className="col-md-6 d-flex flex-column mb-md-10 mb-5">
                <label htmlFor="updated on" className="pb-2 fs-5 text-gray-600">
                  Last Updated:
                </label>
                <span className="fs-5 text-gray-800" title="4th May, 2024">
                  4 days ago
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-md-flex align-items-center justify-content-between">
            <h4 className="title_sm my-5">Address Details</h4>            
        </div>
        <div className="d-flex flex-column">
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col-md-6 d-flex flex-column mb-md-10 mb-5">
                        <label htmlFor="address1" className="pb-2 fs-5 text-gray-600">Address 1:</label>
                        <span className="fs-5 text-gray-800">Ggggg hg hg</span>
                    </div>
                    <div className="col-md-6 d-flex flex-column mb-md-10 mb-5">
                        <label htmlFor="address2" className="pb-2 fs-5 text-gray-600">Address 2:</label>
                        <span className="fs-5 text-gray-800">N/A</span>
                    </div>
                    <div className="col-md-6 d-flex flex-column mb-md-10 mb-5">
                        <label htmlFor="city" className="pb-2 fs-5 text-gray-600">City:</label>
                        <span className="fs-5 text-gray-800">Thhv</span>
                    </div>
                    <div className="col-md-6 d-flex flex-column mb-md-10 mb-5">
                        <label htmlFor="zip" className="pb-2 fs-5 text-gray-600">Zip:</label>
                        <span className="fs-5 text-gray-800">N/A</span>
                    </div>
                </div>

            </div>
        </div>
    </div>
   
    </>
  );
};

export default Doctor_details;
