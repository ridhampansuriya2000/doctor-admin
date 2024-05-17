import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Edit_subscription = () => {
  const [subscriptionDate, setSubscriptionDate] = useState<Date | null>(null); // State for admission date
  return (
    <div>
      <div className="content d-flex flex-column flex-column-fluid pt-7">
        <div className="container-fluid">
          <div className="d-md-flex align-items-center justify-content-between mb-5">
            <h1 className="mb-0 title_sm">Edit Subscription</h1>
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
              <div className="card mt-10">
                <div className="card-body p-12">
                  <input
                    className="subscriptionEndAt"
                    name="editEndAt"
                    type="hidden"
                    value="2024-05-21 05:39"
                  />
                  <form
                    method="POST"
                    action="https://hms-saas.infyom.com/super-admin/subscriptions-hospitals/1367"
                    acceptCharset="UTF-8"
                    id="editSubscription"
                  >
                    <input name="_method" type="hidden" value="PATCH" />
                    <input
                      name="_token"
                      type="hidden"
                      value="FFmeAolt4Dd4L6I6bObQX5thDUXCUiNrF7mrmrnI"
                    />
                    <input
                      type="hidden"
                      name="_token"
                      value="FFmeAolt4Dd4L6I6bObQX5thDUXCUiNrF7mrmrnI"
                      autoComplete="off"
                    />
                    <div className="row gx-10 mb-5">
                      <div className="form-group col-md-3 mb-5">
                        <label htmlFor="user_full_name" className="form-label">
                          Hospital Name:
                        </label>
                        <br />
                        <span className="fs-5 text-gray-800">Test demo </span>
                      </div>
                      <div className="form-group col-md-3 mb-5">
                        <label
                          htmlFor="subscription_plan_name"
                          className="form-label"
                        >
                          Plan Name:
                        </label>
                        <div className="d-flex">
                          <span className="fs-5 text-gray-800">
                            Professional
                          </span>
                          &nbsp;&nbsp;
                          <span className="badge fs-6 bg-light-success">
                            Active
                          </span>
                        </div>
                      </div>
                      <div className="form-group col-md-3 mb-5">
                        <label htmlFor="payment_status" className="form-label">
                          Frequency:
                        </label>
                        <p className="m-0">
                          <span className="badge fs-6 bg-light-primary">
                            Year
                          </span>
                        </p>
                      </div>
                      <div className="form-group col-md-3 mb-5">
                        <label htmlFor="status" className="form-label">
                          Status:
                        </label>
                        <span className="required"></span>
                        <div>
                          <span className="badge fs-6 bg-light-success">
                            Active
                          </span>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group mb-5">
                          <label htmlFor="starts_at" className="form-label">
                            Start Date:
                          </label>
                          <br />
                          <span
                            className="fs-5 text-gray-800"
                            title="16th May, 2024"
                          >
                            5:39 AM 16th May, 2024
                          </span>
                        </div>
                      </div>

                      <div className="col-md-3">
                        <div className="mb-sm-7 mb-4">
                          <label
                            htmlFor="formInputEmail"
                            className="form-label"
                          >
                            Expires On
                          </label>
                          <DatePicker
                            selected={subscriptionDate}
                            onChange={(date) => setSubscriptionDate(date)}
                            className="form-control"
                            id="formsubscriptionDate"
                            placeholderText="Subscription Date"
                          />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="mb-sm-7 mb-4">
                          <label
                            htmlFor="formInputEmail"
                            className="form-label"
                          >
                            Sms Limit
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="email"
                            placeholder="Sakariya"
                            id="formSmsLimit"
                            value={"500"}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-end">
                      <input
                        className="btn btn-primary me-2"
                        id="subscriptionBtnSave"
                        type="submit"
                        value="Save"
                      />
                      <a
                        href="https://hms-saas.infyom.com/super-admin/subscriptions-hospitals"
                        className="btn btn-light btn-active-light-primary me-2"
                      >
                        Cancel
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit_subscription;
