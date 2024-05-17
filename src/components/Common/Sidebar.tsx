import React, { useState } from 'react';
import { BsList, BsCalendarCheck, BsFillHospitalFill, BsFillPersonFill, BsCalendarFill, BsFillFileEarmarkMedicalFill, BsPersonBoundingBox, BsGearFill, BsPersonCheckFill, BsSearch, BsFileMedical, BsPieChartFill } from 'react-icons/bs';
import '../../Styles/app.css';
import { Link, useLocation  } from 'react-router-dom';
import {navConfig} from "../../routes/navConfig";



const Sidebar = ({routes}:any) => {
  const location : any = useLocation();

  const [isOpen, setIsOpen] = useState(true);

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
            {routes?.map((item:any, index:number) => (
                <li key={index}>
                  <Link to={item.path} className={item?.path.includes(location.pathname) || location.pathname.includes(item?.subPath) ? "active" : ''}>
                    {item.icon}
                  </Link>
                </li>
            ))}
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
          {routes?.map((item:any, index:number) => (
              <li key={index}>
                <Link to={item.path}  className={item?.path === location.pathname ? "active" : ''}>
                  {item.icon}
                  <span className="links_name">{item.title}</span>
                </Link>
                <span className="tooltip">{item.title}</span>
              </li>
          ))}
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
