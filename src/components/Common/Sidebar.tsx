import React, { useState } from 'react';
import { BsList, BsCalendarCheck, BsFillHospitalFill, BsFillPersonFill, BsCalendarFill, BsFillFileEarmarkMedicalFill, BsPersonBoundingBox, BsGearFill, BsPersonCheckFill, BsSearch, BsFileMedical, BsPieChartFill } from 'react-icons/bs';
import '../../Styles/app.css';

const Sidebar = ({routes}:any) => {
  const [isOpen, setIsOpen] = useState(true); // Set initial state to true

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={isOpen ? "sidebar open" : "sidebar"}>
      <div className="logo-details">
        <div className="logo_name">        
          <a href="#" className="image mb-5 mb-sm-10">
          <img src="/image/brand.svg" alt="Nav Image" />
          </a>       
        </div>
        <BsList className='bx bx-menu' id="btn" onClick={toggleSidebar} />
      </div>
      {!isOpen && (
        <div className="iconSet">
          <ul>
            <li>
              <a href="#">
                <BsSearch />
              </a>
            </li>
            <li>
              <a href="#" className='active'>
                <BsCalendarCheck />
              </a>
            </li>
            <li>
              <a href="#">
                <BsFillHospitalFill />
              </a>
            </li>
            <li>
              <a href="#">
                <BsFillPersonFill />
              </a>
            </li>
            <li>
              <a href="#">
                <BsCalendarFill />
              </a>
            </li>
            <li>
              <a href="#">
                <BsFillFileEarmarkMedicalFill />
              </a>
            </li>
            <li>
              <a href="#">
                <BsPersonBoundingBox />
              </a>
            </li>
            <li>
              <a href="#">
                <BsGearFill />
              </a>
            </li>
            <li>
              <a href="#">
                <BsFileMedical />
              </a>
            </li>
            <li>
              <a href="#">
                <BsPieChartFill />
              </a>
            </li>
            <li>
              <a href="#">
                <BsPersonCheckFill />
              </a>
            </li>
          </ul>
        </div>
      )}
      {isOpen && (
        <ul className="nav-list">
          <li className='searchBar'>
            <BsSearch />
            <input type="text" placeholder="Search..." />
            <span className="tooltip">Search</span>
          </li>
          <li>
            <a href="#">
              <BsCalendarCheck />
              <span className="links_name">Appointments</span>
            </a>
            <span className="tooltip">Appointments</span>
          </li>
          <li>
            <a href="#">
              <BsFillHospitalFill />
              <span className="links_name">Bed Management</span>
            </a>
            <span className="tooltip">Bed Management</span>
          </li>
          <li>
            <a href="#" className='active'>
              <BsFillPersonFill />
              <span className="links_name">Doctors</span>
            </a>
            <span className="tooltip">Doctors</span>
          </li>
          <li>
            <a href="#">
              <BsCalendarFill />
              <span className="links_name">Schedule</span>
            </a>
            <span className="tooltip">Schedule</span>
          </li>
          <li>
            <a href="#">
              <BsFillFileEarmarkMedicalFill />
              <span className="links_name">Prescriptions</span>
            </a>
            <span className="tooltip">Prescriptions</span>
          </li>
          <li>
            <a href="#">
              <BsPersonBoundingBox />
              <span className="links_name">DIAGNOSIS</span>
            </a>
            <span className="tooltip">DIAGNOSIS</span>
          </li>
          <li>
            <a href="#">
              <BsGearFill />
              <span className="links_name">Notice Boards</span>
            </a>
            <span className="tooltip">Notice Boards</span>
          </li>
          <li>
            <a href="#">
              <BsFileMedical />
              <span className="links_name">IPD Patients</span>
            </a>
            <span className="tooltip">IPD Patients</span>
          </li>
          <li>
            <a href="#">
              <BsPieChartFill />
              <span className="links_name">Payrolls</span>
            </a>
            <span className="tooltip">Payrolls</span>
          </li>
          <li>
            <a href="#">
              <BsPersonCheckFill />
              <span className="links_name">Patients</span>
            </a>
            <span className="tooltip">Patients</span>
          </li>
          {/* <li className="profile">
            <div className="profile-details">
              <BsBoxArrowLeft />
              <div className="name_job">
                <div className="name">Logout</div>
              </div>
            </div>
            <BsBoxArrowRight id="log_out"/>
          </li> */}
        </ul>
      )}
    </div>
  );
}

export default Sidebar;
