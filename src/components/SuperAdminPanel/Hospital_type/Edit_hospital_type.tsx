import React from 'react'


const Edit_hospital_type = () => {
  return (
    <div>
        <div className="row mb-4">
                    <div className="form-group col-sm-12">
                        <label htmlFor="name" className="form-label">Hospital Type:</label>
                        <span className="required"></span>
                        <input className="form-control"  name="name" placeholder="Hospital Type" type="text" id="name" value ="All"/>
                    </div>
                </div>
    </div>
  )
}

export default Edit_hospital_type