import React from "react";

const Footer_setting = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="card border-0">
          <div className="card-body">
            <form action="#">
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group mb-5">
                    <label htmlFor="footertext" className="form-label">
                      Footer Text <span className="required"></span>
                    </label>
                    <textarea
                      className="form-control"
                      tabIndex={1}
                      rows={5}
                      maxLength={191}
                      placeholder="enter text"
                      name="footertext"
                      cols={50}
                      id="footertext"
                    >
                      Over past 10+ years of experience and skills in various
                      technologies, we built great scalable products. Whatever
                      technology we worked with, we just not build products for
                      our clients but we a
                    </textarea>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-sm-7 mb-4">
                    <label htmlFor="email" className="form-label">
                      Email <span className="required"></span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={"admin@hms.com"}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-sm-7 mb-4">
                    <label htmlFor="phone" className="form-label">
                      Phone Number
                      <span className="required"></span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      value={"2345678900"}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-sm-7 mb-4">
                    <label htmlFor="address" className="form-label">
                      Address: <span className="required"></span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      value={"423B, Road Wordwide Country, USA"}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-sm-7 mb-4">
                    <label htmlFor="facebook_url" className="form-label">
                      Facebook URL: <span className="required"></span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="facebook_url"
                      value={"https://www.facebook.com/infyom/"}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-sm-7 mb-4">
                    <label htmlFor="twitter_url" className="form-label">
                      Twitter URL: <span className="required"></span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="twitter_url"
                      value={"https://twitter.com/infyom?lang=en"}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-sm-7 mb-4">
                    <label htmlFor="instagram_url" className="form-label">
                      Instagram URL: <span className="required"></span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="instagram_url"
                      value={"https://www.instagram.com/?hl=en"}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-sm-7 mb-4">
                    <label htmlFor="linkdIn_url" className="form-label">
                      LinkedIn URL: <span className="required"></span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="linkdIn_url"
                      value={
                        "https://www.linkedin.com/organization-guest/company/infyom-technologies?challengeId=AQFgQaMxwSxCdAAAAXOA_wosiB2vYdQEoITs6w676AzV8cu8OzhnWEBNUQ7LCG4vds5-A12UIQk1M4aWfKmn6iM58OFJbpoRiA&subm"
                      }
                    />
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

export default Footer_setting;
