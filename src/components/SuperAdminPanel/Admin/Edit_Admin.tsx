import React from "react";
import FileUploader from "../../Common/FileUploader";

const Edit_Admin = () => {
  return (
    <div>
      <div className="content d-flex flex-column flex-column-fluid pt-7">
        <div className="container-fluid">
          <div className="d-md-flex align-items-center justify-content-between mb-5">
            <h1 className="mb-0 title_sm">Edit Admin</h1>
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
                <div className="col-md-6">
                  <div className="mb-sm-7 mb-4">
                    <label htmlFor="formInputfirstname" className="form-label">
                      First Name <span className="required"></span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="Bhautik"
                      value={"Bhautik"}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-sm-7 mb-4">
                    <label htmlFor="formInputlastname" className="form-label">
                      Last Name <span className="required"></span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="Bhalala"
                      value={"Bhalala"}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-sm-7 mb-4">
                    <label htmlFor="formInputEmail" className="form-label">
                      Email <span className="required"></span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="Bhalala"
                      value={"bha1222@gmail.com"}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-sm-7 mb-4">
                    <label htmlFor="formInputEmail" className="form-label">
                      Phone <span className="required"></span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="Phone"
                      value={"9876543210"}
                    />
                  </div>
                </div>
                <FileUploader label="Profile"/>
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
  );
};

export default Edit_Admin;
