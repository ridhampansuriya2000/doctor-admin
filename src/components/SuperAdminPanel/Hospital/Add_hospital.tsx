import React, { useState } from "react";

const Add_hospital = () => {
  const [hospitalType, setHospitalType] = useState("");

  return (
    <div>
      <div>
        <div className="content d-flex flex-column flex-column-fluid pt-7">
          <div className="container-fluid">
            <div className="d-md-flex align-items-center justify-content-between mb-5">
              <h1 className="mb-0 title_sm">New Hospital</h1>
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
        </div>
        <div className="container-fluid">
          <div className="card">
            <div className="card-body">
              <form action="#">
                <div className="row mb-5">
                  <div className="col-md-4">
                    <div className="mb-sm-7 mb-4">
                      <label
                        htmlFor="hospitalName"
                        className="form-label"
                      >
                        Hospital Name <span className="required"></span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="hospitalName"
                        placeholder="Enter Hospital Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-sm-7 mb-4">
                      <label htmlFor="hospitalSlug" className="form-label">
                        Hospital Slug <span className="required"></span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="hospitalSlug"
                        placeholder="Enter Hospital Slug"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-sm-7 mb-4">
                      <label htmlFor="hospitalType" className="form-label">
                        Hospital Type
                      </label>
                      <select
                        className="form-select"
                        value={hospitalType}
                        onChange={(e) => setHospitalType(e.target.value)}
                        name="hospitalType"
                      >
                        <option value="">Select Hospital Type</option>
                        <option value="type1">Hospital 1</option>
                        <option value="type2">Hospital 2</option>
                        <option value="type3">Hospital 3</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-sm-7 mb-4">
                      <label htmlFor="email" className="form-label">
                        Email <span className="required"></span>
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Enter Email"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-sm-7 mb-4">
                      <label htmlFor="city" className="form-label">
                        City
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="city"
                        placeholder="Enter City"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-sm-7 mb-4">
                      <label htmlFor="phone" className="form-label">
                        Phone <span className="required"></span>
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        placeholder="Enter Phone"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-sm-7 mb-4">
                      <label htmlFor="password" className="form-label">
                        Password <span className="required"></span>
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Enter Password"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-sm-7 mb-4">
                      <label htmlFor="confirmPassword" className="form-label">
                        Confirm Password <span className="required"></span>
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                      />
                    </div>
                  </div>
                  <div className="d-flex justify-content-end">
                    <input
                      className="btn btn-primary me-2"
                      type="submit"
                      value="Save"
                    />
                    <a
                      href="https://hms-saas.infyom.com/super-admin/admins"
                      className="btn btn-secondary"
                    >
                      Cancel
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add_hospital;
