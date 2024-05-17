import React from 'react'
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Overview = () => {
  return (
    <div>
        <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-6 d-flex flex-column mb-md-10 mb-5">
                            <label htmlFor="name" className="pb-2 fs-5 text-gray-600">Hospital Name:</label>
                            <span className="fs-5 text-gray-800">Norvic Hospital</span>
                        </div>
                        <div className="col-sm-6 d-flex flex-column mb-md-10 mb-5">
                            <label htmlFor="name" className="pb-2 fs-5 text-gray-600">Hospital Slug:</label>
                            <a href="https://hms-saas.infyom.com/h/02447960" className="show-btn text-decoration-none" target="_blank">02447960
                                <span className="ms-2 text-gray-800 text-primary"><FaArrowUpRightFromSquare/></span>
                            </a>
                        </div>
                        <div className="col-sm-6 d-flex flex-column mb-md-10 mb-5">
                            <label htmlFor="name" className="pb-2 fs-5 text-gray-600">Email:</label>
                            <span className="fs-5 text-gray-800">sunil@company.com</span>
                        </div>
                        <div className="col-sm-6 d-flex flex-column mb-md-10 mb-5">
                            <label htmlFor="name" className="pb-2 fs-5 text-gray-600">Role:</label>
                            <span className="fs-5 text-gray-800">Admin</span>
                        </div>
                        <div className="col-sm-6 d-flex flex-column mb-md-10 mb-5">
                            <label htmlFor="name" className="pb-2 fs-5 text-gray-600">Phone:</label>
                            <span className="fs-5 text-gray-800">9844096247</span>
                        </div>
                        <div className="col-sm-6 d-flex flex-column mb-md-10 mb-5">
                            <label htmlFor="name" className="pb-2 fs-5 text-gray-600">Created On:</label>
                            <span className="fs-5 text-gray-800">2 days ago</span>
                        </div>
                        <div className="col-sm-6 d-flex flex-column mb-md-10 mb-5">
                            <label htmlFor="name" className="pb-2 fs-5 text-gray-600">Last Updated:</label>
                            <span className="fs-5 text-gray-800">2 days ago</span>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Overview