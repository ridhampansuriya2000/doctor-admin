import React from 'react'

const Add_hospital_type = () => {
  return (
    <div>
        <div>
        <div className="row mb-4">
                    <div className="form-group col-sm-12">
                        <label htmlFor="name" className="form-label">Hospital Type:</label>
                        <span className="required"></span>
                        <input className="form-control"  name="name" placeholder="Hospital Type" type="text" id="name" />
                    </div>
                </div>
    </div>
    </div>
  )
}

export default Add_hospital_type
