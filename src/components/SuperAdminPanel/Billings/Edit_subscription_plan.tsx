import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { FaQuestionCircle } from "react-icons/fa";

const Edit_subscription_plan = () => {
  const [Currency, setCurrency] = useState("");
  const [Frequency, setFrequency] = useState("");
  const [checked, setChecked] = useState(false);
  const [allFeaturesChecked, setAllFeaturesChecked] = useState(false);

   // Function to handle changes to the "Select All" checkbox
   const handleSelectAllChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setAllFeaturesChecked(isChecked);
    // Update state of individual checkboxes based on "Select All" checkbox
    document.querySelectorAll<HTMLInputElement>('.feature').forEach((checkbox) => {
      checkbox.checked = isChecked;
    });
  };

  // Function to handle changes to individual checkboxes
  const handleFeatureChange = () => {
    const checkboxes = document.querySelectorAll<HTMLInputElement>('.feature');
    const allChecked = Array.from(checkboxes).every((checkbox) => checkbox.checked);
    setAllFeaturesChecked(allChecked);
  };

  return (
    <div>
      <div className="content d-flex flex-column flex-column-fluid pt-7">
        <div className="container-fluid">
          <div className="d-md-flex align-items-center justify-content-between mb-5">
            <h1 className="mb-0 title_sm"> Edit Subscription Plan</h1>
            <a
              href="https://hms-saas.infyom.com/super-admin/subscription-plans"
              className="btn btn-outline-primary"
            >
              Back
            </a>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="card">
          <div className="card-body p-12">
            <form action="#">
              <div className="row">
                <div className="col-md-4">
                  <div className="mb-sm-7 mb-4">
                    <label htmlFor="formInputName" className="form-label">
                      Name <span className="required"></span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="Policy_no"
                      value={"Enterprise"}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-sm-7 mb-4">
                    <label htmlFor="formInsurance" className="form-label">
                      Currency
                    </label>
                    <select
                      className="form-select"
                      value={Currency}
                      onChange={(e) => setCurrency(e.target.value)}
                    >
                      <option value="">Select Currency</option>
                      <option value="Currency1">
                        $ - USD United states dollar
                      </option>
                      <option value="Currency2">
                        AU$ - AUD Australian Dollar
                      </option>
                      <option value="Currency3">¥ - JPY Japanese Yen 3</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-sm-7 mb-4">
                    <label htmlFor="formInputPrice" className="form-label">
                      Price <span className="required"></span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="Policy_no"
                      value={"100"}
                    />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-sm-7 mb-4">
                    <label htmlFor="frequency" className="form-label">
                      Frequency <span className="required"></span>
                    </label>
                    <select
                      className="form-select"
                      value={Frequency}
                      onChange={(e) => setFrequency(e.target.value)}
                    >
                      <option value="Frequency1">Month</option>
                      <option value="Frequency2">Year</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-sm-7 mb-4">
                    <label htmlFor="formInputPrice" className="form-label">
                      Trial Days <span className="required"></span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="trial"
                      value={"3"}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <h4 className="mt-2 title_sm">Plan Features</h4>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <label className="form-check form-switch form-check-custom form-check-solid float-end">
                      <input
                        className="form-check-input cursor-pointer me-3"
                        type="checkbox"
                        name="select_all"
                        id="selectAllPlanFeatures"
                        value="0"
                        checked={allFeaturesChecked}
                        onChange={handleSelectAllChange}
                      />
                      <span className="form-check-label">Select All</span>
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12 mb-5">
                    <label className="form-check form-switch form-check-custom">
                      <input
                        className="form-check-input feature me-2"
                        type="checkbox"
                        name="plan_feature[]"
                        value="1"
                      />
                      <span className="form-check-label">Appointments</span>
                      &nbsp;&nbsp;
                    </label>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12 mb-5">
                    <label className="form-check form-switch form-check-custom">
                      <input
                        className="form-check-input feature me-2"
                        type="checkbox"
                        name="plan_feature[]"
                        value="3"
                      />
                      <span className="form-check-label">Blood Banks</span>
                      &nbsp;&nbsp;
                      <span
                        data-bs-toggle="tooltip"
                        id="planTooltip"
                        data-placement="top"
                        data-bs-original-title="This menu contains
                          4 sub menus."
                      >
                        <FaQuestionCircle />
                      </span>
                    </label>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12 mb-5">
                    <label className="form-check form-switch form-check-custom">
                      <input
                        className="form-check-input feature me-2"
                        type="checkbox"
                        name="plan_feature[]"
                        value="7"
                      />
                      <span className="form-check-label">Documents</span>
                      &nbsp;&nbsp;
                      <span
                        data-bs-toggle="tooltip"
                        id="planTooltip"
                        data-placement="top"
                        data-bs-original-title="This menu contains
                          2 sub menus."
                      >
                        <FaQuestionCircle />
                      </span>
                    </label>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12 mb-5">
                    <label className="form-check form-switch form-check-custom">
                      <input
                        className="form-check-input feature me-2"
                        type="checkbox"
                        name="plan_feature[]"
                        value="9"
                      />
                      <span className="form-check-label">
                        Live Consultations
                      </span>
                      &nbsp;&nbsp;
                      <span
                        data-bs-toggle="tooltip"
                        id="planTooltip"
                        data-placement="top"
                        data-bs-original-title="This menu contains
                          2 sub menus."
                      >
                        <FaQuestionCircle />
                      </span>
                    </label>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12 mb-5">
                    <label className="form-check form-switch form-check-custom">
                      <input
                        className="form-check-input feature me-2"
                        type="checkbox"
                        name="plan_feature[]"
                        value="11"
                      />
                      <span className="form-check-label">Inventory</span>
                      &nbsp;&nbsp;
                      <span
                        data-bs-toggle="tooltip"
                        id="planTooltip"
                        data-placement="top"
                        data-bs-original-title="This menu contains
                          4 sub menus."
                      >
                        <FaQuestionCircle />
                      </span>
                    </label>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12 mb-5">
                    <label className="form-check form-switch form-check-custom">
                      <input
                        className="form-check-input feature me-2"
                        type="checkbox"
                        name="plan_feature[]"
                        value="15"
                      />
                      <span className="form-check-label">Vaccinations</span>
                      &nbsp;&nbsp;
                      <span
                        data-bs-toggle="tooltip"
                        id="planTooltip"
                        data-placement="top"
                        data-bs-original-title="This menu contains
                          2 sub menus."
                      >
                        <FaQuestionCircle />
                      </span>
                    </label>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12 mb-5">
                    <label className="form-check form-switch form-check-custom">
                      <input
                        className="form-check-input feature me-2sms-limit"
                        type="checkbox"
                        name="plan_feature[]"
                        value="17"
                      />
                      <span className="form-check-label">SMS / Mail</span>
                      &nbsp;&nbsp;
                      <span
                        data-bs-toggle="tooltip"
                        id="planTooltip"
                        data-placement="top"
                        data-bs-original-title="This menu contains
                          2 sub menus."
                      >
                        <FaQuestionCircle />
                      </span>
                    </label>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12 mb-5">
                    <label className="form-check form-switch form-check-custom">
                      <input
                        className="form-check-input feature me-2"
                        type="checkbox"
                        name="plan_feature[]"
                        value="19"
                      />
                      <span className="form-check-label">Radiology</span>
                      &nbsp;&nbsp;
                      <span
                        data-bs-toggle="tooltip"
                        id="planTooltip"
                        data-placement="top"
                        data-bs-original-title="This menu contains
                          2 sub menus."
                      >
                        <FaQuestionCircle />
                      </span>
                    </label>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12 mb-5">
                    <label className="form-check form-switch form-check-custom">
                      <input
                        className="form-check-input feature me-2"
                        type="checkbox"
                        name="plan_feature[]"
                        value="21"
                      />
                      <span className="form-check-label">Reports</span>
                      &nbsp;&nbsp;
                      <span
                        data-bs-toggle="tooltip"
                        id="planTooltip"
                        data-placement="top"
                        data-bs-original-title="This menu contains
                          4 sub menus."
                      >
                        <FaQuestionCircle />
                      </span>
                    </label>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12 mb-5">
                    <label className="form-check form-switch form-check-custom">
                      <input
                        className="form-check-input feature me-2"
                        type="checkbox"
                        name="plan_feature[]"
                        value="25"
                      />
                      <span className="form-check-label">Pathology</span>
                      &nbsp;&nbsp;
                      <span
                        data-bs-toggle="tooltip"
                        id="planTooltip"
                        data-placement="top"
                        data-bs-original-title="This menu contains
                          2 sub menus."
                      >
                        <FaQuestionCircle />
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <input
                  className="btn btn-primary me-2"
                  id="saveBtn"
                  type="submit"
                  value="Save"
                />
                <a
                  href="https://hms-saas.infyom.com/patient-admissions"
                  className="btn btn-secondary"
                >
                  Cancel
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit_subscription_plan;
