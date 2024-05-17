import React from 'react'

const Overview = () => {
  return (
    <div>
        <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-6 d-flex flex-column mb-md-10 mb-4">
                            <label htmlFor="name" className="pb-2 fs-5 text-gray-600">Phone:</label>
                            <span className="fs-5 text-gray-800">+233555555555</span>
                        </div>
                        <div className="col-sm-6 d-flex flex-column mb-md-10 mb-4">
                            <label htmlFor="name" className="pb-2 fs-5 text-gray-600">Gender:</label>
                            <span className="fs-5 text-gray-800">Male</span>
                        </div>
                        <div className="col-sm-6 d-flex flex-column mb-md-10 mb-4">
                            <label htmlFor="name" className="pb-2 fs-5 text-gray-600">Blood Group:</label>
                                                            <span className="text-success"> A3s </span>
                                                    </div>
                        <div className="col-sm-6 d-flex flex-column mb-md-10 mb-4">
                            <label htmlFor="name" className="pb-2 fs-5 text-gray-600">Date Of Birth</label>
                            <span className="fs-5 text-gray-800">10th May, 2023</span>
                        </div>
                        <div className="col-sm-6 d-flex flex-column mb-md-10 mb-4">
                            <label htmlFor="name" className="pb-2 fs-5 text-gray-600">Created On:</label>
                            <span className="fs-5 text-gray-800">11 months ago</span>
                        </div>
                        <div className="col-sm-6 d-flex flex-column mb-md-10 mb-4">
                            <label htmlFor="name" className="pb-2 fs-5 text-gray-600">Last Updated:</label>
                            <span className="fs-5 text-gray-800">3 months ago</span>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Overview