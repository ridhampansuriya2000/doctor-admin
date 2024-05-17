import React from 'react'
import Sidebar from './Common/Sidebar'
import DashboardBody from './DashboardBody'
import Login from './Common/Login'
import Header from "./Common/Header";

const Dashboard = () => {
  return (
    <>
    {/* <Login/> */}
    {/*<Sidebar/>*/}
      <Header
          linkTexts={[{title:"Doctor", path :'/doctor'}]}
          children=''
      />
    <DashboardBody/>
    </>
  )
}

export default Dashboard