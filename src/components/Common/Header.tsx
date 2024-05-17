import React, { useState } from "react";
import { FaMoon, FaBell } from "react-icons/fa";
import { Dropdown } from "react-bootstrap";
import {
  FaUser,
  FaLock,
  FaGlobe,
  FaSignOutAlt,
  FaCalendarCheck,
} from "react-icons/fa";
import Custom_Modal from "./Custom_Modal";
import Edit_profile from "./Edit_profile";
import Change_password from "./Change_password";
import Change_language from "./Change_language";
import {Link, useLocation} from "react-router-dom";

interface HeaderProps {
  linkTexts: any[];
  children: any;
}
const Header: React.FC<HeaderProps> = ({ linkTexts=[] , children,  }) => {

  const location : any = useLocation();

  const [key, setKey] = useState<string>("home"); 

  return (
    <>
      <nav className="navbar">
        <div className="page_links">
          <ul className="d-flex gap-4">
          {linkTexts.map((item, index) => (
              <li key={index}>
                <Link to={item.path}  className={item?.path === location.pathname ? 'active' : ''}>
                  {item?.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar_right">
          <FaMoon />

          <Dropdown className="notification">
            <Dropdown.Toggle variant="light" id="notification">
              <FaBell />
              <span
                className="position-absolute top-0 start-100 translate-middle badge badge-circle bg-danger end-0 w-100"
                id="counter"
              >
                18
              </span>
              <span className="caret-down"></span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <div className="text-start border-bottom py-2 px-3">
                <h5>Notifications</h5>
              </div>
              <div className="px-3 mt-3 inner-scroll">
                <div className="d-flex position-relative mb-4 notification">
                  <div className="me-3 text-primary fs-5 icon-label">
                    <FaCalendarCheck />
                  </div>

                  <div>
                    <a href="#" className="text-decoration-none">
                      <h5 className="text-gray-900 fs-6 mb-2">
                        2345Ap 656Api appointment has been booked.
                      </h5>
                    </a>
                    <h6 className="text-gray-600 fs-small fw-light mb-0">
                      2 hours
                    </h6>
                  </div>
                </div>
                <div className="d-flex position-relative mb-4 notification">
                  <div className="me-3 text-primary fs-5 icon-label">
                    <FaCalendarCheck />
                  </div>

                  <div>
                    <a href="#" className="text-decoration-none">
                      <h5 className="text-gray-900 fs-6 mb-2">
                        2345Ap 656Api appointment has been booked.
                      </h5>
                    </a>
                    <h6 className="text-gray-600 fs-small fw-light mb-0">
                      2 hours
                    </h6>
                  </div>
                </div>
                <div className="d-flex position-relative mb-4 notification">
                  <div className="me-3 text-primary fs-5 icon-label">
                    <FaCalendarCheck />
                  </div>

                  <div>
                    <a href="#" className="text-decoration-none">
                      <h5 className="text-gray-900 fs-6 mb-2">
                        2345Ap 656Api appointment has been booked.
                      </h5>
                    </a>
                    <h6 className="text-gray-600 fs-small fw-light mb-0">
                      2 hours
                    </h6>
                  </div>
                </div>
                <div className="d-flex position-relative mb-4 notification">
                  <div className="me-3 text-primary fs-5 icon-label">
                    <FaCalendarCheck />
                  </div>

                  <div>
                    <a href="#" className="text-decoration-none">
                      <h5 className="text-gray-900 fs-6 mb-2">
                        2345Ap 656Api appointment has been booked.
                      </h5>
                    </a>
                    <h6 className="text-gray-600 fs-small fw-light mb-0">
                      2 hours
                    </h6>
                  </div>
                </div>
              </div>
              <div className="text-center border-top p-2 mark-read">
                <h6>
                  <a
                    href="#"
                    className="text-primary mb-0 fs-5 read-all-notification text-decoration-none"
                    id="readAllNotification"
                  >
                    Mark All As Read
                  </a>
                </h6>
              </div>
            </Dropdown.Menu>
          </Dropdown>

          <div className="user_icn">
            {" "}
            <img src="/image/nav_img.svg" alt="Nav Image" />
          </div>
          <Dropdown>
            <Dropdown.Toggle
              variant="light"
              id="dropdown-user"
              className="user_dropdown"
            >
              Vatsal Sakariya
              <span className="caret-down"></span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <div className="text-center border-bottom pb-3">
                <div className="img_circle">
                  <img src="/image/nav_img.svg" alt="Nav Image" />
                </div>
                <h3 className="text-gray-900">Vatsal Sakariya</h3>
                <h4 className="mb-0 fw-400 fs-6">vatsal@gmail.com</h4>
              </div>
              <ul className="dropdown_links">
                <li>
                  {" "}
                  <Custom_Modal
                    icon={<FaUser className="me-2 text-gray-600" />}
                    modalTitle="Edit Profile"
                    buttonTitle="Edit Profile"
                    modalContent={<Edit_profile />}
                    modal_class="modal-lg"
                  />
                </li>
                <li>
                  {" "}
                  <Custom_Modal
                    icon={<FaLock className="me-2 text-gray-600" />}
                    modalTitle="Change Password"
                    buttonTitle="Change Password"
                    modalContent={<Change_password />}
                    modal_class="modal"
                  />
                </li>
                <li>
                  {" "}
                  <Custom_Modal
                    icon={<FaGlobe className="me-2 text-gray-600" />}
                    modalTitle="Change Language"
                    buttonTitle="Change Language"
                    modalContent={<Change_language />}
                    modal_class="modal"
                  />
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <FaSignOutAlt className="me-2 t ext-gray-600" /> Logout
                  </a>
                </li>
              </ul>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </nav>
      {children}
    </>
  );
};

export default Header;
