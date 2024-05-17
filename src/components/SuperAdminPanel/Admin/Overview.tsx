import React from "react";

const Overview = () => {
  return (
    <div>
      <div className="card mb-5 mb-xl-10">
        <div>
          <div className="card-body">
            <div className="row">
              <div className="col-sm-6 d-flex flex-column mb-md-10 mb-5">
                <label className="pb-2 fs-5 text-gray-600">Phone</label>
                <div className="col-lg-8">
                  <span className="fs-5 text-gray-800">+919876543210</span>
                </div>
              </div>
              <div className="col-sm-6 d-flex flex-column mb-md-10 mb-5">
                <label className="pb-2 fs-5 text-gray-600">Created On</label>
                <div className="col-lg-8">
                  <span className="fs-5 text-gray-800 me-2">1 month ago</span>
                </div>
              </div>
              <div className="col-sm-6 d-flex flex-column mb-md-10 mb-5">
                <label className="pb-2 fs-5 text-gray-600">Last Updated</label>
                <div className="col-lg-8">
                  <span className="fs-5 text-gray-800 me-2">1 month ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
