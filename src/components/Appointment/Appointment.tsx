import React from 'react'
import Appointment_listing from './Appointment_listing'
import Patient_details from './Patient_details'
import Appointment_Transaction from './Appointment_Transaction'
import Doctor_details from '../Doctor_panel/Doctor/Doctor_details'
import Doctor_details_tabs from './Doctor_details_tabs'

const Appointment = () => {
  return (
    <div>
        {/* <Appointment_listing/> */}
        {/* <Patient_details/> */}
        {/* <Appointment_Transaction/> */}
        <Doctor_details_tabs/>
    </div>
  )
}

export default Appointment