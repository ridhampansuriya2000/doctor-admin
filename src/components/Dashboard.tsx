import React from 'react'
import Sidebar from './Common/Sidebar'
import DashboardBody from './DashboardBody'
import Login from './Common/Login'

const Dashboard = () => {
  return (
    <>
    {/* <Login/> */}
    <Sidebar/>
    <DashboardBody/>
    </>
  )
}

export default Dashboard