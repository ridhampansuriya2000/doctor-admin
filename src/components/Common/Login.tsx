import React from "react";
import "../../Styles/app.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate  = useNavigate();
  const buttons = [
    { name: "SUPER ADMIN", color: "superadmin-login", role:"super_admin" },
    { name: "HOSPITAL ADMIN", color: "admin-login", role:"hospital_admin" },
    { name: "DOCTOR", color: "doctor-login", role:"doctor" },
    { name: "ACCOUNTANT", color: "accountant-login", role:"accountant" },
    { name: "CASE HANDLER", color: "cas-handler-login", role:"case_handler" },
    { name: "RECEPTIONIST", color: "receptionist-login", role:"receptionist" },
    { name: "PHARMACIST", color: "pharmacist-login", role:"pharmacist" },
    { name: "LAB TECHNICIAN", color: "lab-technician-login ", role:"lab_technician" },
    { name: "NURSE", color: "nurse-login", role:"nurse" },
    { name: "PATIENT", color: "patient-login", role:"patient" },
  ];

  const [role,setRole] = React.useState('');

  const onLogin = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if(role){
      localStorage.setItem('isLogin', 'true');
    localStorage.setItem('role', role);
    navigate('/');
    }
  };

  return (
    <>
      <div className="page_body">
        <div className="language-option">
          <DropdownButton
            id="dropdown-item-button"
            title="English"
            className="animated-dropdown p-5 d-flex justify-content-end login_dropdown"
          >
            <Dropdown.Item as="button">Arabic</Dropdown.Item>
            <Dropdown.Item as="button">Chinese</Dropdown.Item>
            <Dropdown.Item as="button">English</Dropdown.Item>
            <Dropdown.Item as="button">French</Dropdown.Item>
            <Dropdown.Item as="button">German</Dropdown.Item>
            <Dropdown.Item as="button">Portuguese</Dropdown.Item>
            <Dropdown.Item as="button">Russian</Dropdown.Item>
            <Dropdown.Item as="button">Spanish</Dropdown.Item>
            <Dropdown.Item as="button">Turkish</Dropdown.Item>
          </DropdownButton>
        </div>
        <div className="col-12 login_brand">
          <a href="#" className="image mb-5 mb-sm-10">
          <img src="/image/brand.svg" alt="Nav Image" />
          </a>
        </div>
        <div className="login_form">
          <div className="form_body bg-white  px-5 px-sm-7 py-10 mx-auto">
            <h1 className="text-center mb-5">Sign In</h1>

            <form onSubmit={onLogin}>
              <div className="mb-sm-7 mb-4">
                <label htmlFor="formInputEmail" className="form-label">
                  Email <span className="required"></span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter Email"
                  id="formInputEmail"
                />
              </div>
              <div className="mb-sm-7 mb-4">
                <div className="d-flex justify-content-between">
                  <label className="form-label">
                    Password
                    <span className="required"></span>
                  </label>
                  <a
                    href="https://hms-saas.infyom.com/password/reset"
                    className="link-info fs-6 text-decoration-none"
                  >
                    Forgot Password ?
                  </a>
                </div>
                <input
                  type="password"
                  className="form-control"
                  name="email"
                  placeholder="Enter Password"
                  id="formInputEmail"
                />
              </div>
              <div className="mb-sm-7 mb-4 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="formCheck"
                  name="remember"
                />
                <label className="form-check-label">Remember Me</label>
              </div>
              <div className="form_btn">
                <button type="submit" className="btn btn-primary w-100">
                  Login
                </button>
              </div>
              <div className="d-flex align-items-center mt-4">
                <span className="text-gray-700 me-2">
                  {" "}
                  Don’t have an account?
                </span>
                <a href="#" className="link-info fs-6 text-decoration-none">
                  Sign Up
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <div className="col-lg-9 col-12 all-btns">
                <div className="container-fluid">
                <div className="row">
                  {buttons.map((button, index) => (
                    <div className="col-md-3 col-6" key={index}>
                      <Button
                        variant={button.color}
                        className={`mx-sm-0 m-2  w-100 rounded-pill login_btns ${button.color}`}
                        onClick={()=>setRole(button.role)}
                      >
                        {button.name}
                      </Button>
                    </div>
                  ))}
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
