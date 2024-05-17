import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import FileUploader from "../../Common/FileUploader";
import { FaQuestionCircle } from "react-icons/fa";
import DeleteModal from "../../Common/DeleteModal";
import Table_modal from "../../Common/Table_modal";

const Setting: React.FC = () => {
  const [currency, setCurrency] = useState("");
  const [language, setLanguage] = useState("");
  const [isCaptchaEnabled, setIsCaptchaEnabled] = useState<boolean>(false);

  const handleCaptchaToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCaptchaEnabled(e.target.checked);
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="card border-0">
          <div className="card-body">
            <form action="#">
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-sm-7 mb-4">
                    <label htmlFor="appName" className="form-label">
                      App Name <span className="required"></span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="appName"
                      value={"HMS-SaaS"}
                    />
                  </div>
              </div>
                <div className="col-md-3">
                  <div className="mb-sm-7 mb-4">
                    <label htmlFor="planExpireNotification" className="form-label">
                      Plan Expire Notification (in Days):{" "}
                      <span className="required"></span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="planExpireNotification"
                      value={"8"}
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="mb-sm-7 mb-4">
                    <label htmlFor="defaultCountryCode" className="form-label">
                      Default Country Code: <span className="required"></span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="defaultCountryCode"
                      value={"Kenya+254"}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-sm-7 mb-4">
                    <label htmlFor="frequency" className="form-label">
                      Frequency <span className="required"></span>
                    </label>
                    <select
                      className="form-select"
                      id="frequency"
                      value={currency}
                      onChange={(e) => setCurrency(e.target.value)}
                    >
                      <option value="Frequency1">
                        A$ &nbsp; &nbsp; Australian Dollar
                      </option>
                      <option value="Frequency2">
                        $ &nbsp; &nbsp; United states dollar
                      </option>
                    </select>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12 mb-5">
                  <label htmlFor="enableCaptcha" className="form-label">
                    Enable Google reCAPTCHA
                  </label>
                  <label className="form-check form-switch enableCaptcha">
                    <input
                      className="form-check-input feature me-2"
                      type="checkbox"
                      name="plan_feature[]"
                      value="19"
                      onChange={handleCaptchaToggle}
                    />
                    &nbsp;&nbsp;
                    <span
                      data-bs-toggle="tooltip"
                      id="planTooltip"
                      data-placement="top"
                      data-bs-original-title="This menu contains
                          2 sub menus."
                    ></span>
                  </label>
                </div>
                <div className="col-md-3">
                  <div className="mb-sm-7 mb-4">
                    <label htmlFor="language" className="form-label">
                      Language: <span className="required"></span>
                    </label>
                    <select
                      className="form-select"
                      id="language"
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                    >
                      <option value="language1">Arabic</option>
                      <option value="language2">Chinese</option>
                      <option value="language2">English</option>
                      <option value="language2">French</option>
                    </select>
                  </div>
                </div>
                {isCaptchaEnabled && (
                  <div className="captcha-div col-12">
                    <div className="row">
                      <div className="form-group col-sm-6 mb-5">
                        <label htmlFor="googleCaptchaKey" className="form-label">
                          Google Captcha key:
                        </label>
                        <input
                          className="form-control"
                          id="googleCaptchaKey"
                          placeholder="Google Captcha key"
                          name="google_captcha_key"
                          type="text"
                          value="6Lew7ewdAAAAAB9Rc-w2AM_DEFb1pFVoFYcUoeM7"
                        />
                      </div>
                      <div className="form-group col-sm-6 mb-5">
                        <label htmlFor="googleCaptchaSecret" className="form-label">
                          Google Captcha Secret:
                        </label>
                        <input
                          className="form-control"
                          id="googleCaptchaSecret"
                          placeholder="Google Captcha Secret"
                          name="google_captcha_secret"
                          type="text"
                          value="6Lew7ewdAAAAAIzej2pd4BHnO26f7bZHVygacC--"
                        />
                      </div>
                    </div>
                  </div>
                )}
                <div className="col-md-6">
                  <div className="form-group mb-5">
                    <label htmlFor="manualInstruction" className="form-label">
                      Manual Instruction:
                    </label>
                    <textarea
                      className="form-control"
                      tabIndex={1}
                      rows={5}
                      maxLength={191}
                      placeholder="Manual Instruction"
                      name="manual_instruction"
                      cols={50}
                      id="manualInstruction"
                    >
                      Manual payment instructions are instructions that inform
                      customers on how to make a payment. For example, you might
                      provide the bank account number for clients to wire money
                      too.
                    </textarea>
                  </div>
                </div>
                <div className="form-group col-sm-2">
                  <FileUploader label="App Logo" icon={<FaQuestionCircle />}/>
                </div>
                <div className="form-group col-sm-2">
                  <FileUploader label="Favicon" icon={<FaQuestionCircle />}/>
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

export default Setting;