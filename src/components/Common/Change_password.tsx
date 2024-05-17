import React from 'react'

const Change_password = () => {
  return (
    <>
      <form action="#">
      <div className="mb-sm-7 mb-4">
              <label htmlFor="formInputEmail" className="form-label">
              Current Password <span className="required"></span>
              </label>
              <input
                type="password"
                className="form-control"
                name="email"
                placeholder=" Current Password"
                id="formInputEmail"
                value={"Vatsal"}
              />
            </div>
      <div className="mb-sm-7 mb-4">
              <label htmlFor="formInputEmail" className="form-label">
              New Password <span className="required"></span>
              </label>
              <input
                type="password"
                className="form-control"
                name="email"
                placeholder="New Password"
                id="formInputEmail"
                value={"Vatsal"}
              />
            </div>
      <div className="mb-sm-7 mb-4">
              <label htmlFor="formInputEmail" className="form-label">
              Confirm Password <span className="required"></span>
              </label>
              <input
                type="password"
                className="form-control"
                name="email"
                placeholder="Confirm Password"
                id="formInputEmail"
                value={"Vatsal"}
              />
            </div>
      </form>

    </>
  )
}

export default Change_password